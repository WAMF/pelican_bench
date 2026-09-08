---
type: Source
title: Stage 4 comparison peer verification inputs
---

# Task inputs

[Source task](https://waaf-digital-workforce-admin-git-main-we-are-aif-irst.vercel.app/org_01KPTN76M0J4F0YT9G7K68W6XJ/tasks/jn74dxtmt2y8qfvkzez4bbmbt18e1x0x)

# Verify the Stage 4 comparison page, close `comparison-artefact`, and complete board item #7

You are Kumar. This is the LAST open success criterion of collaboration
`jd7nzb46861apv2pn6gpw5vnz18dy3pt` ("Pelican on a Bicycle - Bluey-style SVG benchmark"). The human
request cannot be made until you close it.

Read `.dw/skills/collaboration/SKILL.md`, then the collaboration wiki `r571tcvmg14etb09nzawa3nq1s8dy25h`,
starting at `index.md`, then `rounds/stage-4-handoff-round.md`.

## Why this comes to you, and not back to Kai

Kai attempted this check twice and both attempts failed for the SAME reason, which is not a page
fault. An organisation-scoped Quick Share shows a sign-in page to an unauthenticated browser, and
`dw share read --token d60221428d8444a1a507a201a8b0b84c` returned `access_denied` in Kai's job.

**Kai's diagnosis of the cause is wrong and you must not repeat it.** Kai reported that "the share
itself says it is private". It does not. I read the live record in my own job today and it prints:

    visibility: scoped (organisation)

So the scope is correct and there is nothing to restore. `dw share read` appears to resolve only for
the coworker who owns the asset. That is a delivery limit on the CLI, and this collaboration already
recorded it once in `decisions/peer-access-to-quick-share.md`. Do not spend the task on it. If you
confirm the limit, say so plainly in your evidence, because it is worth recording a second time.

## The file is ATTACHED, so no access is needed

`stage-4-comparison.html` is attached to this task and materialised at
`.dw/attachments/stage-4-comparison.html`. It is the LIVE served page. I fetched it back from the
live link in my own job today and it hashes to:

    SHA-256 22d1f51b8c8c6164cf251e9d62a640a552eaff14d67118554cee37fb07aa7767

Check that hash FIRST. If it matches, you are looking at exactly what a human opening the link sees,
and you can judge the page from the file. Open it with
`file://<absolute path>/.dw/attachments/stage-4-comparison.html` in `.dw/tools/playwright/bin/run`.

`C7-agreed-reference.png` is also attached. It is the agreed Stage 1 reference image, SHA-256
`e63488aed043c0177b2c36187edc3e8f4d3ab4337e4755ef9aa9d039eed83ded`. Use it to confirm the reference
shown on the page is the agreed one.

## What the criterion requires

`comparison-artefact` reads: both variations published in one comparison artefact for the human
choice. Verify each of these against the file, and report a number or a plain pass for each one.

1. Two LIVE inline SVG drawings, not bitmaps. I count 2 `<svg` and expect 77 and 95 child elements.
2. Each inline drawing matches the FINAL wiki source. Extract the last fenced `svg` block from
   `variations/variation-a.md` and from `variations/variation-b.md`. Variation A must hash to
   `7cb7f6ad45d6743bedbe8d6c7ca941f0c671510a547ebaa3e8e7278824d42339` and variation B to
   `513b6923b8ba98642089d40fbfe404c5b15b82068ed820be68c7b3cfef1d24f4`. The extraction rule is the
   last fenced block PLUS a trailing newline; `sources/stage-4-artefact-refresh-task-inputs.md`
   records the negative control for it.
3. Both 64 pixel renders present, at true size and enlarged.
4. The agreed reference image present, with its checksum printed.
5. Both complete eight-row score sheets, 16 justifications, and both totals. The CURRENT totals are
   variation A 34 of 40 and variation B 31 of 40. A page showing 32 for A is stale and fails.
6. All 5 images load. Zero console errors. No horizontal overflow.
7. **The wording of the ask.** The page must NOT ask Lee Higgins to pick a winner. He judged both
   drawings poor in the venue, asked for a layered painter's method, and I told him I was HOLDING the
   A-versus-B choice until Route C is scored. He never overturned that. The live page must state that
   nothing is asked of him yet and give the reason. If it asks him to choose, that is a FAIL and you
   send it back.

## What to do with the result

**If every item passes**, close the criterion and complete the board item:

    dw collaboration criteria update comparison-artefact -s done -e "<your evidence>" --url "<your evidence page>" --collaboration jd7nzb46861apv2pn6gpw5vnz18dy3pt
    dw collaboration todo complete 7 --collaboration jd7nzb46861apv2pn6gpw5vnz18dy3pt

I authored both the criterion and item #7, so I cannot move either one. That is the platform author
gate. You are the peer.

**If anything fails**, leave the criterion open, set item #7 back with `-s pending` and a clarified
description, and say exactly which numbered item failed and what the number was. A thin pass is worse
than an honest fail here.

## Publish your evidence

Build a single-file HTML evidence page and publish it with `dw share upload` at organisation scope.
Put the numbers beside the item each one settles. Post the link to the Slack venue `C0C0ZJ6T8TS`
with `.dw/tools/slack/bin/run`, in mrkdwn `<url|label>` form. Record the task inputs as a wiki page
under `sources/`.

## Bounds

Do not choose a winner and do not hint at one. Do not ask Lee Higgins anything about the artwork.
Do not run `dw collaboration request-review` — that is mine. Do not change either SVG. Do not
re-score anything. Do not touch Route C.


## Attachment use and hashes

- `stage-4-comparison.html`: SHA-256 `22d1f51b8c8c6164cf251e9d62a640a552eaff14d67118554cee37fb07aa7767`. Verified page; primary input.
- `C7-agreed-reference.png`: SHA-256 `e63488aed043c0177b2c36187edc3e8f4d3ab4337e4755ef9aa9d039eed83ded`. Agreed reference; compared with the embedded PNG.
- `comparison.html`: SHA-256 `1c893b9e62a7e57452034b7c50aeca75ad8bf3be7bb84513d87b29b18da636b9`. Supplementary prior comparison; not substituted for the named primary page.

## Verification result

# Stage 4 comparison verification

Result: FAIL. Checks 6 and 7 fail. Leave comparison-artefact open. Return board item #7 to pending.

[Source task](https://waaf-digital-workforce-admin-git-main-we-are-aif-irst.vercel.app/org_01KPTN76M0J4F0YT9G7K68W6XJ/tasks/jn74dxtmt2y8qfvkzez4bbmbt18e1x0x)

## Check 1: PASS

2 live inline SVG drawings. A has 77 descendants. B has 95. Both contain 0 image elements.

## Check 2: PASS with layout adaptation

Both final source hashes match. The only inline change removes width="512" height="512" from each root SVG. All drawing bytes after the opening tag are identical. This is not a byte-identical embedding of the whole source.

## Check 3: PASS

Each source PNG is 64 × 64. Each appears at 64 × 64 and enlarged. At 1440 and 1024, enlarged copies are 256 × 256. At 768, 390 and 320, they are 192 × 192. The mobile caption still says 4x; the measured scale is 3x.

## Check 4: PASS

The embedded reference PNG matches the attached C7 PNG byte for byte. Its full checksum is printed on the page.

## Check 5: PASS

8 rows per drawing. 16 nonempty justifications. Row values sum to A 34 of 40 and B 31 of 40. Both displayed totals agree. No scores were changed.

## Check 6: FAIL

All 5 images load at all 5 widths. Console errors: 0. Page errors: 0. Horizontal overflow at 320: scrollWidth 371, excess 51 CSS pixels. No overflow at 390, 768, 1024 or 1440. The small measurement table reaches x=371.39; drawing cards reach x=336.

## Check 7: FAIL

The title and visible H1 both say “Pelican on a Bicycle — choose the winning drawing”. The hold notice is present and explains the pending independent Route C score. It does not cancel the contradictory command in the heading. The notice also says “Tell us if you would rather make the two-way choice now instead.”

## Required repair

Use a neutral comparison title and H1. Keep the hold notice and reason. Remove the invitation to reopen the choice. Make the cards and tables fit at 320 CSS pixels. Correct the enlarged-render caption on small screens. Keep both SVG drawings and all scores unchanged.

## Provenance and limits

The attached HTML matches the live-served hash supplied by Riot. This task tested those bytes through file:// in Chromium. It did not test a signed-in human session or independently fetch the live share. The peer CLI access limit is prior evidence, not a new test here. No scope change is needed.

Page SHA-256: 22d1f51b8c8c6164cf251e9d62a640a552eaff14d67118554cee37fb07aa7767

Variation A final source SHA-256: 7cb7f6ad45d6743bedbe8d6c7ca941f0c671510a547ebaa3e8e7278824d42339

Variation B final source SHA-256: 513b6923b8ba98642089d40fbfe404c5b15b82068ed820be68c7b3cfef1d24f4

Reference SHA-256: e63488aed043c0177b2c36187edc3e8f4d3ab4337e4755ef9aa9d039eed83ded


## Operational feedback

A board item owned by another participant cannot be claimed. Self-reassignment also fails. Riot must hand item #7 to the next verifier before dispatch. The first screenshot capture used an ambiguous table selector. The corrected selector uses the first table. The main measurement run passed. Existing lowercase docs/ in the pending repository work is retained to avoid a case-only directory conflict.
