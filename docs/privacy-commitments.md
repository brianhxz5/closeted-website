# Privacy commitments tracker

Internal list of things the public privacy policy (`/privacy`, effective October 2, 2026) promises we will do. Each one needs a process, a check, or both, so the policy stays true. Not published on the site.

If anything here stops being true, update the policy (and its effective date) or fix the practice.

## Things that happen on request or on an event

| # | Promise (policy section) | What it means in practice | Status |
|---|---|---|---|
| 1 | Notify users and regulators of a breach with real risk of significant harm (§10) | PIPEDA: report to the Office of the Privacy Commissioner and notify affected people "as soon as feasible". Keep a record of **every** breach, even minor ones, for 24 months. Law 25: notify the Commission d'accès à l'information for Quebec users and keep a register of confidentiality incidents. Write a short "what to do if" checklist and start an incident log (a doc or spreadsheet is fine). | To do |
| 2 | Ask for consent before using data for a new purpose (§3) | Before adding a feature that uses existing data in a new way (ads, sharing, new analytics, training anything), check it against the policy's purposes. If it's new, update the policy and get consent in the app. | Ongoing check |
| 3 | Respond to access, correction, deletion, and consent-withdrawal requests within 30 days (§9) | Requests come to `privacy@closeted.app`. Decide how to verify identity (reply from the signup email is the simplest). Know how to export one user's data from Supabase for access requests. Log each request with the date received and the date answered. | To do |
| 4 | Delete a user's analytics on request (§7) | Analytics aren't removed when an account is deleted. Know how to delete a person in PostHog by user ID. | To do |
| 5 | Delete an account on email request (§8, /support) | Same result as in-app delete. Confirm the request comes from the account's email address before deleting. | To do |
| 6 | Delete data collected from anyone under 14 once we learn of it (§11) | Same deletion path as #5, plus PostHog (#4). | Covered by #4 and #5 |
| 7 | Remove waitlist contacts when launch emails end, someone unsubscribes, or someone asks (§7) | Clean up the Resend audience after launch communications end. Unsubscribes are handled by Resend. | After launch |
| 8 | Update the effective date for any change, and notify users of significant changes in the app or by email (§12) | Any edit to `/privacy` bumps the date. For significant ones, plan an in-app notice or email. | Ongoing check |

## Things that have to stay true

| # | Promise (policy section) | What to check | Status |
|---|---|---|---|
| 9 | Copies in backups "may take longer to clear out" (§8) | Know Supabase's backup retention for our plan (daily backups / point-in-time recovery window), so we can say how long if someone asks. | To verify |
| 10 | Images dropped in are deleted automatically once processed, within minutes (§7) | Confirm the app's storage cleanup actually runs and nothing lingers in the bucket. | To verify |
| 11 | Service providers are bound by contract to protect data (§5) | Make sure the data processing terms / DPA is accepted for Supabase, Anthropic, Modal, PostHog, Resend, and Vercel. Most are click-through in account settings or part of the terms of service. | To verify |
| 12 | Encryption in transit and access controls on the database and storage (§10) | HTTPS everywhere (default), Supabase row-level security on user tables, private storage buckets, two-factor authentication on every provider account. | To verify |
| 13 | Never sold, never used to train models (§3, §4, app sign-up screen) | Don't turn on any provider setting that allows training on our data. Recheck if we add a provider. | Ongoing check |
| 14 | Anthropic deletes inputs and outputs within 30 days (up to 2 years if flagged) (§4) | This is Anthropic's policy, not ours. Recheck if their API data retention terms change. | Ongoing check |
| 15 | The website sets no cookies and no local storage (§2) | Adding any tracker, pixel, or third-party embed to the site means updating the policy and probably adding a cookie banner. | Ongoing check |
| 16 | The provider list and locations are accurate (§5, §6) | Adding or replacing a provider means updating the table. Supabase is US (Ohio, East US 2). | Ongoing check |
| 17 | A privacy officer is reachable at `privacy@closeted.app` (§1) | Email forwarding has to be set up and actually checked. | To do (founder to-do on issue #124) |
