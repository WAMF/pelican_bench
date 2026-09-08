# Stage 4 handoff — task inputs

This note records the inputs of the Digital Workforce task that made the collaboration's one human
request. It exists so the handoff stays traceable to what was asked.

Task: `jn77fnzn5hztxy24033b7pkcsx8e0yag` — "Run the handoff. Make the collaboration's one human request,
in the form the venue supports."
Owner: Riot (lead). Date: 2026-09-08.
Collaboration: `jd7nzb46861apv2pn6gpw5vnz18dy3pt` — "Pelican on a Bicycle - Bluey-style SVG benchmark".
Read the full prompt at any time with `dw task get jn77fnzn5hztxy24033b7pkcsx8e0yag`.

## What the task asked for

1. Read the peer re-verification verdict on the repaired comparison page before any other action.
2. Check the three `dw collaboration request-review` gate conditions against the live record.
3. Read the independent Route C score, then decide the shape of the human question and record that
   decision as a wiki `decisions/` page before calling anything.
4. Call `dw collaboration request-review` with a summary that names each drawing, gives each total out
   of 40, states the one question, carries the comparison link, and says the scores do not decide it.
5. Confirm the collaboration moved to `pending_review`, post to the Slack venue, append the round
   record, and write this note.
6. Do not choose the winner. Do not close the collaboration. Do not create more artwork work.

## Attachments supplied to the task

| File | Size | SHA-256 | What it is for |
|---|---|---|---|
| `C7-agreed-reference.png` | 1,209,146 B | `e63488aed043c0177b2c36187edc3e8f4d3ab4337e4755ef9aa9d039eed83ded` | The one agreed Stage 1 reference image, concept C7 "Up the hill". Every rubric row 5 score is measured against it. The hash matches the value recorded on the `reference-image` criterion. |
| `stage-4-comparison-publish.html` | 1,681,698 B | `2bcab2ceecdbaad2e2f26b0f37d11327c8353354b96f002a596db44f6c7af9ff` | The live comparison page, byte-for-byte. This is the artefact the human opens. Kumar verified these exact bytes and passed all seven checks. |
| `comparison.html` | 13,331,183 B | `1c893b9e62a7e57452034b7c50aeca75ad8bf3be7bb84513d87b29b18da636b9` | An earlier, larger build of the same comparison. It is superseded and it is NOT published. It is kept as a build input only. |

The attachment `stage-4-comparison-publish.html` was used as the reference for the deliverable. Its
hash equals the hash of the published asset, and the published asset is 1,681,698 bytes. So the page a
human opens and the page verified by a peer are the same bytes. No rebuild was needed or made.

## The state the task found, and the decision taken

All eight success criteria are `done`. None is waived. Board items #1 to #7 are complete. Item #8 is the
human choice item and it is correctly still pending.

Artis scored Route C independently at **20 of 40**. Variation A stands at **34 of 40** and variation B
at **31 of 40**. Route C beats neither. So the human question is a two-way choice between variation A
and variation B, and Route C's result is reported rather than offered. The decision page is
`decisions/stage-4-question-is-two-way-route-c-reported.md` in the collaboration wiki.

## Related documentation branches

- Pull request #1 populates the repository with the benchmark work.
- Pull request #2 records the Stage 4 peer verification inputs.
- Pull request #3 adds Route C and its independent score sheet.
