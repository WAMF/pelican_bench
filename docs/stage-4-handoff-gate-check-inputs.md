# Task inputs — Stage 4 handoff, the gate check that withheld the human request

Riot, lead of the "Pelican on a Bicycle - Bluey-style SVG benchmark" collaboration
(`jd7nzb46861apv2pn6gpw5vnz18dy3pt`), 2026-09-08.

This note records what the handoff task was given, so the work stays traceable to what was asked.
The full task description is always re-readable with:

    dw task get jn7358v535q9ebzd8dj8193vvx8e1b01

## What the task asked

Run `dw collaboration request-review` and ask Lee Higgins to choose between variation A
"Still climbing" by Riker and variation B "Over the top" by Clayton. Check the three gate conditions
against the live record first. Do not choose the winner and do not hint at one. Then confirm the
status move, post to the Slack venue, append the handoff to the round page, and record the inputs.

The brief carried its own escape clause, and that clause is what ran: if a criterion is still open,
or a sibling task is still running, do not call `request-review` — create another round and a further
review task for yourself depending on it.

## What was decided

**`request-review` was NOT called.** Two independent reasons hold.

1. **The platform gate is unmet.** Criterion `comparison-artefact` is `open`, so gate condition 1
   fails. Board item #7 is `in_progress`, not complete. Conditions 2 and 3 pass.
2. **The human suspended this exact question himself.** Lee Higgins judged both finished drawings
   poor, asked for a layered painter's method, and never lifted the hold I placed on the A-versus-B
   choice pending Route C. Route C is delivered but its only score is by its own author.

Reason 2 outranks reason 1 in importance, even though reason 1 alone is decisive. The gate is a
mechanical check a later task can satisfy. Reason 2 governs what may be ASKED, and `request-review`
sends one message that cannot be taken back.

## The two attachments

| Attachment | Size | Role |
|---|---|---|
| `C7-agreed-reference.png` | 1.2 MB | The agreed Stage 1 reference image, SHA-256 `e63488aed043c0177b2c36187edc3e8f4d3ab4337e4755ef9aa9d039eed83ded`. **Used**, and forwarded to both round tasks. |
| `comparison.html` | 13 MB | **NOT USED.** This is the superseded Stage 1 concept page and holds zero inline `svg` elements. The Stage 4 comparison page is a different, 1,681,041 byte file. |

`docs/stage-4-artefact-refresh-inputs.md` records the same finding about `comparison.html`. It has
now misled two tasks, so it is stated twice on purpose.

## Readings taken from the live record, not from the brief

- **Share scope:** `visibility: scoped (organisation)` on asset `n974s3bsmqxxyd59c0xq61drx98e12zw`.
  A peer's report that the share is private is wrong on this evidence and is withdrawn.
- **The live comparison page:** fetched back from its own link. SHA-256
  `22d1f51b8c8c6164cf251e9d62a640a552eaff14d67118554cee37fb07aa7767`, 1,681,041 bytes, 2 inline
  `svg` elements, 5 `img` elements.
- **Current totals:** variation A **34 of 40** on
  `7cb7f6ad45d6743bedbe8d6c7ca941f0c671510a547ebaa3e8e7278824d42339`, variation B **31 of 40** on
  `513b6923b8ba98642089d40fbfe404c5b15b82068ed820be68c7b3cfef1d24f4`. Route C stands at a
  provisional 34 of 40 by its own author and is not yet an independent number. The collaboration
  wiki index still carried the pre-A4 figure of 32 for variation A; it is corrected.
- **Gate condition 3:** 300 organisation tasks paginated and every pelican task matched by prompt.
  All terminal apart from the caller's. A summary count was not trusted for this.

## The lesson this note exists to carry

`dw share read` resolves for the coworker who **owns** the asset. It returned `access_denied` for a
peer verifier. I had told that verifier the route would work because I ran it end to end myself — as
the owner. **Running a route successfully as the owner is not evidence that a peer can run it.** The
repair is to deliver the file as a real task attachment with its hash, not as a link.

## One declared deviation

The task brief said to create a `Docs/` directory. This repository already uses lowercase `docs/`.
The repository's own convention is followed, rather than create a case-colliding sibling directory
that breaks clones on macOS and Windows.

---

## Addendum — the peer verification FAILED the page, and all four faults are repaired

Written in the same task, minutes after the note above.

Kumar's peer verification ran and **failed** the comparison page on four checks. That is the correct
outcome: he found four faults in a page I had already published, fetched back from its own link, and
checked myself. Two of them I had reported as sound.

| # | Finding | Cause, measured | Repair | Verified on the fetched live copy |
|---|---|---|---|---|
| 1 | 51 px overflow at a 320 px viewport | `table.small` min-content width 328 px; `.thumbs` 316 px | a `max-width:560px` block with `table-layout:fixed`, `overflow-wrap:anywhere` and `flex-wrap:wrap` | `scrollWidth - clientWidth` = 0 at 320, 360, 768, 1280 |
| 2 | Title and H1 commanded "choose the winning drawing" | the header was not rewritten when the body was corrected | both read "variation A and variation B side by side" | command string count 0 |
| 3 | The hold notice still invited the choice to reopen | the offer was written into the page as well as the venue | invitation deleted | invitation absent |
| 4 | A caption claimed a 4x enlargement and measured 3x | the `max-width:880px` rule shrank the image to 192 px, so the claim was false across a 320-pixel-wide band of viewports, not only on mobile | the shrink is deleted and the row wraps instead | rendered ratio 4.0 at 320, 360, 480, 768, 1280 |

Four edits, nothing else. Both inline drawings are byte-identical across the repair, hashed before and
after. No score, total, checksum or justification moved.

Published in place with `dw share replace-content`, so one link and one output row. Fetched back from
the live link and byte-identical to what was built:

    SHA-256 2bcab2ceecdbaad2e2f26b0f37d11327c8353354b96f002a596db44f6c7af9ff

### The two lessons this addendum exists to carry

**A repair needs its own measurement, taken after the repair, on the artefact that is actually
served.** My first fix for fault 4 set the enlargement to 150 px on mobile, which would have made the
4x claim false by a wider margin than the 3x that was reported — a worse version of the fault, shipped
in the change that claimed to fix it. It was caught only by measuring the rendered ratio at five
viewports rather than trusting that the CSS had done what was intended. A diff proves what you
changed; it does not prove what you achieved.

**Get a review chain's dependencies right at creation time.** `dw task create` cannot add a
`--depends-on` to an existing task, and no `dw task` subcommand edits one. The handoff task had to be
cancelled and re-created to wait on the re-verification as well as on the Route C score. The only
correction available is cancel-and-recreate.
