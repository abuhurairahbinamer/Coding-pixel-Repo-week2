import type {Task} from '../src/types/types'
// deeper part of this task is in TaskList.tsx
export function titleSummary(tasks: Task[]): string {
  const activeCount = tasks.filter(t => !t.completed).length;
  return `(${activeCount} active) Task Board`;
}

