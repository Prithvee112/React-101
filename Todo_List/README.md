# Todo List App

A beautiful and functional Todo List application built with React, Vite, and Tailwind CSS.

## Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete todos
- ✅ Filter todos (All, Active, Completed)
- ✅ Clear all completed todos
- ✅ Persistent storage using localStorage
- ✅ Beautiful gradient UI with smooth animations
- ✅ Responsive design

## Technologies Used

- **React 18.3.1** - UI library
- **Vite 7.3.1** - Build tool and dev server
- **Tailwind CSS 4.2.0** - Styling
- **localStorage** - Data persistence

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation & Setup

1. Navigate to the Todo_List directory:
```bash
cd Todo_List
```

2. Install dependencies (if not already installed):
```bash
npm install
```

## Running the Application

### Development Mode

To run the application in development mode with hot reload:

```bash
npm run dev
```

The application will start on `http://localhost:5173/`

### Build for Production

To create a production build:

```bash
npm run build
```

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## How to Use

1. **Add a Todo**: Type your task in the input field and press Enter or click the "Add" button
2. **Complete a Todo**: Click the checkbox next to a todo to mark it as complete
3. **Delete a Todo**: Click the "×" button on the right side of a todo to delete it
4. **Filter Todos**: Use the "All", "Active", or "Completed" buttons to filter your view
5. **Clear Completed**: Click "Clear completed" to remove all completed todos at once

## Project Structure

```
Todo_List/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx          # Main Todo List component
│   ├── index.css        # Tailwind CSS imports
│   └── main.jsx         # Application entry point
├── index.html
├── package.json
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── vite.config.js       # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail

### Local Storage Persistence
All todos are automatically saved to your browser's localStorage, so your tasks persist even after closing the browser.

### Responsive Design
The app is fully responsive and works great on desktop, tablet, and mobile devices.

### Filter System
- **All**: Shows all todos
- **Active**: Shows only incomplete todos
- **Completed**: Shows only completed todos

## Browser Support

Works on all modern browsers that support ES6+ and localStorage.
