import type { Task,editData } from '../types/types';
type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  editRequest:(f: (pre: editData) => editData) => void;
};

export default function TaskItem({ task, onToggle, onDelete,editRequest }: Props) {
  // Pre-compute values
  const itemClass = `task-item ${task.completed ? 'completed' : ''}`;
  const checkmark = task.completed ? <span className="checkmark">✓</span> : null;

  // Click handlers
  const handleToggle = () => onToggle(task.id);
  const handleDelete = () => onDelete(task.id);
  const handleEditRequest=()=>editRequest((pre)=>({...pre,editMode:true,id:task.id}))
  
  return (
    <li className={itemClass}>
      <div className="task-item-content" onClick={handleToggle}>
        <div className="checkbox-custom">
          {checkmark}
        </div>
        <span className="task-title">{task.title}</span>
      </div>
<button className="edit-btn" onClick={handleEditRequest}>Edit</button>
      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}