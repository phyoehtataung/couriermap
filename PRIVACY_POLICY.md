# CourierMap Privacy Policy

**Effective date:** 20 May 2026
**Version:** 3 (beta)

This Privacy Policy explains what information CourierMap ("we", "us") collects, how we use it, and the choices you have. By using the app you confirm that you have read and understood this policy.

> A more detailed, engineering-facing inventory lives at [`docs/PRIVACY.md`](../docs/PRIVACY.md). This document is the user-facing simplified version; keep the two in sync.

## Information we collect

- **Account:** your email address and a hashed password (managed by Supabase Auth). If you sign in with Google we receive your email and Google account ID only.
- **Display name and avatar** you choose to set.
- **Driver verification:** a screenshot you upload of your rideshare or delivery driver profile and the driver name parsed from it. When you start verification we request access to your device's photo library (via the operating system's standard permission prompt) so you can pick the screenshot; we only read the image you select. Screenshots are stored in a private, owner-only Supabase Storage bucket. We use Google Cloud Vision (running inside our Supabase Edge Function) to OCR the screenshot; the image is sent to Google solely for that purpose and is not retained by Google for training.
- **Device location (on-device only):** when you tap the Locate Me button we request your device location through the operating system's standard permission prompt and use the coordinate to centre the map on your position. The coordinate is used on-device only and is not transmitted to our servers or any third party.
- **Contributions:** ratings, comments, pickup guides, platform tags, place suggestions and bug reports you create are stored under your account and visible to other users.
- **Device-local data:** your last map centre, downloaded region cache, theme preference and other UI settings stored locally on the device via AsyncStorage and the device filesystem. These do not leave the device.

## What we do NOT collect

- We do not send your GPS coordinates to our servers. The Locate-Me button runs entirely on-device.
- We do not run third-party analytics, advertising SDKs, or crash reporters in the beta build.
- We do not sell your data.

## How your data is used

- To authenticate you and keep your session active.
- To show your contributions back to you and to other drivers in the relevant region.
- To verify driver status and resolve impostor claims.
- To investigate bug reports and improve the app.

## Third parties

- **Supabase** — authentication, database, storage. See supabase.com/privacy.
- **Google** — OAuth sign-in (when you choose it) and Cloud Vision OCR (when you upload a driver screenshot). See policies.google.com/privacy.
- **Map tile providers** — we self-host our basemap tiles, so map pan/zoom does not call any third party. Our maps are built from **© OpenStreetMap contributors** data, used under the Open Database License (ODbL); attribution is shown in-app.

## Retention

Your contributions remain until you delete them from the Contributions tab. Verification screenshots are retained while your verification claim is active and can be removed via your profile when a claim is closed. You can delete your entire account at any time from **Profile → Delete account**: this permanently removes your account, ratings, comments, pickup tips, place suggestions, bug reports, verification claim, and any uploaded screenshots. Community platform tags you contributed (which delivery apps a shop is on) are kept but de-identified so the shop coverage data isn't lost. If you'd prefer email assistance, write to us and we'll process the deletion manually within a reasonable time.

## Your rights

- View and delete individual contributions from the Contributions tab.
- Change your email or password from the Profile tab.
- Withdraw a driver verification claim from the Profile tab.
- Delete your entire account in-app from Profile → Delete account, or by emailing us.

## Security

We use HTTPS for all network traffic, Supabase Row-Level Security to scope database access, and store driver-verification screenshots in a private, owner-only bucket. No system is perfectly secure; you accept residual risk by using the app.

## Children

CourierMap is intended for rideshare and delivery drivers and is not directed at children under 16. We do not knowingly collect data from children.

## Changes to this policy

When we make a material change we will bump the policy version and re-prompt you to accept on next launch. Continued use after a new version is accepted constitutes acceptance.

## Contact

Questions, complaints, or data-rights requests: **couriermap2026@gmail.com**.
