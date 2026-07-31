import type { Action, Task,editData } from '../types/types';
import TaskItem from './TaskItem';
import { useLocalStorage } from '../../practiceForAssignment2/p8';
import { useEffect } from 'react';
import {titleSummary} from '../../PracitceForAssignment3/p6'
type Props = {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  showEditScreen:(f: (pre: editData) => editData) => void;
  edit:editData;
  setTasks:(f: Task[]) => void;
  callback:string;
  dispatch:(f:Action)=>void;
};

export default function TaskList({ tasks, onToggle, onDelete, showEditScreen ,edit,callback,dispatch}: Props) {
 // deeper part of P6 task
  useEffect(() => {
  document.title = titleSummary(tasks);
}, [tasks]);
 // deeper part of P6 task
  const isEmpty = tasks.length === 0;

    const [sortBy, setSortBy] = useLocalStorage<"createdAt" | "priority">("sortBy","createdAt");
const handleCancelEdit=()=>showEditScreen(pre=>({...pre,editMode:false}))
const handleEditsave=()=>{
    
    dispatch({
        type:"edit",
        payload:{id:edit.id,next: callback}
    })
    
    handleCancelEdit();
}

  const sortedTasks = tasks.length!==0?[...tasks].sort((a, b) => {
  if (sortBy === "priority") {
    return b.priority - a.priority; // high → low
  }
  return b.createdAt - a.createdAt; // newest first
}):[]

  const taskItems = sortedTasks.map(task => (
    <TaskItem
      key={task.id}
      task={task}
      onToggle={onToggle}
      onDelete={onDelete}
      dispatch={dispatch}
    
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
    <>
 <div className="sort-bar">
  <span className="sort-label">Sort By</span>&nbsp;:&nbsp;

  <span className="sort-option">
    <label htmlFor="createdAt">Created At</label>
    <input
      id="createdAt"
      type="radio"
      name="sort"
      value="createdAt"
      checked={sortBy === "createdAt"}
      onChange={(e) =>
        setSortBy(e.target.value as "createdAt" | "priority")
      }
    />
  </span>

  &nbsp;

  <span className="sort-option">
    <label htmlFor="priority">Priority</label>
    <input
      id="priority"
      type="radio"
      name="sort"
      value="priority"
      checked={sortBy === "priority"}
      onChange={(e) =>
        setSortBy(e.target.value as "createdAt" | "priority")
      }
    />
  </span>
</div>
    <ul className="task-list">
      {taskItems}
    </ul>
    </>
  );
}