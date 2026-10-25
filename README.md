# Semantic HTML5 & Accessible Component Architecture

A responsive, static multi-page enterprise dashboard demo built with semantic HTML5, CSS, and vanilla JavaScript.

## Pages
- `index.html` — overview, KPI cards, activity data table, accessible feedback form, and report modal dialog.
- `pages/users.html` — user directory table.
- `pages/reports.html` — saved reports table.
- `css/styles.css` — responsive layout, visible focus styles, reduced-motion support, and reusable component styles.
- `js/app.js` — mobile navigation, native form validation, and dialog behavior.

## Run the project
1. Extract the ZIP file.
2. Open `index.html` in Chrome, Edge, or Firefox. No server or installation is required.
3. Use the sidebar to visit Users and Reports.

## Accessibility features
- Semantic landmarks (`header`, `nav`, `main`, `aside`, `section`, `article`, `footer`).
- Skip-to-content link and keyboard-visible focus indicators.
- Accessible labels, fieldsets/legends, required/minlength/maxlength/email validation, and status announcements.
- Table captions and scoped column headers.
- Native `<dialog>` modal and accessible mobile navigation state.
- Responsive design and reduced-motion preference support.

## Validation
Run each HTML page through the W3C Nu HTML Checker: https://validator.w3.org/nu/
Choose “File upload” or “Text input” and validate `index.html`, `pages/users.html`, and `pages/reports.html`. If your evaluator expects zero errors, validate all three pages after any edits.

## GitHub submission
Upload the entire extracted folder to a public GitHub repository. The expected proof is the public repository URL. If using GitHub Pages, configure the repository to publish from the `main` branch and `/ (root)`.
