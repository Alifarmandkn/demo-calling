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

Credentials are stored in `.env` file (not tracked by git):
- Copy `.env.example` to `.env`
- Set `VITE_USERNAME` and `VITE_PASSWORD` in `.env`
- The `.env` file is automatically ignored by git to prevent credentials from being uploaded

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
├── .env                 # Environment variables (not tracked by git)
├── .env.example         # Example environment variables template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration

```
