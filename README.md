# WCphotography

**Business & product photography · FPV drone aerials · Photos + websites for businesses**

Founded by **Silas Whitt** and **Chase Callanan**.

This repository is the central hub for WCphotography. It holds the business website, our pricing and policies, and our checklists. Day-to-day work (leads, client jobs, to-dos) is tracked in **GitHub Issues**.

---

## Repository layout

```
photography/
├── website/                  ← The public website (auto-deployed to GitHub Pages)
│   ├── index.html            Home
│   ├── portfolio.html        Portfolio gallery (filterable)
│   ├── about.html            About Silas & Chase
│   ├── contact.html          Contact / quote request form
│   ├── pay.html              Packages, pricing & online payments
│   └── assets/
│       ├── css/styles.css    All styling (colors and fonts at the top)
│       ├── js/main.js        Menu, gallery, contact form (settings at the top)
│       └── images/           Logos, hero image, headshots, portfolio photos
├── business/                 ← Internal business docs
│   ├── services-and-pricing.md
│   ├── payments-setup.md
│   ├── brand-guide.md
│   ├── client-workflow.md
│   ├── shoot-checklist.md
│   └── launch-checklist.md
└── .github/
    ├── workflows/deploy-website.yml   Publishes /website on every push to main
    └── ISSUE_TEMPLATE/                Forms for new client jobs and tasks
```

## Using GitHub to run the business

| Want to… | Do this |
|---|---|
| Track a new client or lead | **Issues → New issue → "New client job"** |
| Track a to-do (gear, marketing, website edit) | **Issues → New issue → "Business task"** |
| See everything in flight | Make a **Project board** (Projects → New → Board) with columns *Lead → Booked → Shot → Editing → Delivered → Paid* |
| Change the website | Edit files in `website/` and commit to `main`. It goes live automatically. |

## Getting the website live (one-time)

1. Merge this branch into `main`.
2. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. The site goes live at `https://sidaman1.github.io/photography/` within a minute or two.
4. *(Optional)* Buy a domain such as `wcphotography.com` and add it under **Settings → Pages → Custom domain**.

Next, work through [`business/launch-checklist.md`](business/launch-checklist.md). It covers payment links, the contact form, photos and bios.

## Previewing the site locally

```bash
cd website
python3 -m http.server 8000
# open http://localhost:8000
```
