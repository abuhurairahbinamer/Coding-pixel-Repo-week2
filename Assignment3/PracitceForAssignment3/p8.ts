import type { Task } from "../src/types/types";

const tasks: Task[] = [
  {
    id: "1",
    title: "Finish React assignment",
    completed: false,
    createdAt: Date.now(),
    priority: 5,
  },
  {
    id: "2",
    title: "Read useReducer documentation",
    completed: true,
    createdAt: Date.now() - 100000,
    priority: 3,
  },
  {
    id: "3",
    title: "Practice sorting tasks",
    completed: false,
    createdAt: Date.now() - 200000,
    priority: 4,
  },
  {
    id: "4",
    title: "Clean up project folder",
    completed: true,
    createdAt: Date.now() - 300000,
    priority: 2,
  },
  {
    id: "5",
    title: "Push code to GitHub",
    completed: false,
    createdAt: Date.now() - 400000,
    priority: 1,
  },
];

function counts(tasks: { completed: boolean }[]) {
  const total = tasks.length;
  const active = tasks.filter(t => !t.completed).length;
  const completed = total - active;

  return { total, active, completed };
}

const sortBy=(tasks:Task[],sortAction:string)=>{
    return tasks.length!==0?[...tasks].sort((a, b) => {
  if (sortAction === "priority") {
    return b.priority - a.priority; 
  }
  return b.createdAt - a.createdAt;
}):[]
}

function commitEdit(
  tasks: Task[],
  id: string,
  next: string
){
  const trimmed = next.trim();

  if (!trimmed) return tasks;

  const newTasks = tasks.map(t => {
    if (t.id === id) {
      if (t.title === trimmed){ 
        return t;
      }
      return { ...t, title: trimmed };
    }
    return t;
  });

  return  newTasks
}

console.log('P8 task done with deeper (before): ',counts(tasks));
console.log('P8 task done with deeper (after): ',counts(sortBy(commitEdit(tasks,'3','edited third title'),'priority')));
//deeper
//Only operations that modify the task data itself (add, delete, toggle) break counts because counts are derived from the current state, while operations like edit, sort, or reload don’t change the underlying count-related values.