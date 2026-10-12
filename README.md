# WCphotography

**Business & product photography · FPV drone aerials · Photos + websites for businesses**

Founded by **Silas Whitt** and **Chase Callanan**.

This repository is the central hub for WCphotography. It holds the business website, our pricing and policies, and our checklists. Day-to-day work (leads, client jobs, to-dos) is tracked in **GitHub Issues**.

---

## Repository layout

```
photography/
├── index.html                Home                     ┐
├── portfolio.html            Portfolio gallery        │
├── about.html                About Silas & Chase      │  The public website
├── contact.html              Contact / quote form     │  (published by GitHub Pages)
├── pay.html                  Packages & payments      │
├── assets/                                            │
│   ├── css/styles.css        Colors, fonts, layout    │
│   ├── js/main.js            Menu, gallery, form      │
│   └── images/               Photos, headshots, logo  ┘
├── business/                 Internal business docs
│   ├── services-and-pricing.md
│   ├── payments-setup.md
│   ├── brand-guide.md
│   ├── client-workflow.md
│   ├── shoot-checklist.md
│   └── launch-checklist.md
└── .github/ISSUE_TEMPLATE/   Forms for new client jobs and tasks
```

## Using GitHub to run the business

| Want to… | Do this |
|---|---|
| Track a new client or lead | **Issues → New issue → "New client job"** |
| Track a to-do (gear, marketing, website edit) | **Issues → New issue → "Business task"** |
| See everything in flight | Make a **Project board** (Projects → New → Board) with columns *Lead → Booked → Shot → Editing → Delivered → Paid* |
| Change the website | Edit the `.html` files or `assets/` and commit to `main`. It goes live in about a minute. |

## Website hosting

The site is hosted free on **GitHub Pages** at **https://sidaman1.github.io/photography/**
(Settings → Pages → Deploy from a branch → `main` / root).

To use a custom domain such as `wcphotography.com`, buy it, then add it under **Settings → Pages → Custom domain**.

Next, work through [`business/launch-checklist.md`](business/launch-checklist.md). It covers payment links, the contact form, photos and bios.

## Previewing the site locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
