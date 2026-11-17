The shared parser reads every date month first. Tenants that write the day first get flipped dates. This is the bug #4471 describes.

**Reports covered: 379** (of the 412 merged into #4471).

- 11 tenants, first seen 2026-04-01, last seen 2026-10-04.
- Channels: 204 app, 150 email, 25 form.
- 5 of the 379 read as a one-day move (R-41202, R-41209, R-41236, R-41344, R-41620). The desk's table files them under parser by tenant, so they count here.
- Intake tagged 356 as parser and 23 as hint. Cause comes from the tenant, not the tag.

Report ids: `ids/parser.txt`. Count comes from `causeOf` in the kb's `causes.ts`, run by `count.mjs`.
