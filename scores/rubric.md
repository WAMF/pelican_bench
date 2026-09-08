# The rubric

Eight rows. Each row scores 5 at most. The total is 40 at most.

## The scoring rule

Start each row at 5. Subtract one mark for each deduction that is still
measurable on the current source bytes.

A deduction must be a measurement, not an opinion. State the number and state
the floor or the band it fails.

A deduction that a later rework closes is removed from the row. A row does not
move when a deduction only improves and does not close.

## The eight rows

| # | Row | What it asks |
|---|---|---|
| 1 | Pelican identity | Does the drawing read as a pelican? Bill, pouch, neck and face. |
| 2 | Bicycle identity | Does the machine read as a bicycle? Wheels, frame, drivetrain, handlebar. |
| 3 | Riding | Does the bird read as riding? Contact at both grips and both pedals. |
| 4 | Bluey style fidelity | Does the drawing obey the written style guide? Palette, flat fill, line, face numbers. |
| 5 | Fidelity to the agreed reference | Does the drawing match the C7 composition and pose targets? |
| 6 | Craft | Is the source clean? Named groups, no invisible element, no sub-floor sliver. |
| 7 | Small-size legibility | Does the picture still read at 64 x 64 pixels? |
| 8 | Large-size quality | Does the picture hold up at 1024 x 1024 pixels? |

## Row 3 is won by the silhouette

At 64 pixels the two grips merge into one blob of about 2 pixels, and the two
pedal caps merge into one blob of about 1 pixel. So the riding read cannot come
from the contacts at that size. It must come from the leg, the body astride the
frame, and the open sky between them.

The build check is a render at 64 pixels with the contact elements hidden.

The four contacts are still required at full size. Each contact must clear a
floor of 8 units at the 256 unit reference.

## Every gap figure is source-exact

A render overstates a gap. A bounding box is not a gap at all.

Measure a gap from the source geometry, not from a render. Face numbers are
source-exact for the same reason: a sub-pixel tip makes a render read low.

## The brow is conditional

The style guide's face rules cannot all hold on a strict side view. A ruling
settled this. A drawing with no brows still obeys the guide. A drawing that draws
brows owes five extra tests, because the waiver has a price.

## What the rubric does not do

The rubric does not choose a winner. A human does that.
