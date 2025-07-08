# Troubleshooting Guide - "Forbidden" Error

## Common Causes and Solutions

### 1. File Permissions Issue
**Problem:** Files uploaded don't have correct permissions
**Solution:** 
- Set file permissions to 644 for files and 755 for directories
- In your hosting control panel or FTP client, right-click files and set permissions
- Or use command: `chmod 644 *.html *.css *.js` and `chmod 755 directories`

### 2. Wrong Upload Directory
**Problem:** Files uploaded to wrong location
**Solution:**
- Files should go in your domain's public directory
- Common names: `public_html`, `www`, `htdocs`, `public`
- NOT in root directory or subdirectories

### 3. Missing .htaccess File
**Problem:** Apache server needs routing rules for single-page applications
**Solution:**
- Create an `.htaccess` file in your public directory
- Add the content provided below

### 4. Index File Issue
**Problem:** Server can't find the main page
**Solution:**
- Make sure `index.html` is in the root of your public directory
- Some hosts require it to be named exactly `index.html`

## Quick Fixes

### Create .htaccess File
Create a file named `.htaccess` in the same directory as your `index.html`:

```apache
RewriteEngine On
RewriteBase /

# Handle Angular/React Router
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Set proper MIME types
AddType application/javascript .js
AddType text/css .css
AddType text/html .html
```

### Directory Structure Should Look Like:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── ...
└── ...
```

### Contact Your Hosting Provider
If none of the above work:
1. Contact your hosting support
2. Ask them to enable "URL rewriting" or "mod_rewrite"
3. Mention you're hosting a "Single Page Application"
4. Ask about proper file permissions for your account

## Alternative: Try a Subdirectory
If main directory doesn't work:
1. Create a subdirectory like `portfolio`
2. Upload files there
3. Access via `yourdomain.com/portfolio`