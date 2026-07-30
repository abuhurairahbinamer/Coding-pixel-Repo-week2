import type {Task} from '../src/types/types'
//deeper
export function editTitle(
  tasks: Task[],
  id: string,
  next: string
) {
  const trimmed = next.trim();

  if (!trimmed) return tasks;

  let changed = false;

  const newTasks = tasks.map(t => {
    if (t.id === id) {
      if (t.title === trimmed) return t; // no change
      changed = true;
      return { ...t, title: trimmed };
    }
    return t;
  });

  return changed ? newTasks : tasks;
}