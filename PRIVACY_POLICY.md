# Privacy Policy (Template)

> **Template Notice:** Replace all bracketed placeholders (for example, `[YOUR_ORGANIZATION_OR_MAINTAINER_NAME]`, `[CONTACT_EMAIL]`, `[EFFECTIVE_DATE]`) and update sections if you deploy server-side analytics, authentication, or AI API endpoints.

**Effective Date:** `[EFFECTIVE_DATE]`  
**Operator / Data Controller:** `[YOUR_ORGANIZATION_OR_MAINTAINER_NAME]`  
**Application:** Pelican Campus Quest (`[APP_PUBLIC_URL]`)  
**Privacy Contact:** `[CONTACT_EMAIL]`

---

## 1. Overview
This Privacy Policy explains how `[YOUR_ORGANIZATION_OR_MAINTAINER_NAME]` ("we", "us") handles information when you use **Pelican Campus Quest** (the "Application"). By default, Pelican Campus Quest runs **locally in your browser** using WebGL2, Web Audio API, and bundled/static 3D assets, without requiring user registration, accounts, or personal profile submission.

## 2. Information Processed & Collected

### A. Information Stored Locally on Your Device
- **Browser Storage (`localStorage` / `sessionStorage` & In-Memory Fallback):** The Application includes an isolated storage compatibility shim (`index.html`) that falls back to ephemeral in-memory storage in sandboxed (`origin:null`) frames. No personal identifiers, passwords, or tracking profiles are stored by default.
- **URL Parameters:** Viewport, quality, audio, camera, and map query parameters (e.g., `?cam=`, `?map=`, `?audio=`, `?hud=0`) are parsed strictly client-side to configure the local session state.

### B. Automated Network & Asset Delivery Requests
- **Static Hosting & GLB Asset CDN:** When loading the Application or running build-time asset sync (`tools/download-assets.mjs`), standard HTTP(S) network requests may be made to your web host (`[HOSTING_PROVIDER]`) and Google Static CDN (`https://www.gstatic.com/aistudio/starter-apps/pelican-campus/`). As with any web request, hosting infrastructure may temporarily log standard technical metadata such as IP address, user-agent string, timestamp, and requested resource URL.
- **Graphics & Audio Capabilities:** The Application inspects local browser capabilities (`WebGL2` context support, device pixel ratio, hardware/software renderer string, and `AudioContext`) locally in memory solely to tune rendering quality and sound playback.

### C. Optional Analytics, Telemetry, or AI Integrations
`[CHOOSE ONE AND EDIT BEFORE PUBLISHING:]`
- **Default Configuration (No Tracking):** The Application does **not** load third-party advertising SDKs, cross-site behavioral trackers, or telemetry beacons, and does **not** transmit prompts or user inputs to an LLM API at runtime.
- **If You Enable Hosting Analytics / Backend Features:** `[Describe any added analytics provider, server API logs, or generative AI features, what data is sent, and retention periods.]`

## 3. Cookies & Tracking Technologies
By default, the Application does **not** set first-party advertising cookies or third-party tracking cookies. `[If your hosting platform or CDN sets strictly necessary security cookies such as CSRF/DDoS tokens, describe them here.]`

## 4. How Information Is Used
Any technical connection data processed by our hosting infrastructure is used solely to:
- Deliver the Application's HTML, scripts, fonts, audio, and 3D `.glb` geometry files reliably.
- Maintain service security, prevent abuse, and diagnose critical infrastructure errors.

## 5. Data Sharing & Third-Party Processors
We do not sell or rent personal information. Limited technical request metadata may be processed by:
- **Hosting / CDN Infrastructure:** `[HOSTING_PROVIDER]` and `gstatic.com` (for static `.glb` asset distribution where applicable).
- **Legal Compliance:** Competent authorities if required by valid legal process or to protect rights and safety.

## 6. Data Retention
- **Client-Side Session State:** Simulation state (bicycle position, collected chips, camera angle, audio state) exists transiently in browser memory and clears when you close or reload the page.
- **Server Access Logs (if applicable):** Retained by `[HOSTING_PROVIDER]` for `[RETENTION_PERIOD: e.g., 30 days]` before automatic deletion.

## 7. Security
We use HTTPS transport security where hosted online and avoid collecting sensitive personal information in the Application. No method of electronic transmission or browser storage is 100% immune from risk.

## 8. Children's Privacy
The Application does not knowingly collect personal information from children under `[CHILDREN_AGE_THRESHOLD: 13 (or 16 in the EEA/UK)]`. If you believe a child has submitted personal data through an external contact channel or customized deployment, contact `[CONTACT_EMAIL]` so we can promptly delete it.

## 9. Your Privacy Rights (GDPR / EEA / UK / CCPA / CPRA)
Depending on where you live, you may have the right to request access to, correction of, deletion of, portability of, or restriction/objection regarding personal data held about you, as well as the right not to be discriminated against for exercising privacy rights. To submit a request, contact `[CONTACT_EMAIL]` with the subject line `"Privacy Request"`.

## 10. International Data Transfers
If your hosting infrastructure or static CDN processes connection logs outside your country of residence, transfers are handled under applicable safeguards (`[TRANSFER_MECHANISM: e.g., Standard Contractual Clauses]`).

## 11. Changes to This Privacy Policy
We may update this Privacy Policy to reflect code updates, new integrations, or legal requirements. Any changes will be posted with an updated **Effective Date**.

## 12. Contact Us
For questions or privacy requests, please contact:  
- **Controller / Operator:** `[YOUR_ORGANIZATION_OR_MAINTAINER_NAME]`  
- **Email:** `[CONTACT_EMAIL]`  
- **Address:** `[OPTIONAL_MAILING_ADDRESS]`
