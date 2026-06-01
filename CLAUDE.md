# Claude Code Handoff: 建設WEB

## Project

- Service name: 建設WEB
- Parent brand: CraftLead
- Purpose: 建設業者、職人、一人親方、小規模工務店向けの格安ホームページ制作サービスサイト
- Local project path: `/Users/kosai/kensetsu-web`
- Backup/saved path: `/Users/kosai/Desktop/CraftLead/建設web`
- GitHub: `https://github.com/Kosai4810/kensetsu-web`
- Production: `https://kensetsu-web.vercel.app`

## Current Status

- Built with Next.js 16, React 19, TypeScript, Tailwind CSS.
- Latest production deploy is on Vercel and was confirmed `Ready`.
- Google Search Console ownership verification meta tag is installed.
- Search Console property was verified in browser.
- Sitemap was submitted in Search Console, but initial Search Console status showed `取得できませんでした`.
- Direct checks showed `https://kensetsu-web.vercel.app/sitemap.xml` returns `200 OK`, including with Googlebot user-agent.
- Top page URL inspection was run and indexing was requested.

## Important Accounts / Deployment Notes

- Vercel username: `kosai4810`
- Vercel account email confirmed by CLI/API: `kosai4810ls@gmail.com`
- Git author for this repo is configured as:
  - `user.name`: `kosai4810`
  - `user.email`: `kosai4810ls@gmail.com`
- This matters because Vercel blocked deployments when the commit author was `kosai@MacBook-Pro-3.local` or the GitHub noreply email. The block reason was `TEAM_ACCESS_REQUIRED`.
- Search Console was opened under Google account `keirai0523@gmail.com` at the time of setup.
- Vercel SSO Deployment Protection was disabled for this project.

## Common Commands

```bash
npm run dev
npm run lint
npm run build
vercel deploy --prod --yes --force --logs
```

If Vercel deploy becomes `UNKNOWN` or `BLOCKED`, inspect with:

```bash
vercel api /v13/deployments/<deployment_id>
vercel inspect <deployment_url> --logs
```

Expected successful state:

- `readyState`: `READY`
- Production alias: `https://kensetsu-web.vercel.app`

## Key Files

- Main landing page: `src/app/page.tsx`
- Layout, metadata, JSON-LD, Google verification: `src/app/layout.tsx`
- Shared data: `src/lib/site-data.ts`
- Header: `src/components/header.tsx`
- Footer: `src/components/footer.tsx`
- CTA: `src/components/cta.tsx`
- Shared UI blocks: `src/components/ui-blocks.tsx`
- Section heading: `src/components/section-heading.tsx`
- Global styling: `src/app/globals.css`
- Sitemap: `src/app/sitemap.ts`
- Robots: `src/app/robots.ts`
- Work history: `制作履歴.md`

## Pages

- `/`
- `/pricing`
- `/industries`
- `/industries/[slug]`
- `/areas`
- `/areas/[slug]`
- `/flow`
- `/faq`
- `/contact`
- `/columns`
- `/legal/tokushoho`
- `/legal/privacy`
- `/robots.txt`
- `/sitemap.xml`

## Design Direction

The current user preference is to make the site basically similar in format and typography to `ほうかんWEB`.

Current direction:

- Base font: Noto Sans JP via `next/font/google`
- White background
- Soft rounded cards
- Teal (teal-600) primary color
- Amber/Yellow (amber-500, yellow-600) accent buttons
- Single column photo rail on hero (5 photos, vertical scroll animation)
- Dark slate-900 problem section
- Keep content easy to read for older business owners

Earlier construction-specific direction still matters, but user explicitly allowed the format/font to be mostly the same as `ほうかんWEB`.

## Recent Changes (2026-06-01)

- Redesigned entire site with teal/amber color scheme
- Hero section: single photo rail (was 2 columns), wider text area
- Updated plan contents: removed page counts, added SEO to standard plan
- Removed 地域ページ from navigation
- Photo rail shows on both mobile and desktop

## SEO Implemented

- Page-level metadata
- Keywords in layout metadata
- Open Graph / Twitter metadata
- JSON-LD graph:
  - `WebSite`
  - `LocalBusiness`
  - `Service`
  - `FAQPage`
- `robots.txt`
- `sitemap.xml`
- Industry SEO pages
- Area SEO pages
- Columns page
- Internal links from top page to industry/area/column pages
- Google verification meta:
  - `AeTw3XgZ92QKc1ucv38Wfy4ps9zdedQCFROMqaWiHz0`

## SEO Next Steps

1. Recheck Search Console sitemap status after 24 hours.
2. If still `取得できませんでした`, resubmit `sitemap.xml` and verify with URL Inspection.
3. Add more industry x area pages, e.g.:
   - `/industries/gaiheki-tosou/areas/osaka`
   - `/industries/reform/areas/tokyo`
4. Add real blog/column article pages instead of only a column list.
5. Add real company/operator information when available.
6. Replace placeholder email/address/legal info before serious public use.
7. Consider independent domain later.

## Assets

Current images are under `public/images`.

Important logo source was provided by the user:

- `/Users/kosai/Desktop/CraftLead/建設web_ロゴ.png`

Logo variants in project:

- `public/images/kensetsu-web-logo.png`
- `public/images/kensetsu-web-logo-trimmed.png`
- `public/images/kensetsu-web-logo-wide.png`

Used site photos:

- `public/images/hero-construction.png`
- `public/images/site-renovation.png`
- `public/images/craftsman-interior.png`
- `public/images/client-meeting.png`
- `public/images/hero-worker-sky.png`

## Deployment / Git History Highlights

- `66ab192` Initial 建設WEB site
- `131c48a` Strengthen SEO and page strategy
- `9e57b62` Align design with Houkan Web style
- `46d3954` Exclude build artifacts from Vercel deploy
- `d3d3ec7` Add Google site verification
- `76ba014` Hero section: single photo rail, wider text area
- `21d29cd` Show photo rail on mobile devices
- `a879074` Update plans, fix photo rail, remove area page nav

## Known Caveats

- `Search Console` sitemap status initially showed `取得できませんでした` even though direct fetch and Googlebot user-agent fetch returned `200 OK`.
- Vercel deployment can be blocked if commit author email is not recognized by the Vercel team/account. Keep Git author as `kosai4810ls@gmail.com`.
- `.vercelignore` exists to avoid uploading local build artifacts.
- Do not commit `.vercel`, `.next`, or `node_modules`.

## User Preferences

- User wants fast, practical execution.
- User often asks to save all current data into `/Users/kosai/Desktop/CraftLead/建設web`; sync there after important changes.
- User wants SEO and deployment handled, not just explained.
- User prefers direct Japanese explanations.
- When Vercel blocks deploy, debug aggressively with CLI/API rather than waiting.
