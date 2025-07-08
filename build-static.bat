@echo off
echo Building portfolio for static hosting...
call npm run build
echo.
echo Build complete! 
echo.
echo Upload the contents of the 'dist' folder to your web hosting service.
echo Place files in your public directory (public_html, www, etc.)
echo.
echo Don't forget to create the .htaccess file!
pause