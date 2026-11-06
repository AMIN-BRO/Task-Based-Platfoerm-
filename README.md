# Taskly — Task management, made simple

A polished, responsive task dashboard for organizing your day and keeping projects moving. Built with plain HTML, CSS, and JavaScript—no build step or dependencies required.

## Features

- Overview dashboard with task totals, progress, completion, and daily focus
- Create tasks with descriptions, projects, due dates, and priorities
- Mark tasks complete or delete them
- Filter by status, navigate by project, and search task details
- Sort tasks by due date
- Mini calendar and upcoming task agenda
- Responsive layout with mobile navigation
- Local browser storage, so your tasks persist between visits

## Run locally

Open `index.html` in a browser, or serve this folder with any static web server. For example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and `/ (root)`, then save.
4. GitHub Pages will provide the published website URL after the first deployment.

Tasks are stored in the browser's local storage and are not synced between devices or accounts.
