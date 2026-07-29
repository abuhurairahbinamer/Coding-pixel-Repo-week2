import type {Task} from '../src/types/types'
export function removeAt(tasks:Task[], id:string) {
  const filtered = tasks.filter(t => t.id !== id);
  //deeper
  return filtered.length === tasks.length ? tasks : filtered;
}
//we will not return new array if the id is not found as new array will cause react to re-render.we will return same array.