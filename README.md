# React-101 Projects

A collection of React learning projects built with Vite and Tailwind CSS.

## Projects

### 1. Background Changer (bg-changer)
A simple background color changer application that demonstrates:
- State management with `useState`
- Event handling
- Dynamic styling
- Tailwind CSS styling

**Location:** `bg-changer/`

### 2. Password Generator (Password_Generator)
A password generator with customizable options:
- Generate passwords with customizable length
- Include/exclude numbers and special characters
- Copy to clipboard functionality
- Uses `useState`, `useCallback`, `useEffect`, and `useRef` hooks

**Location:** `Password_Generator/`

### 3. Currency Converter (Currency_Converter)
A currency converter using a real-time API:
- Convert between multiple currencies
- Real-time exchange rates via API
- Swap currency functionality
- Component composition

**Location:** `Currency_Converter/`

### 4. Todo List (Todo_List) ⭐ NEW
A fully-featured todo list application:
- Add, delete, and mark todos as complete
- Filter todos (All, Active, Completed)
- Clear completed todos
- Persistent storage with localStorage
- Beautiful gradient UI with smooth animations
- Responsive design

**Location:** `Todo_List/`

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Getting Started

Each project is self-contained in its own directory. To run any project:

1. Navigate to the project directory:
```bash
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173/`)

## Available Scripts

Each project has the following npm scripts:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

All projects use:
- **React 18.3.1** - UI library
- **Vite 7.3.1** - Build tool and dev server
- **Tailwind CSS 3.4.x** - Utility-first CSS framework
- **ESLint** - Code quality and linting

## Project Structure

Each project follows a similar structure:
```
project-name/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Learning Path

These projects are designed to progressively teach React concepts:

1. **bg-changer** - Basic state and event handling
2. **Password_Generator** - Multiple hooks and side effects
3. **Currency_Converter** - API integration and component composition
4. **Todo_List** - Complete CRUD operations, filtering, and data persistence

## License

These are learning projects and are free to use for educational purposes.
