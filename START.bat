@echo off
title Dalyn Content Studio
echo.
echo  ==========================================
echo   DS CONTENT STUDIO - Starting up...
echo  ==========================================
echo.

cd /d "%~dp0"

echo  Starting server...
start /b node server.js

timeout /t 2 /nobreak >nul

echo  Opening browser...
start chrome http://localhost:3000

echo.
echo  Studio is live at http://localhost:3000
echo  Keep this window open while you work.
echo  Press Ctrl+C or close this window to stop.
echo.

node server.js
