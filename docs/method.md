# Method — how the drawings were measured and verified

## The source of truth

The two SVG files in `variations/` came from the project's working record. Each
drawing had its own page there. On each page the drawing appears in a fenced
`svg` code block.

A page can hold more than one such block. An earlier block can be a negative
control, which is a version that must not be used. **The last block on the page
is the live source.** Extraction always takes the last block.

## The identity check

Each page publishes the SHA-256 of its live source. The extracted file must hash
to that published value. If it does not, the file is not committed.

Both files in this repository passed that check.

| File | SHA-256 | Lines |
|---|---|---:|
| `variations/variation-a.svg` | `7cb7f6ad45d6743bedbe8d6c7ca941f0c671510a547ebaa3e8e7278824d42339` | 232 |
| `variations/variation-b.svg` | `513b6923b8ba98642089d40fbfe404c5b15b82068ed820be68c7b3cfef1d24f4` | 177 |

`CHECKSUMS.txt` holds the same two values. Check them with `sha256sum -c`.

## The render check

Each committed SVG must draw on its own in a browser. Both files were loaded in
headless Chromium and rendered to a PNG at 512 x 512 pixels. Each render was then
inspected for non-blank content and for the expected palette colours. Both files
passed.

The script that runs this check is [`../tools/verify-renders.js`](../tools/verify-renders.js).
Run it with a Playwright runner.

## The measurement instrument

The score sheets in `scores/` were produced with this instrument.

- Render the source at 1024, 256 and 64 pixels in headless Chromium at an exact
  viewport.
- Convert each render to raw RGB with `ffmpeg`.
- Read the bytes with `python3` and a connected-component labeller.
- Both sources use a 512 viewBox. So a render at 1024 pixels gives 4 pixels for
  each unit at the style guide's 256 unit reference. **Every published number is
  stated at 256.**

Three named measurements are used.

- **Element ablation.** Write `display="none"` into the SVG text for one named
  element, load the file again, and count the changed pixels. That count is the
  element's visible contribution in square units. The positive control is a
  render with nothing hidden, which must give 0 changed pixels.
- **Frame share.** Take the bounding box of pelican-coloured pixels in the
  finished render. This is the **composite** instrument: the bicycle occludes
  part of the bird, and the composite figure counts that occlusion. An isolated
  group instrument reports a higher figure for the same drawing, which is why two
  reviewers can both be correct and still differ by about 5 points. The composite
  figure is the published one.
- **Contacts.** Measure a contact as the connected colour cluster in the render.
  Never measure it as the shape's own size in the source.

## Gaps and face numbers are source-exact

A render overstates a gap. A bounding box is not a gap at all. So every gap
figure and every face number is measured from the source geometry, not from a
render. A sub-pixel tip makes a render read low, which is the same problem.

## The reference image

The agreed reference is concept C7, "Up the hill". It is one 1254 x 1254 PNG. Its
SHA-256 is
`e63488aed043c0177b2c36187edc3e8f4d3ab4337e4755ef9aa9d039eed83ded`.

**The PNG is not in this repository.** The only copy available to the author of
this commit sits behind an access-controlled internal link. That link cannot be
published here, and the file bytes cannot be read without it. So the file is left
out, and this note records the reason.

The SHA-256 above is enough to verify the file when someone with access adds it.
Add it at `reference/concept-c7.png` and add its checksum line to
`CHECKSUMS.txt`.

The reference has known faults that were never waived. The recorded faults are a
retained hard-edged flank shadow with soft tonal variation elsewhere, and two
off-palette environment colours: sky reads `#7AC8F4` against the guide's
`#8DD5F0`, and hill reads `#6EAE6D` against the guide's `#6FBE74`.

A ruling settles what the reference binds. **The reference binds the composition
and the pose. The written style guide binds the colour, the fill and the line.**
So a drawing is not penalised for a flatter fill or a more exact palette than the
reference.

## Rework and re-scoring

A score belongs to an exact set of bytes. When a builder reworks a drawing, the
hash changes, and the score must be measured again.

Variation A was reworked after its first amended score. The re-score first proved
that the change was contained. It compared the two renders at 1024 pixels, found
9,263 differing pixels of 1,048,576, and showed that all of them lie inside one
box that holds the bill, the pouch and the face. Only the rows that the change can
reach were measured again in full. The other rows were each given a named test and
found unmoved. They were not assumed to be unmoved.

## A published figure can be corrected

Two figures in the score trail differ from earlier published values. Both
differences are definitional, and neither one moves a row.

- The mouth-to-pouch distance on the previous variation A source was published as
  12.67 units. A later run gave 12.4323 units on the same bytes. The first figure
  used an ink tolerance band. The second used the exact swatch `#F6A14D`. Both say
  the same thing: the mark was about 12.5 units from the pouch, and it is now
  0.2500.
- The contacts-hidden pair at 64 pixels was published as cream 265 against cobalt
  231. A later run gave 302 against 233, because a slightly wider set of contact
  elements was hidden. On every variant of the test the pair is identical before
  and after the rework. So the row does not move on any reading.

## What the numbers do not do

The scores do not choose a winner. A human does that.
