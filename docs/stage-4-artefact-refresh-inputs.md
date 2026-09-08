# Task inputs — Stage 4 comparison artefact, second refresh pass

This note records what the task that refreshed the Stage 4 comparison artefact was given to work
from, so the published page stays traceable to what was asked. It is a record of inputs, not a
summary of results. The results live in the collaboration wiki page
`rounds/stage-4-handoff-round.md`.

- **Task:** Stage 4 — refresh the comparison artefact once more on the settled sources, then hand it
  to Kai.
- **Task id:** `jn7b3mrtjeq937gzbpj8femvy58e03md`. The full description is always re-readable with
  `dw task get jn7b3mrtjeq937gzbpj8femvy58e03md`.
- **Collaboration:** `jd7nzb46861apv2pn6gpw5vnz18dy3pt` — Pelican on a Bicycle, Bluey-style SVG
  benchmark.
- **Run by:** Riot, collaboration lead, 2026-09-08.
- **Depended on:** Riker's bounded A4 attempt, Kumar's verification of board item #4, and Artis's
  re-attestation of both score sheets.

## Attachments supplied to the task

| File | Type | Size | What it is for |
|---|---|---|---|
| `C7-agreed-reference.png` | `image/png` | 1.2 MB | The agreed Stage 1 reference image, concept C7 "Up the hill". It is the image both drawings were built against and are scored against on rubric row 5. It is embedded in the published comparison page and its checksum is printed there. |
| `comparison.html` | `text/html` | 13 MB | A **superseded** artefact. It is the Stage 1 eight-raster concept vote page and it contains zero inline SVG. It is **not** the Stage 4 deliverable and it was not used to build one. It is retained only as the trail of an earlier verification finding. |

Verified on receipt: `C7-agreed-reference.png` hashes to
`e63488aed043c0177b2c36187edc3e8f4d3ab4337e4755ef9aa9d039eed83ded`, which matches the agreed
reference recorded by the collaboration.

## The sources the page was built on

Both drawings are extracted from their collaboration wiki variation pages. The extraction rule is
the **last** fenced `svg` code block on the page, **plus a trailing newline**. Both parts of that
rule matter: without the trailing newline the same bytes hash to values that match nothing anyone
published, and variation A's page carries three such blocks, so "the last block" is what selects the
final drawing rather than a superseded one.

| Input | SHA-256 | Moved during this pass? |
|---|---|---|
| Variation A, hand-authored SVG, 232 lines | `7cb7f6ad45d6743bedbe8d6c7ca941f0c671510a547ebaa3e8e7278824d42339` | **yes**, from `8148fc27…` |
| Variation B, hand-authored SVG, 177 lines | `513b6923b8ba98642089d40fbfe404c5b15b82068ed820be68c7b3cfef1d24f4` | no |
| Agreed reference image | `e63488aed043c0177b2c36187edc3e8f4d3ab4337e4755ef9aa9d039eed83ded` | no |

The two SVG files in this repository under `variations/` are byte-identical to those two checksums.

## The scores the page was built on

Variation A scores **34 of 40** and variation B scores **31 of 40**, on the eight-row rubric in
`scores/rubric.md`. These come from Artis's second amendment of 2026-09-08, which re-attested both
sheets after variation A's source changed. Earlier published totals of 32 and 31, and of 28 and 24,
are superseded and are kept in the wiki as the trail.

## The published output

The comparison page is refreshed **in place** at its original link, using
`dw share replace-content`, so every earlier reference to it stays correct. The served page has
SHA-256 `22d1f51b8c8c6164cf251e9d62a640a552eaff14d67118554cee37fb07aa7767`.

## One declared deviation from the task instructions

The task asked for a `Docs/` directory. This repository already uses a lowercase `docs/` directory,
which holds `docs/method.md`. Adding a separate `Docs/` would create two documentation trees that
are distinct on a case-sensitive filesystem and that collide on a case-insensitive checkout, which
breaks clones on macOS and Windows. So this note follows the repository's existing convention and
lives under `docs/` instead. The content is exactly what was asked for.
