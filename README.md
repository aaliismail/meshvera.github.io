# Meshvera Website - Getting Started Guide

## What This Website Does
This is Meshvera's professional business website that showcases your MSP (Managed Service Provider) services. It's a single-page application built with React that includes:
- **Hero Section** - Eye-catching introduction with circular visual
- **Services Section** - 6 service cards showing what you offer
- **About Section** - Information about Meshvera
- **Contact Form** - Simple form that emails inquiries to support@meshvera.com

## Technology Stack
- **React** - JavaScript framework for building the UI
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Framer Motion** - Animation library
- **Formspree** - Handles contact form email delivery

## Getting Started

### Prerequisites
You need to have these installed on your computer:
1. **Node.js** (version 18 or higher) - Download from https://nodejs.org
2. **Git** - Download from https://git-scm.com

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/aaliismail/meshvera.github.io.git
cd meshvera.github.io
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

The website will open at `http://localhost:5173`

## Making Changes

### Editing Content

#### Change Hero Text
File: `src/App.jsx` (lines 60-62)
```jsx
title1="IT Security"
title2="Made Simple"
subtitle="Your subtitle here..."
```

#### Change Services
File: `src/components/sections/ServicesSection.jsx` (lines 15-46)
Edit the services array:
```jsx
{
    icon: Shield,
    title: "Your Service Name",
    description: "Your description..."
}
```

#### Change About Section
File: `src/components/sections/AboutSection.jsx` (lines 14-16)
Edit the text and feature cards.

### Editing Colors
Main colors are defined in `src/index.css`:
- Navy background: `--color-navy-950`
- Blue accent: `--color-blue-600`

### Adding Images
Place images in the `public/` folder, then reference them:
```jsx
<img src="/your-image.png" alt="Description" />
```

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with your production-ready website.

## Deploying to GoDaddy

### Option 1: GitHub Pages (Recommended - FREE)
1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Point your GoDaddy domain to GitHub Pages

**Steps:**
1. Go to your GitHub repository settings
2. Click "Pages" in the left sidebar
3. Under "Source", select "main" branch and "/root" folder
4. Click Save
5. Your site will be live at `https://aaliismail.github.io/meshvera.github.io`

**Connect GoDaddy Domain:**
1. In GoDaddy, go to DNS Management
2. Add these DNS records:
   - Type: `A` | Name: `@` | Value: `185.199.108.153`
   - Type: `A` | Name: `@` | Value: `185.199.109.153`
   - Type: `A` | Name: `@` | Value: `185.199.110.153`
   - Type: `A` | Name: `@` | Value: `185.199.111.153`
   - Type: `CNAME` | Name: `www` | Value: `aaliismail.github.io`
3. In GitHub repository, add a file `public/CNAME` with your domain name

### Option 2: GoDaddy Hosting (Paid)
1. Build the site: `npm run build`
2. Upload everything in the `dist/` folder to your GoDaddy hosting via FTP
3. Make sure files go to the public_html or www directory

## Contact Form Setup

The contact form uses **Formspree** (free tier) to send emails to support@meshvera.com.

**To activate:**
1. Go to https://formspree.io
2. Create a free account
3. Create a new form
4. Copy the form endpoint (looks like `https://formspree.io/f/xxxxx`)
5. Update `src/components/sections/ContactSection.jsx` line 15 with your endpoint

## Common Tasks

### Update Company Email
File: `src/components/sections/ContactSection.jsx`
Line 32: Change `support@meshvera.com` to your email

### Change Button Text
Hero button: `src/components/sections/HeroGeometric.jsx` line 57
Contact button: `src/components/sections/ContactSection.jsx` line 112

### Add a New Page
1. Create new file in `src/components/sections/`
2. Import it in `src/App.jsx`
3. Add to navigation in `src/App.jsx` (navItems array)

## File Structure
```
meshvera.github.io/
├── public/              # Static files (images, fonts)
├── src/
│   ├── components/
│   │   ├── layout/     # NavBar, Footer
│   │   ├── sections/   # Hero, Services, About, Contact
│   │   └── ui/         # Reusable components (Buttons, Inputs)
│   ├── App.jsx         # Main application file
│   ├── index.css       # Global styles and colors
│   └── main.jsx        # Application entry point
├── package.json        # Project dependencies
└── vite.config.js      # Build configuration
```

## Troubleshooting

**Issue: "npm: command not found"**
- Install Node.js from https://nodejs.org

**Issue: Changes not showing**
- Stop the dev server (Ctrl+C)
- Run `npm run dev` again
- Clear browser cache (Ctrl+Shift+R)

**Issue: Build errors**
- Delete `node_modules` folder
- Run `npm install` again
- Run `npm run build`

**Issue: Form not sending emails**
- Check Formspree setup
- Verify email address is correct
- Check browser console for errors (F12)

## Getting Help

If you need help:
1. Check the error message in the terminal
2. Search for the error on Google
3. Check React documentation: https://react.dev
4. Check Tailwind CSS docs: https://tailwindcss.com

## Quick Commands Reference

```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
git add .           # Stage all changes
git commit -m "message"  # Commit changes
git push origin main     # Push to GitHub
```

## Contact
For questions about the codebase, refer to this README or the inline comments in the code files.
