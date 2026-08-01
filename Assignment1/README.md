# Assignment 1 — Component & Props Drills

A typed React presentational component suite demonstrating clean composition, prop interface design, strict TypeScript typing, stable data-derived keys, and conditional state rendering.

##  Acceptance Criteria Checklist

- [x] **Vite + React + TS**: Runnable via `npm run dev` and builds cleanly via `npm run build`.
- [x] **4 Reusable Components**:
  - `Badge` (`BadgeProps`)
  - `Avatar` (`AvatarProps`)
  - `StatCard` (`StatCardProps`)
  - `UserList` (`UserListProps`)
- [x] **Zero `any`**: Explicit interface/type declarations for every component prop.
- [x] **Data-Derived Keys**: `UserList` maps users using stable data-derived key `user.id` (never array index).
- [x] **Conditional Rendering**: Displays both populated list state and empty state ("No users found") with an interactive UI toggle.
- [x] **No Business Logic in JSX**: Computations are performed prior to the component `return` block.

---

##  How to Run

### 1. Prerequisites
- **Node.js**: v18+ 
- **npm**: v9+

### 2. Installation
Install project dependencies:
```bash
npm install
```

### 3. Development Server
Start the Vite development server:
```bash
npm run dev
```

### 4. Build & Type Check
Validate TypeScript types and build the production bundle:
```bash
npm run build
```

---

##  Component Composition Overview

| Component | Props Interface | Description |
| :--- | :--- | :--- |
| `Avatar` | `{ name: string; imageUrl: string; }` | Displays user avatar with profile frame and text details. |
| `Badge` | `{ text: string; color: string; }` | Pill badge with customizable text and color background. |
| `StatCard` | `{ title: string; value: number; }` | Metrics summary card for dashboard stats. |
| `UserList` | `{ users: User[]; }` | Renders a list using `user.id` keys or an empty fallback state. |

---

##  Demonstrating Conditional Rendering

Click the **"Toggle Empty State"** / **"Populate Sample Users"** button in the main header of the application to dynamically switch between:
1. **Populated State**: Renders the list of active users (`Ali`, `Ahmed`).
2. **Empty State**: Renders the fallback message (`"No users found"`).
