---
type: Source
title: Stage 4 repaired comparison re-verification inputs
---

# Re-verify the repaired Stage 4 comparison page, then close `comparison-artefact` and complete board item #7

You are Kumar. **Your verification was right and it caught four real faults. I repaired all four and I
am handing the page back to you.** This is the last open success criterion of collaboration
`jd7nzb46861apv2pn6gpw5vnz18dy3pt`.

Your evidence page:
https://waaf-digital-workforce-admin-git-main-we-are-aif-irst.vercel.app/share/9b045fbb15d9491c82785249430a6926

## What I changed, and what I did NOT change

**Four edits to the page. Nothing else.** The full `diff` is four hunks. **Both inline drawings are
byte-identical** to the page you failed — I hashed them before and after and both come back
`ee12bec8aed6` and `fc34634dcf6d`. No score, no total, no checksum and no justification moved.

| Your finding | What I did | My measurement on the fetched live copy |
|---|---|---|
| Check 6: 51 px overflow at 320 px | `table.small` had a 328 px min-content width, and `.thumbs` had a 316 px min-content width. Added a `max-width:560px` block: `table-layout:fixed`, `overflow-wrap:anywhere`, narrower score columns, `.rowjust .jlabel` wraps, smaller card and wrap padding, and `.thumbs { flex-wrap:wrap }`. | `scrollWidth - clientWidth` = **0** at 320, 360, 768 and 1280 |
| Check 7, first half: title and H1 command a choice | Both now read `Pelican on a Bicycle — variation A and variation B side by side`. That is a record, not an instruction. | `grep -ciE "choose the winning\|pick the winner"` = **0** |
| Check 7, second half: the invitation reopens the choice | The sentence "Tell us if you would rather make the two-way choice now instead" is **removed**. It now reads: "You do not need to do anything now. The hold is ours to lift, and we will bring you the choice when Route C has an independent score." | the invitation string is **absent** |
| The caption claims 4x and measured 3x | **You found a real bug and my first fix made it worse.** The `max-width:880px` rule shrank `.px256` to 192 px, so the claim was false in the whole 561-to-880 band, and my first attempt set it to 150 px on mobile, which was worse. I deleted the shrink entirely and let `.thumbs` wrap instead, so the enlargement is a real 256 px at every width. | rendered `px256 / px64` = **4.0** at 320, 360, 480, 768 and 1280 |

**One sentence you asked me to remove is a sentence I want you to check carefully, because I did NOT
remove all of it.** Line 105 still says the hold exists "rather than asking you to pick from two
drawings you have already judged poor". That is the REASON for the hold, not an invitation to choose,
and Lee Higgins's own words are what it reports. My own first regex flagged it and I judged it a false
positive. **If you disagree, fail the item again and say so** — I would rather argue about it than
have you pass a page you think still commands a choice.

## The file is ATTACHED, so you need no share access

`stage-4-comparison.html` is attached and materialised at `.dw/attachments/stage-4-comparison.html`.
**It is the LIVE served page.** I published with `dw share replace-content` on asset
`n974s3bsmqxxyd59c0xq61drx98e12zw`, so the token `d60221428d8444a1a507a201a8b0b84c` is unchanged and
there is still exactly one live copy and one output row. Then I fetched it back from the live link and
it is byte-identical to what I built:

    SHA-256 2bcab2ceecdbaad2e2f26b0f37d11327c8353354b96f002a596db44f6c7af9ff

Check that hash first. If it matches, the attachment is exactly what a human opening the link sees.

`C7-agreed-reference.png` is attached too, SHA-256
`e63488aed043c0177b2c36187edc3e8f4d3ab4337e4755ef9aa9d039eed83ded`.

**Do not spend the task on share access.** `dw share read` resolves only for the coworker who OWNS the
asset, which is why it returned `access_denied` for you and for Kai. The share scope is
`visibility: scoped (organisation)` and is correct. That is now recorded on the org FAQ under question
`ts758yfy4pbrdxqc11v0w1qrfs8ag4x2`.

## Run your own seven checks again

Use your own checklist, not my table. Checks 1 to 5 passed last time; re-run them anyway, because I
touched the CSS and a regression there is exactly what a re-verification is for. Re-measure checks 6
and 7 rather than reading my numbers.

The current totals are variation A **34 of 40** and variation B **31 of 40**. A page showing 32 for A
is stale and fails.

## What to do with the result

**If every check passes:**

    dw collaboration criteria update comparison-artefact -s done -e "<your evidence>" --url "<your evidence page>" --collaboration jd7nzb46861apv2pn6gpw5vnz18dy3pt
    dw collaboration todo complete 7 --collaboration jd7nzb46861apv2pn6gpw5vnz18dy3pt

I authored both the criterion and item #7, so I cannot move either. You are the peer.

**If anything still fails**, leave the criterion open, set item #7 back to `pending` with a clarified
description, and give the number. You were right to fail it the first time and you should fail it
again if it deserves it. A thin pass here reaches a human.

## Publish and record

Publish an evidence page with `dw share upload` at organisation scope, post the link to the Slack
venue `C0C0ZJ6T8TS` in mrkdwn `<url|label>` form, and record the task inputs under `sources/` in the
collaboration wiki.

## Bounds

Do not choose a winner and do not hint at one. Do not ask Lee Higgins anything about the artwork. Do
not run `dw collaboration request-review` — the handoff is mine and it is held on you and on Artis.
Do not change either SVG, do not re-score anything, and do not touch Route C or board item #8.


## Attachment record

- `stage-4-comparison-publish.html`: primary verification input. SHA-256 `2bcab2ceecdbaad2e2f26b0f37d11327c8353354b96f002a596db44f6c7af9ff`. Its name differs from the task body. Its hash matches.
- `C7-agreed-reference.png`: compared byte for byte with the embedded reference. SHA-256 `e63488aed043c0177b2c36187edc3e8f4d3ab4337e4755ef9aa9d039eed83ded`.
- `comparison.html`: inherited Stage 1 concept page. SHA-256 `1c893b9e62a7e57452034b7c50aeca75ad8bf3be7bb84513d87b29b18da636b9`. Not used as the current comparison.

# Stage 4 comparison re-verification

Result: PASS. All seven checks pass.

[Source task](https://waaf-digital-workforce-admin-git-main-we-are-aif-irst.vercel.app/org_01KPTN76M0J4F0YT9G7K68W6XJ/tasks/jn79az0326kapeservahr4eh598e1dcj)

## Check 1: PASS — Live inline drawings

Two SVG drawings have 77 and 95 descendants. Neither contains an image element.

## Check 2: PASS — Final source identity

Both sources match the current wiki hashes. All bytes after each opening SVG tag match. Each root omits width="512" height="512" for page layout.

## Check 3: PASS — 64-pixel renders

Both PNGs are 64 × 64. Each pair uses identical PNG bytes. Each appears at 64 × 64 and 256 × 256 at all 12 widths. The 4× caption is correct.

## Check 4: PASS — Agreed reference

The embedded reference PNG matches the attached C7 PNG byte for byte. Its full checksum is present on the page.

## Check 5: PASS — Score sheets

Each drawing has eight scores and eight nonempty justifications. The sums and displayed totals are A 34 of 40 and B 31 of 40. The rows match the recorded scores. This is a transcription check, not a new score.

## Check 6: PASS — Browser layout

All five images load at all 12 widths. Horizontal overflow is zero. No checked table cell, card, or thumbnail has internal overflow. Browser and console errors: zero.

## Check 7: PASS — Held choice

The title and H1 describe the two drawings side by side. The invitation to reopen the choice is absent. The hold notice says no action is needed. The retained clause explains the hold; it does not request a choice.

## Provenance and limits

Page SHA-256: `2bcab2ceecdbaad2e2f26b0f37d11327c8353354b96f002a596db44f6c7af9ff`. The supplied file is `stage-4-comparison-publish.html`, not the file name in the task body. The hash matches the lead’s live-fetch claim. I tested the attached bytes with Chromium through file://. I did not independently fetch the live share or test a signed-in human session.

Widths: 320, 360, 390, 480, 560, 561, 768, 880, 881, 1024, 1280, 1440 CSS pixels. At each width, horizontal overflow is 0 and both enlargement ratios are 4.0.

The retained clause “rather than asking you to pick from two drawings you have already judged poor” is a reason for the hold. The following sentences explicitly defer the choice.

## Operational feedback

The task environment has no TASK_ID value. An explicit task ID from the venue resolves task get. The installed CLI resolves status and todo calls without it. SSH clone authentication failed; HTTPS with the gh credential helper worked. The existing repository uses lowercase docs/, so this record follows that directory instead of adding a case-only Docs/ directory. Item #7 remains assigned to its author; this task explicitly authorizes peer verification and completion. No claim or self-reassignment was attempted.
