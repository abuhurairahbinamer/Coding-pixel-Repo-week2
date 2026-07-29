import type { Task } from '../types/types';
import TaskItem from './TaskItem';

type Props = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function TaskList({ tasks, onToggle, onDelete }: Props) {
  const isEmpty = tasks.length === 0;

  const taskItems = tasks.map(task => (
    <TaskItem
      key={task.id}
      task={task}
      onToggle={onToggle}
      onDelete={onDelete}
    />
  ));

  if (isEmpty) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <p>No tasks found in this view.</p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {taskItems}
    </ul>
  );
}