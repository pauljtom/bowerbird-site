# Portfolio Website Deployment Guide

## Fixed for Static Hosting

Your portfolio has been updated to work perfectly with static hosting! The contact form now uses a "mailto" link instead of requiring a backend server.

## Quick Deployment Steps

### 1. Build the Project
```bash
npm run build
```

### 2. Upload Files
- Find the `dist/` folder that was created
- Upload **all contents** of the `dist/` folder to your web hosting service
- Place files in your hosting service's public directory (usually `public_html`, `www`, or `htdocs`)

### 3. Configure Your Hosting
- Make sure your hosting service serves `index.html` for all routes
- Most modern hosting services do this automatically
- If not, look for "Single Page Application" or "SPA" settings in your hosting control panel

## File Structure After Build
```
dist/
├── index.html        # Main HTML file
├── assets/           # CSS, JS, and other assets
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── ...
└── ...
```

## Contact Form
- The contact form now opens the user's default email client
- You can update the email address in the contact form (currently set to john.developer@email.com)
- No database or backend server required!

## Troubleshooting Blank Screen
If you see a blank screen:
1. Check that all files from `dist/` are uploaded correctly
2. Ensure your hosting service supports single-page applications
3. Check browser console for any errors
4. Make sure `index.html` is in the root of your public directory

## Popular Hosting Services
- **Vercel**: Upload `dist/` folder, auto-detects SPA
- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Push `dist/` contents to gh-pages branch
- **Traditional Web Hosting**: Upload `dist/` contents to `public_html`

## Custom Domain
- Most hosting services support custom domains
- Update DNS records to point to your hosting service
- Enable SSL/HTTPS for security

Your portfolio is now ready for static hosting and should work on any web hosting service!