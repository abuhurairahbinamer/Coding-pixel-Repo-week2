# ⚡ Task Board — React + TypeScript + Vite

A modern, interactive Task Board web application built as part of the **CMIT Internship Program (Week 2: React Fundamentals)**. This application demonstrates component composition, typed props, immutable state updates, custom hooks, reducer-based state management, and clean architecture without inline business logic in JSX.

---

## 🌟 Features

- **Controlled Task Input**: Add new tasks with automatic whitespace trimming and empty title rejection (preserves text input on invalid submission).
- **Priority System**: Assign priority levels (1–5) to tasks via a styled select dropdown; tasks can be sorted by priority or creation date.
- **Task Management**: Toggle task completion status and delete tasks immutably using array methods (`map`, `filter`, `spread`).
- **Inline Editing**: Double-click any task title to edit it inline — press `Enter` to save or `Escape` to cancel.
- **Interactive Filtering**: Filter tasks by `All`, `Active`, or `Completed` states via `FilterBar`.
- **Clear Completed**: One-click bulk removal of all completed tasks (button appears only when completed tasks exist).
- **Sort Controls**: Sort tasks by `Created At` (newest first) or `Priority` (highest first) via styled radio buttons.
- **Live Derived Counts**: Real-time accurate task counts (`Total`, `Active`, `Completed`) computed directly from state without duplicate counter state.
- **Dynamic Document Title**: Browser tab title updates to show the current task count (e.g., `Count : 5`).
- **Local Storage Persistence**: Custom `useLocalStorage` hook persists state across page reloads and browser sessions.
- **Reducer-Based State Management**: Pure `taskReducer` function handling `'add'`, `'toggle'`, `'delete'`, `'edit'`, and `'clear_completed'` action transitions.
- **Stable React Keys**: List rendering powered by unique `task.id` keys (`crypto.randomUUID()`), avoiding index key bugs.
- **Modern UI & UX**: Glassmorphism dark mode aesthetic built with Vanilla CSS (`App.css`), custom-styled form controls (select, radio, inline edit input), and responsive layout.

---

## 🧩 Component Architecture

| Component | Responsibility | Props Interface |
|---|---|---|
| **`App`** | Main container & state management owner | Root Component |
| **`TaskInput`** | Controlled form input for adding tasks with priority select | `onAdd`, `edit`, `setEdit`, `tasks`, `callBack` |
| **`FilterBar`** | Navigation bar to switch active filter, view counts & clear completed tasks | `filter`, `setFilter`, `total`, `active`, `completed`, `edit`, `dispatch` |
| **`TaskList`** | Renders sorted list of tasks, sort controls, or empty/edit state | `tasks`, `onToggle`, `onDelete`, `showEditScreen`, `edit`, `setTasks`, `callback`, `dispatch` |
| **`TaskItem`** | Individual task row with checkbox toggle, inline editing & delete action | `task`, `onToggle`, `onDelete`, `dispatch` |

---

## 📁 Project Structure

```text
Assignment3/
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
   cd Assignment3
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
  priority: number;
};

export type Filter = 'all' | 'active' | 'completed';

export type Action =
  | { type: "add"; payload: { title: string; priority: number } }
  | { type: "toggle"; payload: { id: string } }
  | { type: "delete"; payload: { id: string } }
  | { type: "edit"; payload: { id: string; next: string } }
  | { type: "clear_completed" };
```
