# Windows Deployment Guide

## For Static Hosting (Recommended)

Since you're deploying to static hosting, you don't need to run a server. Here's what to do:

### Step 1: Build Your Portfolio
Instead of `npm run start`, run:
```cmd
npm run build
```

### Step 2: What the Build Creates
This creates a `dist` folder containing:
- `index.html` - Your main page
- `assets/` folder - Your CSS, JavaScript, and images
- Other static files

### Step 3: Upload to Your Hosting
1. Go to your hosting file manager
2. Navigate to your public directory (`public_html`)
3. Upload **ALL contents** of the `dist` folder
4. Create `.htaccess` file with the content I provided earlier

### Step 4: Create .htaccess File
In your `public_html` directory, create a file named `.htaccess`:
```apache
RewriteEngine On
RewriteBase /

# Handle React Router
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Set proper MIME types
AddType application/javascript .js
AddType text/css .css
AddType text/html .html
```

## Why You Don't Need npm run start

The `npm run start` command is for running a backend server, but you're using static hosting which doesn't support Node.js servers. Your portfolio is now built as static files that work on any web hosting service.

## Quick Windows Build Script

I've created `build-static.bat` - just double-click it to build your portfolio!

## Final Directory Structure
Your `public_html` should look like:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── ...
```

That's it! No server needed - just static files that work everywhere.