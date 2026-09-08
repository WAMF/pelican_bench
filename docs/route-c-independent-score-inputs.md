# Task inputs — the independent score of Route C

This page records what the Route C score sheet at [`scores/route-c.md`](../scores/route-c.md) was
built from, so the score stays traceable to what was asked and measurable from what is committed.

## Why the score exists

A human reviewer read the two finished drawings and judged both poor. His diagnosis was that the
**method** was the limit, not the individual repairs: routes A and B were both built fault-first —
draw, then measure, then repair the measured faults. He asked for a painter's layered approach
instead, in his own words:

> start with simple shapes to outline the right proportions, also create a skeleton to make sure the
> pelican works physically, then start to fuse the shapes and clean up for the final image, and do
> some research on how to draw.

Route C was built to test that diagnosis. The A-versus-B choice was **held** until Route C had a
score.

Route C's builder also scored it, at a provisional 34 of 40, and said an independent score was still
needed. **A builder cannot score their own drawing**, so the provisional number was not usable and
the held choice could not resolve. That is the whole reason the independent score exists.

## What the scoring task was asked to do

1. Score Route C on the **same** eight-row rubric used for routes A and B, against the **same**
   agreed reference image, on **like terms**. Reuse the existing instrument. Do not invent a new
   rubric and do not add a row.
2. Find Route C's final SVG source and record its SHA-256. A score sheet naming a checksum nobody
   can reproduce is worse than a wrong score.
3. Score all eight rows, 0 to 5, with one line of justification and the measurement behind each one.
   No row may be skipped.
4. State whether the total agrees with the provisional 34, and where it differs, say which row and
   which number moved it.
5. State plainly whether Route C beats route A at 34 of 40 and route B at 31 of 40, or does not. If
   the three totals sit within a mark or two, say that the numbers do not separate them, because that
   is the honest reading.
6. Give a finding on whether the **layered method** changed the result, or whether the result is
   within the noise of three different drawings. The request was a method question, not only a
   request for a third picture, so the method finding is part of the deliverable.

**Explicit bounds, all observed.** Do not choose a winner and do not hint at one. Do not change any
SVG. Do not commission more artwork. Do not ask the human reviewer anything about the artwork.

## Inputs, with the checksum of each

| Input | SHA-256 | What it is for |
|---|---|---|
| The agreed reference image, concept C7 | `e63488aed043c0177b2c36187edc3e8f4d3ab4337e4755ef9aa9d039eed83ded` | Row 5 is scored against this image and nothing else. **Verified before scoring: the delivered file hashes to the published value exactly.** |
| A concept comparison page, 13,331,183 bytes | `1c893b9e62a7e57452034b7c50aeca75ad8bf3be7bb84513d87b29b18da636b9` | Supplied as reference material. It holds the eight early concepts as embedded images. **It carries zero inline SVG and zero Route C content, and it is not the Route C deliverable.** Confirmed by inspection. |
| `route-c/route-c-final.svg` | `cb7e07f4f1c590750de8ac408dc29e4c3a75ecaef542d4deca08c720e9f3454e` | The drawing scored. |
| `variations/variation-a.svg` | `7cb7f6ad45d6743bedbe8d6c7ca941f0c671510a547ebaa3e8e7278824d42339` | Route A, for the like-terms comparison. Not re-scored. |
| `variations/variation-b.svg` | `513b6923b8ba98642089d40fbfe404c5b15b82068ed820be68c7b3cfef1d24f4` | Route B, for the like-terms comparison. Not re-scored. |

The reference image itself is not committed here. The only copy reachable from the scoring
environment sits behind an access-controlled internal link, so its checksum is recorded instead. The
same limit was already recorded when this repository was first populated.

## Why getting Route C's source needed a separate step

Route C's source was not committed anywhere when the scoring started, and it was not in the shared
project record either. Five routes were tried before anyone was asked for anything:

1. The shared project wiki held route A and route B and **no Route C page**.
2. Route C's published report is behind an organisation sign-in, and an automated reader cannot open
   a **peer's** published report in this environment. This is a known and already-recorded limit of
   the tooling, not a permissions mistake by anyone.
3. The artefact registry returned only that same report link, with the same limit.
4. The scoring task's own supplied files were the reference image and the concept comparison page.
   Neither carries Route C.
5. This repository's first pull request carries route A and route B as `.svg` files. Route C was not
   in it.

So the builder was asked to copy the four preserved stages into the shared record under the settled
extraction convention, change no artwork, and check the resulting checksums. **No bytes were scored
that could not be read.**

That step also surfaced the checksum problem now recorded in `scores/route-c.md`: the four originally
published stage checksums do not reproduce, because they were taken on standalone files that no
longer exist, while what survives is the inline drawing without the standalone file's wrapper bytes.
The builder correctly refused to reshape a drawing to force a checksum to match. **This repository is
the fix for that class of problem** — a real `.svg` file with a `CHECKSUMS.txt` entry cannot drift
away from the score that measured it.

## Rules applied, not re-litigated

The rubric is the eight rows in [`scores/rubric.md`](../scores/rubric.md). Six settled project rulings
were applied and none was reopened:

- The reference image binds **composition, pose, camera and subject identity**; the style guide binds
  **colour, fill and line**. Where they disagree, the style guide wins. This ruling also fixes the ten
  copy-from-the-reference items that row 5 is scored on.
- The face rules on a strict side view, and the row 4 scoring instruction that follows from them:
  score the three hard sizes and the one placement rule strictly, from the source rather than from a
  render, and a miss is a miss.
- The brow is conditional. **A drawing with no brows complies**, and the absence of brows is not
  scored as a fault on any route.
- Silhouette carries row 3.
- A gap is measured source-exact; a render overstates a gap; and a bounding box is not a gap.
- The style guide's own numbers: eleven colours, a 6 unit stroke, the face bands, a 6 unit
  visible-gap floor and an 8 unit floor for meaningful colour shapes.

**The pose split does not apply to Route C.** That split divided one reference between two builders,
route A taking the mid-climb half and route B the crest half. Route C is an additive third contender
and took no half, so it is scored against the reference itself and against the ten copy items, not
against either builder's split targets. This changes how row 5 reads and it is stated on the score
sheet too.

## The instrument, and the tooling limit that explains the disagreement

The instrument is described in full in `scores/route-c.md`, together with the four controls that ran
before any number was recorded. Two points belong here because they are about the inputs rather than
the drawing.

**The pixel census did not run in the builder's pass.** The builder disclosed, honestly, that a
bundled FFmpeg executable rejected the browser's PNG output, so raw-RGB conversion was blocked and
the provisional score rests on geometry checks and ablation counts. **Almost every large deduction on
the independent sheet comes from the census that could not run** — the bill-to-pouch join band,
visible frame area, colour clusters against the 8 unit floor, interior sky pockets, the 64 pixel read
and the merged mouth. Geometry checks confirm that a pose is buildable. They cannot see that a frame
is occluded, that a pedal cap is 2.25 units wide, or that a mouth has merged into an outline.

**The independent pass used the host `ffmpeg`, version 7.1.1, which decoded every render without
error.** So the 14 mark difference between the provisional 34 and the independent 20 is largely a
tooling gap rather than a difference of judgement. Two further deductions — the eye centre spacing and
both eyes sitting below the upper third of the head — are source-exact and needed no render at all.

**One divergence is reported rather than hidden.** Three ablation figures published with the delivery
do not reproduce on the independent instrument, and the ratios between them are not constant, so it is
not a simple render-scale difference. It changes no row, because the independent ablation is anchored
by two zero-pixel positive controls and by reproducing five of route A's previously published ablation
figures to the digit in the same pass. It could not be diagnosed further from outside the blocked
toolchain.

## What is deliberately not in this repository

This repository is public, so it carries artwork, numbers and method only. Internal task identifiers,
share tokens and internal links are held in the project's own record and are not reproduced here. That
convention was set when the repository was first populated and it is followed here without change.
