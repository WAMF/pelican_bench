# How to add a route

A **route** is one method of drawing the pelican on the bicycle. Follow these
rules so that every route stays comparable and every file stays verifiable.

## 1. One directory per route

Put the route in its own directory at the top level of the repository.

```
variations/    route A and route B
route-c/       route C, when it lands
```

Name the directory after the route. Do not put a new route inside another
route's directory.

## 2. The live drawing is a real `.svg` file

Commit the drawing as a file with the `.svg` extension. Do not commit the SVG
inside a fenced code block in a markdown file. Do not commit only a rendered
PNG.

The file must open in a browser on its own and draw the picture. Test this before
you commit.

If a route keeps intermediate stages, commit each stage as its own `.svg` file.
Do not overwrite a stage.

## 3. Every artwork file gets a checksum entry

Add one line to `CHECKSUMS.txt` for each artwork file you commit.

```
sha256sum <your-file> >> CHECKSUMS.txt
```

Then confirm that the whole file still passes.

```
sha256sum -c CHECKSUMS.txt
```

A score belongs to an exact set of bytes. If the drawing changes, the checksum
changes, and the score must be measured again.

## 4. Obey the palette rule

Use the eleven colours in the README table. Use flat fills. Do not add a twelfth
colour.

Do not use a gradient, a filter, an opacity value, a mask or an embedded image.

## 5. Score the route on the same rubric

Use the eight rows in [scores/rubric.md](scores/rubric.md). Publish a score sheet
at `scores/<route>.md`. State the measurement behind each row. State the SHA-256
of the file you measured.

## 6. Do not change another route

Do not edit another route's SVG. Do not re-score another route unless its source
bytes changed.

## 7. Open a pull request

Do not push to `main`. Open a pull request and ask for a review.
