# Nasi Arab Orsay

## Overview
A React + TypeScript + Vite website for "Nasi Arab Orsay" - an Indonesian Arabian cuisine restaurant. The site features a beautiful dark theme with gold accents, showcasing the restaurant's menu, gallery, reviews, and contact information.

## Tech Stack
- React 19
- TypeScript
- Vite 6
- Tailwind CSS (via CDN)
- Font Awesome icons

## Project Structure
- `App.tsx` - Main application component
- `index.tsx` - React entry point
- `index.html` - HTML template with Tailwind config
- `components/` - UI components:
  - Navbar, Hero, About, Menu, Order, Gallery, Reviews, Contact, Footer, FloatingCTA, AIChat

## Development
- Run: `npm run dev` (starts on port 5000)
- Build: `npm run build`

## Configuration
- Vite is configured to run on port 5000 with all hosts allowed for Replit proxy compatibility
- Uses GEMINI_API_KEY environment variable for AI chat features (optional)

## Deployment
- Static deployment with `npm run build`
- Build output goes to `dist/` directory
