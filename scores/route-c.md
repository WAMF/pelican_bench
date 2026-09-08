# Route C — score sheet

Route C is a third contender built with a painter's layered method: research, then a
skeleton, then a block-in, then a fuse-and-clean-up pass. It is additive. It does not
change route A or route B.

Scored by Artis. Route A and route B were scored by the same person, on the same rubric,
against the same reference, on one instrument, in one process, on the same day.

## The file measured

| Field | Value |
|---|---|
| File | `route-c/route-c-final.svg` |
| SHA-256 | `cb7e07f4f1c590750de8ac408dc29e4c3a75ecaef542d4deca08c720e9f3454e` |
| Size | 3,313 bytes |
| viewBox | `0 0 512 512` |

A score belongs to an exact set of bytes. Every number below was measured on this file.

### A checksum note that belongs in the record

The four Route C stage files were first published with different checksums, taken on
standalone files that are no longer available. The bytes in this directory hash to the
four values in `CHECKSUMS.txt`, and those are the reproducible ones. No drawing was
reshaped to make a checksum fit.

**These bytes are the drawing that was measured when Route C was delivered, and that was
proved rather than assumed.** Ten construction figures published with the delivery all
reproduce exactly from these bytes: shoulder-to-grip reach 104.31, the two arm segments
114.72, near knee angle 172.82 degrees, near pedal 57.58 from the bottom bracket at
minus 20.32 degrees, riding triangle 84.40 and 175.32 and 156.98, centre of mass x=238,
and a nearest support margin of 68. Ten of ten. The checksum difference is a file
wrapper, not a different drawing.

## The result

| # | Rubric row | Route C | Route A | Route B |
|---|---|---:|---:|---:|
| 1 | Pelican identity | **2** | 5 | 5 |
| 2 | Bicycle identity | **3** | 4 | 3 |
| 3 | Riding | **3** | 4 | 4 |
| 4 | Bluey style fidelity | **1** | 5 | 5 |
| 5 | Fidelity to the agreed reference | **3** | 4 | 3 |
| 6 | Craft | **2** | 4 | 4 |
| 7 | Small-size legibility | **3** | 4 | 3 |
| 8 | Large-size quality | **3** | 4 | 4 |
| | **Total of 40** | **20** | **34** | **31** |

**Route C does not beat route A at 34 of 40 and does not beat route B at 31 of 40.** It
is 14 marks below A and 11 below B, and it loses marks on all eight rows.

**The numbers do separate the three drawings.** A gap of 11 marks in 40 is not a rounding
difference. Route C misses three style-guide numbers that neither A nor B misses, and it
fails the readable foot-to-pedal contact, which the benchmark records as a requirement.

**No drawing here reaches top studio level.** That was true of A and B before Route C and
it is still true.

## The instrument

Rendered at 1024, 256 and 64 pixels in headless Chromium at an exact viewport, device
scale factor 1. Converted to raw `rgb24` with `ffmpeg`, read with `python3` and a
connected-component labeller at 4-connectivity. Element visibility measured by ablation:
`display="none"` written into the SVG **text** and the page loaded fresh, because a render
taken after mutating a live DOM is not byte-comparable with one taken before it.

All three files use a 512 viewBox, so 1024 render pixels give 4 pixels per unit. **Every
number below is at the style guide's 256 unit reference.**

Scoring rule: **5 minus the deductions that are still measurable.**

### Controls, run before any number was recorded

1. Two independent renders of one source at 1024 differ by **0 changed pixels**.
2. An ablation pass that hides nothing differs from the plain render by **0 changed pixels**.
3. Route A and route B extract to the checksums in `CHECKSUMS.txt`, so the files scored are
   the files committed.
4. **The instrument reproduced route A's previously published figures to the digit before it
   measured Route C**: off-palette 1.91 percent; at 64 pixels cream 255, grass 469 and ink
   630; largest cream blob 110; composite frame share 54.4 by 66.2 percent; and by ablation
   drivetrain 242.62 square units, frame 2056.50, handlebar 31.38, near wing 579.06 and grips
   7,306 render pixels.

Control 4 is what makes this a like-terms comparison and not three separate opinions.

### One zero reading, and why it is real

The mouth's clearance to all other visible ink reads **0.0000 units** against a 6.00 unit
floor. A zero is treated as a suspected instrument fault until a control says otherwise.
Two controls prove the metric is live: it returns **13.2594** for the mouth against the sky
colour, and **0.0000** for the mouth against its own pixels. Two known traps are avoided by
construction. "Other ink" is taken from the render with the mouth hidden, so the comparison
set cannot contain the mark being measured. Ink is the exact outline colour `#233047`, so the
full-bleed sky fill is not counted as ink. The zero then has a shape: **177 of the mouth's
1,072 ink pixels touch visible other ink, across the mark's full 21.75 unit width.** The
mouth is merged into the outline, not merely close to it.

## Row by row

### Row 1 — pelican identity. **2**

The bird reads as a long-billed water bird, and the bill and pouch are both large and
coloured to the guide. Three deductions, all on the row's own subject.

1. **The bill and pouch read as an open beak, not as two connected shapes.** The separation
   band between the coral and the tangerine measures a median **9.75** units and a worst
   **18.25** over 120 scan columns, against the drawing's own 6.00 unit outline band. Route A
   reads median **6.50**, worst **7.25**.
2. **The pouch is a shallow crescent, not a hanging bowl.** Tangerine 374.25 square units
   against coral 310.06, a ratio of 1.21. The reference shows a deep bowl under a thin upper
   mandible. At 64 pixels the pouch holds **19** tangerine pixels against A's 45 and B's 43.
3. **No mouth reads.** Only **2** separate face marks read inside the head, against **3** on A
   and **4** on B. The measurement is in the zero-reading section above.

### Row 2 — bicycle identity. **3**

Two true circles of equal 64.00 unit source diameter, reading 70.00 and 70.25 units across.
**Both wheels are on the ground at 0.00 units**, which route B does not manage. The drivetrain
is the second strongest of the three: chainring 451.00 square units plus crank 90.56. Two
deductions.

1. **The frame is not coherent, because the bird occludes almost all of it.** The frame element
   contributes **120.88** square units visible, against **2056.50** for route A's frame. Total
   visible cobalt is **293.50** square units against **1403.62** on A and **923.88** on B, the
   least of the three by a factor of 3.1. No top tube, down tube or seat tube reads between the
   wheels.
2. **Small colour shapes fall below the 8.00 unit floor**, so what shows of the machine reads as
   fragments: two cobalt shards at **2.50 x 1.50** and **0.25 x 0.25** units, and both wheel hubs
   at **5.50** units of visible lemon, because a 12 unit centred ink stroke cuts a 6.00 unit hub
   radius down to 3.00. Neither A nor B has a single lemon shape below the floor: A's smallest is
   9.25 and B's is 8.50.

### Row 3 — riding. **3**

**This row carries the layered method's clearest win.** The pose is physically sound by
measurement, not by impression: shoulder-to-grip reach **104.31** units against **114.72** of
available arm segment, so the arm is not stretched; near knee at **172.82 degrees**; centre of
mass at x=238, **68 units** inside a wheel contact base of x=170 to x=390. Neither A nor B can
show this, because neither was built from a skeleton. The hand-on-grip contact also reads: the
hand contributes **247.50** square units, and both grip clusters clear the 8.00 unit floor at
**16.25 x 12.25** and **8.75 x 10.50** units. Two deductions.

1. **The foot-to-pedal contact does not read at all.** The pedal's visible lemon cap is
   **2.25 x 3.50 units, 4.19 square units**, against the 8.00 unit floor, and the nearest leg
   pixel is **6.2500 units** away. Route A's smallest riding contact is **10.00** units and route
   B's is **8.50**. A readable foot-to-pedal contact is a requirement of this benchmark, not a
   preference.
2. **There is no far leg, no far wing and no foot.** The leg ends in a rounded stub in open air
   above the crank, with a 6.75 x 3.75 unit pocket of sky in the gap.

### Row 4 — Bluey style fidelity. **1**

What holds is not a short list. Exactly the **eleven** palette colours with no twelfth. **Zero**
gradients, filters, opacity values, masks, data URIs and embedded images, and one flat fill per
shape. The cloud, hill and grass tufts carry **no ink outline**, which is what the guide asks and
what route B lost a mark for. The main ink stroke is 12 in a 512 viewBox, exactly 6.00 units. Eye
dots measure **7.00** units, inside the 5-to-7 band. Four deductions.

1. **Eye centres are 15.5724 units apart against a 24-to-32 band** — 8.43 units short.
   Source-exact. Same instrument: **A 27.1155, B 24.0000**, both in band.
2. **Both eyes sit below the upper third of the head.** The head fill spans y 91.43 to 202.09, so
   the upper third ends at y=128.32; the eyes are at y=130 and y=133, missing by **0.84** and
   **2.34** units. Same instrument: A passes by 3.33 and 5.83, B by 0.33 and 0.33. This rule is
   tight for every drawing here, and only Route C is outside it.
3. **The mouth is a stroked arc, and it fails the way a stroked arc fails.** A stroked arc carries
   half its stroke past each end point, so its ends merge into the outline band. A and B both use
   a filled tapered crescent, which is the correct construction. The placement is right — the mark
   is 0.2500 units from the pouch, at the join — and the construction is what fails.
4. **The bill ends in a point.** The guide asks for a radius of at least 12.00 units on every
   visible corner. Measuring the silhouette height 3.00 units in from the bill tip: **A 30.50
   units, B 11.00, Route C 6.50**, which puts Route C's tip radius near **3.3 units**, the round
   join of its own stroke and nothing more.

**One judgement call, declared.** The two eye misses are counted as two deductions, because they
are two separate rules. A reader who merges them into one eye-placement fault reads this row as
**2** and the total as **21 of 40**. Nothing in the conclusion turns on it.

### Row 5 — fidelity to the agreed reference. **3**

Eight of the ten copy-from-the-reference items are present: the side view, the uphill-left travel
direction, the pelican over the bicycle, the two circular wheels, the neck, the hill, the sky and
one cloud.

**Route C wins three fidelity measures outright.** Its **cloud is whole**, where route A's is cut
by the top edge with 128 cloud pixels on row 0. Its green share is **18.1 percent** against the
reference's **15.5**, the closest of the three (A **9.0**, B **24.1**). And on one instrument
applied to all three, its forward lean is **9.1 degrees**, the only one inside the guide's 8-to-18
band (A **36.2**, B **20.2**). Two deductions.

1. **The large pouch is a named copy item and this pouch is not large.** Measured on row 1.
2. **Two grass tuft clusters against the reference's three.** A has **3**, B has **2**.

**One measurement declined, and why.** The lean figure is instrument-dependent for this pose
family: on the preserved armature's own gesture-line chord the same drawing reads **25.7 degrees**,
outside the band. A long neck puts the head far forward of the trunk, so "the lean" has two
defensible definitions that disagree by 16 degrees. No deduction is taken on an ambiguous measure.

### Row 6 — craft. **2**

What holds: **32** named ids, **zero** non-integer coordinates, a longest path `d` attribute of 120
characters, and the file parses — so this is genuinely not path soup. **The four construction layers
are preserved as separate files, which no other route offers, and it is a real asset for anyone
maintaining the drawing.** Three deductions.

1. **The seat is drawn and never seen: 0.00 square units.** Confirmed on two renders. The
   ablate-nothing control read 0 changed pixels in the same pass that read 346 pixels for the pedal
   and 595 for the handlebar, so the metric was working when it returned zero. The saddle sits
   entirely behind the pelican's body.
2. **Two interior sky pockets fall below the 6.00 unit visible-gap floor, and both are real shapes:**
   **6.75 x 3.75 units (186 render pixels)** at the crank-to-leg junction, and **5.75 x 1.50 units
   (66 pixels)** where the front tyre meets the hill. Route A's two sub-floor pockets are 3 and 1
   render pixels, which are single antialiasing specks, and route B has none.
3. **Five colour shapes fall below the 8.00 unit meaningful-shape floor**: the pedal cap at 2.25,
   both hubs at 5.50, and two cobalt shards at 2.50 and 0.25.

**One observation that is not a deduction.** The source is 3,313 bytes on **6 lines**, against A's
**232** and B's **177**. The ids and coordinates are clean, so the no-path-soup test passes and no
mark is taken. It is still the hardest of the three to read.

### Row 7 — small-size legibility. **3**

At 64 pixels the bird, the beak, both wheels, one grip and the chainring read. The frame reads as a
thin line and no pedal contact reads.

| At 64 pixels | Route C | Route A | Route B |
|---|---:|---:|---:|
| cream pixels | **160** | 255 | 168 |
| largest cream blob | **63** | 110 | 74 |
| largest cobalt blob | **12** | 53 | 24 |
| coral pixels | **20** | 39 | 29 |
| tangerine pixels | **19** | 45 | 43 |
| cream-to-grass ratio | **5.3** | 1.8 | 6.5 |

Two deductions. **The frame does not read** — a largest cobalt blob of 12 pixels against A's 53 is
the thinnest machine of the three. **The bill and pouch are the weakest of the three at this size**,
at 20 and 19 pixels. Route C beats route B only on the grass ratio.

### Row 8 — large-size quality. **3**

Curves are smooth, the file parses, and there are no stray nodes or clipping errors. Off-palette
pixels are **1.69 percent**, between A's 1.91 and B's 1.58, and all of it is edge antialiasing. Two
deductions.

1. **Outline widths are uneven, and here by declaration.** Route C carries three stroke widths in
   its 512 viewBox — **12, 10 and 8**, which is **6.00, 5.00 and 4.00** units. The hand takes a 5.00
   unit outline where the guide asks 6.00. Routes A and B share a version of this defect and both
   were docked for it in the same words, so this is applied on like terms.
2. **The bill-to-pouch join reads as a black wedge at full size.** The band runs **7.25 to 18.25
   units, median 9.75**, against the drawing's own 6.00 unit band. Route A's equivalent join band
   reads **6.00 to 7.25**.

## Did the layered method change the result?

**The layered method did the job it was aimed at, and the result is not noise.** On the one thing an
armature exists to fix, Route C is the best of the three and the only one with evidence: the arm
reaches the grip with 10.41 units of segment to spare, the knee holds at 172.82 degrees, and the
centre of mass falls 68 units inside the wheel contact base. Route C also holds the whole cloud, the
closest green share to the reference, and the only forward lean inside the guide's band. The method
delivered a pose that works physically, in one pass.

**What it did not do is finish the drawing.** Every large deduction above falls in the last of the
four stages, the fuse-and-clean-up pass. The bill and pouch were never resolved into two connected
shapes, so they read as an open beak. The mouth was drawn as a stroked arc, which is the wrong
construction for a mark that must stay clear of an outline. Two eye rules were missed by small
margins that one source-exact check would have caught. The saddle was left in the file behind the
body. And the frame was left occluded by the bird blocked in on top of it — which is instructive,
because that is the block-in stage's own failure mode: masses were placed before anyone checked what
they would hide.

**So the honest finding is narrower than either "the method worked" or "it is all noise".** The
layered method reliably produced a better skeleton, and skeleton quality is not what this rubric
mostly measures. Six of the eight rows score subject identity, style compliance, legibility and
craft, and all of those are properties of the clean-up pass. Routes A and B reached 34 and 31 by
spending five rounds of measured repair on exactly those rows. Route C had one pass and no repair
round. **The 11-to-14 mark gap is not evidence that the layered method is worse. It is evidence that
this rubric scores finishing, and Route C has not been finished.** The fair test of the method is
Route C's armature carried through the same measured repair loop routes A and B went through, and
that test has not been run.

## What this sheet does not do

- It does not pick a winner. That judgement belongs to a human reviewer.
- It does not change any drawing. Routes A and B are frozen and Route C is finished.
- It does not re-score route A or route B. Their scores stand on unchanged files.
