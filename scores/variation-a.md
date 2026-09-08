# Score sheet — variation A, "Still climbing"

File: [`../variations/variation-a.svg`](../variations/variation-a.svg)

SHA-256 of the scored bytes:
`7cb7f6ad45d6743bedbe8d6c7ca941f0c671510a547ebaa3e8e7278824d42339`

Total: **34 of 40**.

The rubric and the scoring rule are in [rubric.md](rubric.md). Every number below
is stated at the guide's 256 unit reference. The file uses a 512 viewBox, so a
render at 1024 pixels gives 4 pixels for each unit.

## The result

| # | Row | Score |
|---|---|---:|
| 1 | Pelican identity | 5 |
| 2 | Bicycle identity | 4 |
| 3 | Riding | 4 |
| 4 | Bluey style fidelity | 5 |
| 5 | Fidelity to the agreed reference | 4 |
| 6 | Craft | 4 |
| 7 | Small-size legibility | 4 |
| 8 | Large-size quality | 4 |
| | **Total of 40** | **34** |

## Row by row

**Row 1 — pelican identity. 5.** The bill and the pouch are the strongest pelican
signal in either finished drawing. They hold at every size. The one earlier
deduction is closed. The mouth mark now sits **0.2500 units** from the nearest
pouch fill pixel, so it lies along the bill-to-pouch join. It measures
21.00 x 9.00 units. It clears every other ink mark by 6.4856 units, against a
floor of 6.00. The coral slab thins from 694.9 to 633.1 square units. The pouch
bowl deepens from 745.2 to 844.4 square units. The reference shows a thin upper
mandible over a deep bowl, so this is a gain and not only a change. No new
deduction is measurable.

**Row 2 — bicycle identity. 4.** Two true circles of equal diameter. The frame is
2056.5 square units. The drivetrain reads at 242.6 square units over a visible
box of 37.8 x 34.5 units. Both wheels sit on the ground at 0.00. One deduction:
the handlebar is visible but thin at 31.4 square units.

**Row 3 — riding. 4.** Two wings reach two grips. The near wing contributes 579.1
square units and its tip comes within 0.25 units of the near grip. The far wing
touches the far grip at 0.00. The smallest contact is 9.00 units, against a floor
of 8.00. One deduction: the far foot rests on the far pedal with no leg above it.

**Row 4 — Bluey style fidelity. 5.** The guide asks for one short `#233047` mouth
arc at the bill-to-pouch join. That rule is now met. The mouth is 0.2500 units
from the pouch, and its width of 21.00 units is inside the guide's band of 18 to
28. The other face numbers pass source-exact: eye dots 6.00 x 6.00 against a band
of 5 to 7, eye centres 24.00 apart against a band of 24 to 32, and both eyes in
the upper third. This drawing has no brows. A ruling states that a drawing with
no brows obeys the guide, so the absent brows are not a fault. The palette holds
exactly the eleven guide swatches with no twelfth colour. The file has no
gradient, filter, opacity value, mask or embedded image.

**Row 5 — fidelity to the agreed reference. 4.** The composite pelican bounding
box is 54.4 percent of the frame width and 66.2 percent of the frame height,
against targets of 55 and 70. The lean is 16 degrees. The cloud is cut as the
pose split asks. Green covers 9.0 percent of the frame, against 15.5 percent in
the reference. One deduction: the front wheel sits 28.5 units above the bottom
edge, where the pose split asks for 16.

**Row 6 — craft. 4.** The source is clean to read. It has named groups, no path
soup, no machine coordinates and no stray node. No named element is invisible;
the smallest visible contribution is the handlebar at 31.4 square units. Three
deductions survive: one cobalt cluster at the seat tube measures 9.50 x 7.25
units and is under the 8 unit shape floor, two grass blade tips are cut by the
wheel ring, and a column of four capsules sits at the centre of the picture. One
craft item improved but removed no deduction. The bill and the pouch used to
carry two offset outlines at their join, and the join read as a band of 6.50 to
9.25 units where the drawing's own outline band reads 6.00. The pouch is now
seated on the bill's lower edge, and the band reads 6.00 to 7.25.

**Row 7 — small-size legibility. 4.** At 64 pixels cream is 255 pixels and grass
is 469 pixels, a ratio of 1.85. The largest cream blob is 110 pixels. Ink is 630
pixels. The bird, the bill, the pouch, both wheels, the frame, the grips and the
saddle all read. This is the better thumbnail of the two finished drawings.

**Row 8 — large-size quality. 4.** Curves are smooth and joins are clean. The
file has no stray node and no clipping error. Off-palette render pixels are 1.91
percent at 1024, and all of that is edge antialiasing. Two deductions survive:
the capsule column at the centre, and the seat-tube cobalt cluster. Both finished
drawings also share one defect. A filled shape carries a 12 unit centred ink
stroke, and its outline band reads 6.00 units. A tube is drawn as an ink path,
and its band reads 3.00 units. The guide names uneven outline widths as a defect
at 1024. The defect costs each drawing the same, so it separates nothing.

## The score trail

| Sheet | Score | Source SHA-256 |
|---|---:|---|
| Original | 28 of 40 | the pre-rework source |
| First amendment | 32 of 40 | `8148fc274cca6762215587e44f7bf63746631f3725ca6ca1bcc49e9a2f9879e1` |
| Second amendment — current | **34 of 40** | `7cb7f6ad45d6743bedbe8d6c7ca941f0c671510a547ebaa3e8e7278824d42339` |

The builder reworked the coral bill, the tangerine pouch and the mouth mark after
the first amendment. Three path `d` attributes changed. Nothing else changed.

The change was proved to be contained before the drawing was scored again. At
1024 pixels, 9,263 render pixels of 1,048,576 differ between the two sources.
That is 0.88 percent. Every one of them lies in the box
`x[38.75..106.00] y[84.00..128.75]` at the 256 unit reference. That box is the
bill, the pouch and the face. No pixel outside the head changed.

Rows 1, 4 and 6 were measured again in full. Rows 2, 3, 5, 7 and 8 were tested
and found unmoved. They were not assumed to be unmoved.
