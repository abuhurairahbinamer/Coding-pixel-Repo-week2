import { useState } from 'react';
import type { Task, Filter } from './types/types';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';
import FilterBar from './component/FilterBar';
import {removeAt} from '../practice/P3'
import {visible} from '../practice/p4'
import { preds } from '../practice/p4';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  //  Add task
  const addTask = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: trimmed,
      completed: false,
      createdAt: Date.now(),
    };

    setTasks(prev => [...prev, newTask]);
  };

  //  Toggle
  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  //  Delete
  const deleteTask = (id: string) => {
    setTasks(pre=>removeAt(pre,id));
  };

  //  Filtered tasks
  const filteredTasks = visible(tasks,filter,preds)

  //  Counts
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const active = total - completed;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>⚡ Task Board</h1>
        <p>Stay organized and boost your productivity</p>
      </header>

      <TaskInput onAdd={addTask} />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        total={total}
        active={active}
        completed={completed}
      />

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />

    </div>
  );
}

export default App;