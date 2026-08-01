import type {Task,Filter} from '../src/types/types'
// without deeper

// export const preds = {
//   all: () => true,
//   active: (t: Task) => !t.completed,
//   completed: (t: Task) => t.completed,
// };

 export function visibleWithoutDeeper(tasks: Task[], filter: Filter): Task[] {
  return tasks.filter(preds[filter]);
}


// deeper
type PredicateMap<T, K extends string> = {
  [key in K]: (item: T) => boolean;
};


export const preds: PredicateMap<Task, Filter> = {
  all: () => true,
  active: (t) => !t.completed,
  completed: (t) => t.completed,
};
export function visible<T, K extends string>(
  items: T[],
  filter: K,
  preds: PredicateMap<T, K>
): T[] {
  return items.filter(preds[filter]);
}

 
// console.log("P4 task without deeper",visibleWithoutDeeper([{completed:true},{completed:false}] as Task[], 'active').length === 1)
// console.log("P4 task with deeper",visible([{completed:true},{completed:false}] as Task[], 'active',preds).length === 1)  
// console.log(preds.all())
