# a115.xyz

Personal website built on the [man-pages](https://github.com/0thorderlogic/man-pages) Astro theme.

## Features
- **Gruvbox Color Palette:** Full integration with Tailwind v4 `@theme` block. Use classes like `bg-gruv-bg0-s`, `text-gruv-yellow`, `border-gruv-red`, etc.
- **Dynamic Google Calendar:** A fully responsive, grid-based calendar page (`/calendar`) that fetches live events from Google Calendar API v3.
- **Modular Calendar Code:** Calendar code is split into typed data utilities, UI components, and a client controller so the page file is small and maintainable.
- **Journal/Blog System:** Markdown-based blogging out of the box using Astro Collections (`/journal`).
- **Archive Page:** Easily list academic papers, PDFs, or external links grouped by year via a simple JSON mapping (`/archive`).
- **RSS Feed:** Auto-generated RSS feed for your journal entries.

---

## Setup & Usage

### 1. Clone and Install
```bash
git clone https://github.com/0thorderlogic/a115.xyz
cd a115.xyz
npm install
```

### 2. Add the theme remote (for pulling upstream updates)
The theme lives in a separate repo. Add it as a remote so you can pull changes later:
```bash
git remote add theme https://github.com/0thorderlogic/man-pages
```

To pull theme updates in the future:
```bash
git pull theme master
```

### 3. Configure Environment Variables
To make the `/calendar` page work, you need a Google Calendar API key.
Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```
Open `.env` and configure your keys.

**How to get a Google API Key:**
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Search for "Google Calendar API" and click **Enable**.
4. Go to **APIs & Services > Credentials** on the left sidebar.
5. Click **Create Credentials > API Key**.
6. Paste this key into `GOOGLE_API_KEY` in your `.env` file.

**How to get your Calendar ID:**
1. Go to [Google Calendar](https://calendar.google.com/) on your computer.
2. Under "My calendars" on the left, hover over the calendar you want to share, click the three vertical dots (Options), and click **Settings and sharing**.
3. Under the "Access permissions for events" section, ensure **Make available to public** is checked.
4. Scroll down to the "Integrate calendar" section. You will see your **Calendar ID** (it often looks like `your_email@gmail.com` or a long string ending in `@group.calendar.google.com`).
5. Paste this ID into `GOOGLE_CALENDAR_ID` in your `.env` file.

**Calendar code map:**
- `src/pages/calendar.astro`: Orchestrates layout + data loading.
- `src/lib/calendar/fetchEvents.ts`: Google Calendar API fetch + normalization.
- `src/lib/calendar/types.ts`: Shared event and API response types.
- `src/lib/calendar/date.ts`: Calendar date formatting/day-key helpers.
- `src/components/calendar/*`: Header, grid, and modal markup.
- `src/scripts/calendar.ts`: Client-side rendering, month navigation, and modal behavior.

Grid event chips are intentionally non-clickable. To open a Google Calendar link, click a day to open the modal, then click **View in Calendar**.

### 4. Customizing Your Info
- Open `consts.ts` in the root directory and update the `name`, `lastname`, and overall website metadata.
- Open `src/content/navbar.json` to change the links in your top navigation bar.

### 5. Writing Blog Posts
Navigate to `src/content/journal/`. Create a new `.md` file with the following frontmatter:
```markdown
---
title: "My New Post"
date: 2026-03-07
description: "A short description goes here."
---
Write your markdown content here...
```
The post will automatically appear on the `/journal` page and be added to the RSS feed.

### 6. Managing the Archive
To add PDFs or links to the `/archive` page:
1. Put any PDF files in `public/pdfs/`.
2. Open `src/content/archive.json`.
3. Add a new object to the array:
```json
{
  "title": "Document Title",
  "url": "/pdfs/filename.pdf",
  "description": "A short summary of the document.",
  "date": "2026-01-01"
}
```
The Archive page will automatically parse the dates and group them by year.

### 7. Styling
All custom colors are defined in `src/styles/global.css` under the `@theme` block. You can change these hex codes to adjust the core appearance of the website while keeping the same class names.

---

## Commands
| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `dist/`            |
| `npm run preview`         | Preview your build locally                       |