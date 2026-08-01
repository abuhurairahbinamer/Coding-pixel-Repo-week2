import type {Task} from '../src/types/types'

export function commitEdit(
  tasks: Task[],
  id: string,
  draft: string
) {
  const trimmed = draft.trim();

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