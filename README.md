# #4471 split: two problems

Ticket #4471 merged 412 date reports as one bug. By cause, they are two.

| Ticket | Cause | Reports |
| --- | --- | --- |
| parser | Shared parser reads dates month first | 379 |
| hint | booking-v3 form hint says MM/DD/YYYY | 33 |

- `issues/`: the ticket bodies.
- `ids/`: report ids per cause.
- `count.mjs`: recomputes the counts from the kb export's data. Run `node count.mjs <path to src/lib/data/>`.
- `page/+page.svx`: the kb page. It goes in `src/routes/kb/incidents/4471-split/`.
- `rendered/4471-two-problems.md`: the page as the desk sees it. The kb was not built; the numbers come from the kb's own `causes.ts` logic.
