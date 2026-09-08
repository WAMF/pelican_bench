# pelican_bench

A benchmark for hand-authored SVG illustration.

## What the benchmark is

The task is one picture: a pelican rides a bicycle. Each entry draws that picture
as a hand-authored SVG file. No entry uses a raster tracer. No entry uses a
generated path dump.

One agreed reference image binds the composition and the pose. One written style
guide binds the colour, the fill and the line. A rubric of eight rows scores the
finished drawing. Each row scores 5 at most, so the total is 40 at most.

An entry is called a **route**. A route is one method of making the drawing. Two
routes are finished. A third route is in progress.

## The palette rule

Every drawing uses these eleven colours and no others.

| Swatch | Hex | Use |
|---|---|---|
| Pelican cream | `#FFF1C9` | The pelican body, head, neck, wing and legs. |
| Pelican shadow | `#E9C98A` | One large underside or wing-shadow shape only. |
| Coral bill | `#F47B59` | The upper bill and the bill edge. |
| Tangerine pouch | `#F6A14D` | The throat pouch and the lower bill. |
| Cobalt frame | `#2E6FCD` | The bicycle frame, fork, handlebar stem and crank. |
| Lemon wheel accent | `#FFD24A` | Wheel hubs, pedal caps and small motion accents. |
| Raspberry accent | `#E94D73` | The saddle, the grips and one small decorative accent. |
| Deep ink | `#233047` | Outlines, eyes, mouth arcs, wheel rims and key joins. |
| Sky background | `#8DD5F0` | The full background field. |
| Cloud highlight | `#FFF9E8` | One or two large cloud or ground highlight shapes. |
| Grass accent | `#6FBE74` | A simple ground strip, or up to three large environment accents. |

Five of the eleven must be present in the finished drawing: `#FFF1C9`,
`#F47B59`, `#F6A14D`, `#2E6FCD` and `#8DD5F0`.

Use flat fills only. Do not add a twelfth colour. To add a colour, you must
remove one of the eleven.

## The agreed reference

The reference is concept **C7**, "Up the hill". Five reviewers voted on eight
concepts. The vote gave C1 two votes, C7 two votes and C5 one vote. The lead
broke the tie for C7 on pelican identity and riding control.

C7 is one 1254 x 1254 PNG. Its SHA-256 is
`e63488aed043c0177b2c36187edc3e8f4d3ab4337e4755ef9aa9d039eed83ded`.

**The PNG file is not in this repository yet.** See
[docs/method.md](docs/method.md), section "The reference image", for the reason.
The SHA-256 above is the identity check for the file when it is added.

## The current scores

| Route | Drawing | Score |
|---|---|---|
| A | `variations/variation-a.svg` — "Still climbing" | **34 of 40** |
| B | `variations/variation-b.svg` — "Over the top" | **31 of 40** |

The row-by-row sheets are in [scores/variation-a.md](scores/variation-a.md) and
[scores/variation-b.md](scores/variation-b.md). The rubric is in
[scores/rubric.md](scores/rubric.md).

Neither drawing reaches the standard the benchmark asks for, which is top studio
level. Three marks in forty is a small gap. The scores inform a human choice.
They do not make it.

## Route C is in progress

Route A and route B both used a fault-first method. The builder drew the finished
picture, a reviewer measured faults, and the builder fixed them. A human reviewer
judged both finished drawings poor and asked for a painter's layered method
instead.

Route C is that method. It has four stages: research on figure construction, a
skeleton that proves the pose is physically possible, a block-in from primitive
shapes for proportion, then a fused and cleaned drawing. All four stages are kept
as separate files.

Route C uses the same eleven-colour palette, the same C7 reference and the same
eight-row rubric, so its score is comparable. Route A and route B are not
changed.

Route C will be added to this repository when it lands.

## How to add a route

Read [CONTRIBUTING.md](CONTRIBUTING.md).

## Verify the files

Every artwork file has a SHA-256 entry in [CHECKSUMS.txt](CHECKSUMS.txt).

```
sha256sum -c CHECKSUMS.txt
```

The two SVG values also appear on the source pages the drawings came from, so a
reader can confirm that these files are the exact files that were scored.
