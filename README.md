# EditHub — Editing Materials Hub

A responsive, dark-themed editing-material library starter.

## Features
- Responsive home page
- Search and category filtering
- Sorting by newest, name, or downloads
- Material cards with preview + download buttons
- Optional admin/add-material form
- Browser-local storage for custom materials
- Light/dark theme toggle
- No framework or build step required

## Run
Open `index.html` in a browser, or use any static hosting service.

## Important
The demo material URLs use `example.com`. Replace them in `script.js` with your real file links.

The upload form in this version is **local to the browser**. It is not a secure online admin/backend. For permanent online uploads, add a backend/database and authenticated admin storage (for example, Supabase/Firebase/Cloudinary or your own server).

## Suggested production structure
Frontend: this project
Auth: admin-only authentication
Database: materials metadata
Storage: actual ZIP/PNG/MP4/TTF files
CDN: fast downloads
