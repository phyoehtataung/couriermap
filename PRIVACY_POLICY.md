# CourierMap Privacy Policy

**Effective date:** 27 June 2026
**Version:** 5 (beta)

This Privacy Policy explains what information CourierMap ("we", "us") collects, how we use it, and the choices you have. By using the app you confirm that you have read and understood this policy.

## Information we collect

- **Account:** your email address and a hashed password (managed by Supabase Auth). If you sign in with Google we receive your email and Google account ID only.
- **Display name and public username (@handle):** a starter @handle is generated for you automatically when you sign up — it may be derived from your display name or the local part of your email address — and you can change it. Your display name and @handle are shown publicly next to your contributions.
- **Driver verification:** a screenshot you upload of your rideshare or delivery driver profile and the driver name parsed from it. When you start verification we request access to your device's photo library (via the operating system's standard permission prompt) so you can pick the screenshot; we only read the image you select. Screenshots are stored in a private, owner-only Supabase Storage bucket. We use Google Cloud Vision (running inside our Supabase Edge Function) to OCR the screenshot; the image is sent to Google Cloud Vision solely for that purpose and is not retained by Google for training. We then send only the short name text extracted by the OCR (never the screenshot) to Google's Gemini AI to confirm it looks like a person's name rather than an app menu label.
- **Device location (on-device only):** when you tap the Locate Me button we request your device location through the operating system's standard permission prompt and use the coordinate to centre the map on your position. The coordinate is used on-device only and is not transmitted to our servers or any third party.
- **Contributions:** ratings, comments, pickup guides, replies, up/down votes, platform tags, place suggestions and bug reports you create are stored under your account. Most of these — including your ratings, comments, pickup guides and replies — are public: they appear, alongside your display name and @handle, in a global feed and on the relevant shop pages, visible to all users.
- **Device-local data:** your last map centre, downloaded region cache, theme preference and other UI settings stored locally on the device via AsyncStorage and the device filesystem. These do not leave the device.

## What we do NOT collect

- We do not send your GPS coordinates to our servers. The Locate-Me button runs entirely on-device.
- We do not run third-party analytics, advertising SDKs, or crash reporters in the beta build.
- We do not sell your data.

## How your data is used

- To authenticate you and keep your session active.
- To show your contributions, display name and @handle to other users in the global feed and on the shop pages they relate to.
- To verify driver status and resolve impostor claims.
- To screen the text you post for prohibited content, and to translate other users' content into your language when you tap to translate (see **Content moderation** and **Third parties**).
- To investigate bug reports and improve the app.

## Content moderation, reporting and blocking

Because contributions are public, we run automated text moderation on what you post and give every user tools to report content and block other users. Content that several users report is hidden automatically pending review, and we may hide, remove, or restrict content or accounts that break our Terms. Blocking another user hides their content from you and yours from them.

## Third parties

- **Supabase** — authentication, database, storage. See supabase.com/privacy.
- **Google** — OAuth sign-in (when you choose it), Cloud Vision OCR (when you upload a driver screenshot), and Gemini AI (to check the OCR'd name is a real name and not a menu label — only the short name text is sent, never the screenshot). See policies.google.com/privacy.
- **OpenAI** — when you post or edit a rating, comment, pickup guide, reply, or display name, the text is sent to OpenAI's Moderation API to screen for hateful, harassing, or unlawful content. Only the text is sent, never your name or account. Per OpenAI's API data-usage policy, inputs sent to the API are not used to train their models (they may be briefly retained for abuse monitoring). See openai.com/policies.
- **Microsoft Azure** (Azure AI Translator) — when you tap to translate another user's content, or when we detect the language of content you post so we know whether to offer translation, the text is sent to Microsoft's Azure AI Translator. Only the text is sent. Per Microsoft's terms, Azure AI Translator does not retain submitted text or use it to train its models. See azure.microsoft.com/support/legal.
- **Map tile providers** — we self-host our basemap tiles, so map pan/zoom does not call any third party. Our maps are built from **© OpenStreetMap contributors** data, used under the Open Database License (ODbL); attribution is shown in-app.

## Retention

Your contributions remain until you delete them from the Contributions tab. Verification screenshots are retained while your verification claim is active and can be removed via your profile when a claim is closed. You can delete your entire account at any time from **Profile → Delete account**: this permanently removes your account, ratings, comments, pickup tips, replies, votes, place suggestions, bug reports, blocks, verification claim, and any uploaded screenshots, and releases your @handle. Community platform tags you contributed (which delivery apps a shop is on) are kept but de-identified so the shop coverage data isn't lost. If you'd prefer email assistance, write to us and we'll process the deletion manually within a reasonable time.

## Your rights

- View and delete individual contributions from the Contributions tab.
- Change your email, password, display name or @handle from the Profile tab.
- Report content or block another user from the "…" menu on any contribution.
- Withdraw a driver verification claim from the Profile tab.
- Delete your entire account in-app from Profile → Delete account, or by emailing us.

## Security

We use HTTPS for all network traffic (encrypted in transit), Supabase Row-Level Security to scope database access, Supabase's built-in at-rest encryption for stored objects, and store driver-verification screenshots in a private, owner-only bucket. No system is perfectly secure; you accept residual risk by using the app.

## Children

CourierMap is intended for rideshare and delivery drivers and is not directed at children under 16. We do not knowingly collect data from children.

## Changes to this policy

When we make a material change we will bump the policy version and re-prompt you to accept on next launch. Continued use after a new version is accepted constitutes acceptance.

## Contact

Questions, complaints, or data-rights requests: **couriermap2026@gmail.com**.
