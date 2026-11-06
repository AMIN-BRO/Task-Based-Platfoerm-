# Taskly — Task management, made simple

A responsive task dashboard for organizing your day and keeping projects moving. Built with HTML, CSS, and JavaScript; no build step required.

## Features

- Create, edit, complete, and delete tasks; organize with projects, due dates, and priorities.
- Search and filter tasks, browse a navigable calendar, and see upcoming work.
- Sign up/sign in, sign out, or continue as a guest; task lists are separated by account on the same browser.
- Responsive dashboard with clickable navigation, task stats, notifications, and profile controls.

## Run locally

Open `index.html` in a browser or run `python -m http.server 8000` and visit `http://localhost:8000`.

## Important account limitation

This repository is a static GitHub Pages website and does not have a server-side authentication service. The included sign-up/sign-in is a **browser-only demo**: account records and task data live in local storage on one browser and are not synced or appropriate for sensitive information. A production login system needs a trusted authentication provider/backend (for example, Supabase or Firebase) and security rules; never treat client-only login as production authentication. For shared/multi-device accounts, configure that backend first.

## GitHub Pages

In repository **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. GitHub Pages will show the website URL after deployment.
