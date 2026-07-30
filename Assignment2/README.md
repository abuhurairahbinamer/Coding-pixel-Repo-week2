# ⚡ Task Board — React + TypeScript + Vite

A modern, interactive Task Board web application built as part of the **CMIT Internship Program (Week 2: React Fundamentals)**. This application demonstrates component composition, typed props, immutable state updates, custom hooks, and clean architecture without inline business logic in JSX.

---

## 🌟 Features

- **Controlled Task Input**: Add new tasks with automatic whitespace trimming and empty title rejection (preserves text input on invalid submission).
- **Task Management**: Toggle task completion status and delete tasks immutably using array methods (`map`, `filter`, `spread`).
- **Interactive Filtering**: Filter tasks by `All`, `Active`, or `Completed` states via `FilterBar`.
- **Live Derived Counts**: Real-time accurate task counts (`Total`, `Active`, `Completed`) computed directly from state without duplicate counter state.
- **Local Storage Persistence**: Custom `useLocalStorage` hook persists state across page reloads and browser sessions.
- **Reducer-Based State Management**: Pure `taskReducer` function handling `'add'`, `'toggle'`, `'delete'`, and `'edit'` action transitions.
- **Stable React Keys**: List rendering powered by unique `task.id` keys (`crypto.randomUUID()`), avoiding index key bugs.
- **Modern UI & UX**: Glassmorphism dark mode aesthetic built with Vanilla CSS (`App.css`) and responsive layout.

---

## 🧩 Component Architecture

| Component | Responsibility | Props Interface |
|---|---|---|
| **`App`** | Main container & state management owner | Root Component |
| **`TaskInput`** | Controlled form input for adding tasks | `onAdd`, `edit`, `setEdit`, `tasks`, `callBack` |
| **`FilterBar`** | Navigation bar to switch active filter & view counts | `filter`, `setFilter`, `total`, `active`, `completed`, `edit` |
| **`TaskList`** | Renders list of tasks or empty state | `tasks`, `onToggle`, `onDelete`, `showEditScreen`, `edit`, `setTasks`, `callback` |
| **`TaskItem`** | Individual task row with checkbox toggle & delete action | `task`, `onToggle`, `onDelete` |

---

## 📁 Project Structure

```text
Assignment2/
├── practice/                # Ungraded practice problem modules (P3–P9)
│   ├── P3.ts                # Immutable task deletion (removeAt)
│   ├── p4.ts                # Predicate lookup map filtering (visible)
│   ├── p5.ts                # Derived task counts (counts)
│   ├── p6.ts                # Immutable title editing (editTitle)
│   ├── p7.tsx               # Controlled input mechanics & explanations
│   ├── p8.ts                # Custom useLocalStorage hook
│   └── p9.ts                # Pure taskReducer function
├── src/
│   ├── component/           # React Components
│   │   ├── FilterBar.tsx
│   │   ├── TaskInput.tsx
│   │   ├── TaskItem.tsx
│   │   └── TaskList.tsx
│   ├── types/
│   │   └── types.ts         # TypeScript data models (Task, Filter, Action)
│   ├── App.css              # Custom Vanilla CSS (Glassmorphism Dark Theme)
│   ├── App.tsx              # Parent application component
│   └── main.tsx             # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Technology Stack

- **Core**: React 18 / 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Pure Vanilla CSS (Glassmorphic Theme, Google Fonts `Plus Jakarta Sans`)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. Clone the repository and navigate to the project folder:
   ```bash
   cd Assignment2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Production Build & Type Check

To perform TypeScript type checking and build the production bundle:
```bash
npm run build
```

---

## 📋 Data Model

```typescript
export type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
};

export type Filter = 'all' | 'active' | 'completed';
```
