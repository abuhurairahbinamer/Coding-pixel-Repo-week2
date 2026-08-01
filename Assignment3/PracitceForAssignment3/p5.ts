import type {Task} from '../src/types/types'
export const clearCompleted=(tasks:Task[])=>{
return [...tasks].filter(task => !task.completed);
}
console.log("p5 task done with deeper : ",clearCompleted([{completed:true},{completed:false}] as Task[]).length === 1)