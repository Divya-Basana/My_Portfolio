@echo off
REM Quick Vercel Deployment Script for Windows
REM Run this after setting up your GitHub repository

echo.
echo ========================================
echo   Basana Divya Portfolio Deployment
echo ========================================
echo.

REM Check if Node.js is installed
node -v >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install from https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js found
echo.

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed. Please install from https://git-scm.com
    pause
    exit /b 1
)

echo ✅ Git found
echo.

REM Check if Vercel CLI is installed globally
vercel --version >nul 2>&1
if errorlevel 1 (
    echo 📦 Installing Vercel CLI...
    call npm install -g vercel
    if errorlevel 1 (
        echo ❌ Failed to install Vercel CLI
        pause
        exit /b 1
    )
)

echo ✅ Vercel CLI ready
echo.

REM Build the project
echo 🔨 Building your portfolio...
call npm run build
if errorlevel 1 (
    echo ❌ Build failed
    pause
    exit /b 1
)

echo ✅ Build successful
echo.

REM Deploy to Vercel
echo 🚀 Deploying to Vercel (production)...
call vercel --prod

if errorlevel 0 (
    echo.
    echo ========================================
    echo ✅ Deployment Successful!
    echo ========================================
    echo.
    echo 🌐 Your live URL is ready above ⬆️
    echo.
    echo 📌 Next Steps:
    echo    1. Copy your live URL
    echo    2. Share on LinkedIn: https://linkedin.com
    echo    3. Add to your GitHub bio
    echo    4. Share on Twitter/X
    echo.
) else (
    echo ❌ Deployment failed
    exit /b 1
)

pause
