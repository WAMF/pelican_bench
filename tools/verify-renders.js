// Verify that every committed SVG draws on its own in a browser.
//
// Each file is loaded directly as a page. The script renders it at 512 x 512
// pixels, reads the pixels back, and checks three things:
//   1. the page reports a non-zero drawing size;
//   2. the render is not one flat colour;
//   3. the render contains the five colours the palette rule requires.
//
// Run with a Playwright runner, from the repository root.

const fs = require('fs');
const path = require('path');

const REQUIRED = [
  [0xFF, 0xF1, 0xC9], // pelican cream
  [0xF4, 0x7B, 0x59], // coral bill
  [0xF6, 0xA1, 0x4D], // tangerine pouch
  [0x2E, 0x6F, 0xCD], // cobalt frame
  [0x8D, 0xD5, 0xF0], // sky background
];

const SIZE = 512;

function svgFiles(dir, out) {
  for (const name of fs.readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules') continue;
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) svgFiles(full, out);
    else if (name.endsWith('.svg')) out.push(full);
  }
  return out;
}

module.exports = async ({ page }) => {
  const files = svgFiles('.', []).sort();
  if (files.length === 0) throw new Error('no SVG file found');

  let failures = 0;

  for (const file of files) {
    await page.setViewportSize({ width: SIZE, height: SIZE });
    await page.goto('file://' + path.resolve(file));

    const box = await page.evaluate(() => {
      const svg = document.querySelector('svg');
      if (!svg) return null;
      const r = svg.getBoundingClientRect();
      return { width: r.width, height: r.height };
    });

    const shot = await page.screenshot({ type: 'png' });
    const counts = await page.evaluate(async (dataUrl) => {
      const XHTML = 'http://www.w3.org/1999/xhtml';
      // The page is an SVG document, so an element must be made in the XHTML
      // namespace to get a real HTML canvas and a real HTML image.
      const img = document.createElementNS(XHTML, 'img');
      await new Promise((ok, no) => { img.onload = ok; img.onerror = no; img.src = dataUrl; });
      const c = document.createElementNS(XHTML, 'canvas');
      c.width = img.width; c.height = img.height;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const d = ctx.getImageData(0, 0, c.width, c.height).data;
      const seen = new Set();
      for (let i = 0; i < d.length; i += 4) {
        seen.add((d[i] << 16) | (d[i + 1] << 8) | d[i + 2]);
      }
      return Array.from(seen);
    }, 'data:image/png;base64,' + shot.toString('base64'));

    const seen = new Set(counts);
    const missing = REQUIRED.filter(
      ([r, g, b]) => !seen.has((r << 16) | (g << 8) | b)
    );

    const problems = [];
    if (!box || box.width === 0 || box.height === 0) problems.push('no drawing size');
    if (seen.size < 2) problems.push('render is one flat colour');
    if (missing.length > 0) {
      problems.push(
        'missing required swatch: ' +
          missing.map(([r, g, b]) =>
            '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0').toUpperCase()).join('')
          ).join(' ')
      );
    }

    if (problems.length === 0) {
      console.log('PASS ' + file + ' — ' + seen.size + ' distinct colours');
    } else {
      failures += 1;
      console.log('FAIL ' + file + ' — ' + problems.join('; '));
    }
  }

  if (failures > 0) throw new Error(failures + ' SVG file(s) failed to render');
  console.log('All ' + files.length + ' SVG file(s) render.');
};
