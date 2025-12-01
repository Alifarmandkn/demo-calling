# Demo Calling App

A React TypeScript application built with Vite, Material-UI (MUI), and Material Symbols.

## Features

- React 18 with TypeScript
- Material-UI (MUI) for UI components
- Material Symbols for icons
- Login form with hardcoded credentials
- Modern Vite build tool

## Setup

1. Install dependencies:
```bash
npm install
```

## Running the App

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## Credentials

Default credentials are stored in `credentials.json`:
- Username: `demo`
- Password: `password123`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
demo-calling/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # App styles
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── credentials.json     # Hardcoded login credentials
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration

```
