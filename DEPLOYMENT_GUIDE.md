# Portfolio Website Deployment Guide

## Overview
Your portfolio website is a full-stack application built with React (frontend) and Express.js (backend). Here's how to deploy it properly.

## Deployment Options

### Option 1: Static Site Hosting (Recommended for Portfolio)
Since your portfolio is mainly a presentation site, you can deploy just the frontend to static hosting services:

**Services:** Vercel, Netlify, GitHub Pages, or any static hosting

**Steps:**
1. Build the frontend only: `npx vite build`
2. Upload the contents of `dist/` folder to your hosting service
3. Configure your hosting service to serve `index.html` for all routes

### Option 2: Full-Stack Deployment
For hosting services that support Node.js (like Heroku, Railway, or VPS):

**Steps:**
1. Build the project: `npm run build`
2. The built files will be in:
   - `dist/public/` - Frontend files
   - `dist/index.js` - Backend server
3. Deploy both files to your hosting service
4. Ensure Node.js is available on the server
5. Run: `npm start` or `node dist/index.js`

## File Structure After Build

```
dist/
├── public/           # Frontend build (HTML, CSS, JS)
│   ├── index.html
│   ├── assets/
│   └── ...
└── index.js          # Backend server
```

## Environment Variables
For production, set:
- `NODE_ENV=production`
- `DATABASE_URL` (if using the contact form)

## Quick Static Deployment
If you just want to showcase your portfolio without the contact form:

1. Run: `npx vite build`
2. Upload everything from the `dist/` folder to your web host
3. Make sure your host serves `index.html` for all routes

## Contact Form Notes
- The contact form requires a backend server and database
- If you don't need it, you can remove the form functionality
- For static hosting, consider using services like Formspree or Netlify Forms

## Custom Domain
- Most hosting services support custom domains
- Update DNS records to point to your hosting service
- Enable SSL/HTTPS for security

## Files to Upload
- For static hosting: Contents of `dist/` folder after running `npx vite build`
- For full-stack: Your entire project folder after running `npm run build`