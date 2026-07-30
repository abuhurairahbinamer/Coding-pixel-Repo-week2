import type { Task,editData } from '../types/types';
import TaskItem from './TaskItem';
import  {editTitle} from '../../practice/p6'
type Props = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  showEditScreen:(f: (pre: editData) => editData) => void;
  edit:editData;
  setTasks:(f: Task[]) => void;
  callback:string
};

export default function TaskList({ tasks, onToggle, onDelete, showEditScreen ,edit,setTasks,callback}: Props) {
  const isEmpty = tasks.length === 0;
const handleCancelEdit=()=>showEditScreen(pre=>({...pre,editMode:false}))
const handleEditsave=()=>{
    const result=editTitle(tasks,edit.id,callback);
    setTasks(result);
    handleCancelEdit();
}
  const taskItems = tasks.map(task => (
    <TaskItem
      key={task.id}
      task={task}
      onToggle={onToggle}
      onDelete={onDelete}
      editRequest={showEditScreen}

    />
  ));
if(edit.editMode){
      return (
      <div className="empty-state">
        <div className="empty-icon">📝</div>
        <p>Welcome to edit mode</p>
        <br />
        <button className="delete-btn" onClick={handleCancelEdit}>Cancel Edit</button>
        <button className="edit-btn" onClick={handleEditsave}>Save Edit</button>
      </div>
    );
}
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