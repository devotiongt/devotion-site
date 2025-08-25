# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the devotion-site repository - a React website for Devotion, a Christian organization that creates technology projects to support NGOs with social impact and gospel evangelization.

## Technology Stack

- **Framework**: React 18 with Vite
- **Styling**: Pure CSS with terminal-inspired design (black, white, green palette)
- **Font**: JetBrains Mono for monospace terminal aesthetic
- **Build Tool**: Vite for development and production builds

## Common Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Architecture

### Component Structure
```
src/
├── components/
│   ├── Header.jsx/.css     # Navigation with terminal-style logo
│   ├── Hero.jsx/.css       # Main landing section with typing animation
│   ├── About.jsx/.css      # Mission and values section
│   ├── Services.jsx/.css   # Technology services offered
│   ├── Contact.jsx/.css    # Contact form and information
│   └── Footer.jsx/.css     # Footer with links and verse
├── App.jsx                 # Main app component
├── main.jsx               # React entry point
└── index.css              # Global terminal-inspired styles
```

### Design System
- **Primary Colors**: Black background (#000000), white text (#ffffff), terminal green (#00ff41)
- **Typography**: JetBrains Mono for consistent monospace feel
- **Theme**: Terminal/server console inspired design
- **Effects**: Text shadows, glowing borders, typing animations, terminal windows

### Key Features
- **Terminal Aesthetics**: Command prompts, terminal windows, blinking cursors
- **Responsive Design**: Mobile-first approach with terminal styling maintained
- **Animations**: Typing effects, fade-ins, hover animations
- **Christian Focus**: Biblical references, gospel-centered messaging
- **Tech Services**: Web development, mobile apps, ministry tools, evangelism platforms

## Development Guidelines

- Components are self-contained with their own CSS files
- Terminal styling is consistent across all components using CSS custom properties
- All text maintains the monospace aesthetic using JetBrains Mono
- Color palette strictly adheres to black/white/green scheme
- Christian and technical elements are balanced throughout

## Content Focus

The website serves Christian organizations and ministries looking for:
- Web development services
- Mobile applications
- Ministry management tools
- Evangelization platforms
- Data analytics
- Technology consulting

All content reflects the organization's mission to serve God's kingdom through technology.