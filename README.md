# TaskFlow Pro

A responsive task-management dashboard starter built with React, JavaScript, and Vite.

## Requirements

- Node.js (recommended: Node.js 20.19+ or 22.12+)
- npm

## Getting started

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |

## Project structure

```text
src/
├── components/   Reusable interface components
├── data/         Sample dashboard and task data
├── pages/        Page-level views, including the Dashboard
├── styles/       Global CSS and design tokens
├── App.jsx       Application component
└── main.jsx      React entry point
```

`index.html` is the Vite HTML entry point. Global styles are loaded from `src/main.jsx`.

## Current scope

The dashboard includes sample task cards, workspace statistics, navigation, and responsive styling. The task data is static; task creation, editing, persistence, routing, and backend integration are not implemented.
