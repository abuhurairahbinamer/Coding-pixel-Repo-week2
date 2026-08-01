 import type {Task} from '../src/types/types';
 export const tasks: Task[] = [
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
const sortByPriority=(tasks:Task[])=>{
return [...tasks].sort((a, b) => {
    return b.priority - a.priority; // high → low;
});
}
const sortedTasks=sortByPriority(tasks);
console.log("p1 task done ",JSON.stringify(tasks)!==JSON.stringify(sortedTasks));
console.log("p1 task done with deeper",sortedTasks !== tasks); 
