The booking-v3 form prints `MM/DD/YYYY` under the date field. Tenants on booking-v3 write the day first. People type what the hint says, month first, and the form reads it day first. A parser fix does not change this.

**Reports covered: 33** (of the 412 merged into #4471). #4471 does not cover them.

- 3 tenants: alder.physio, copper.studio, pale.harbour. First seen 2026-04-17, last seen 2026-09-22.
- All 33 came in through the booking form.
- Intake tagged 18 as hint and 15 as parser. Cause comes from the tenant and its form, not the tag.

Report ids: `ids/hint.txt`. Count comes from `causeOf` in the kb's `causes.ts`, run by `count.mjs`.
