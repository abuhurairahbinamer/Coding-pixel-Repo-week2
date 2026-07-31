//p3 task is already implemented in TaskItem.tsx the purpose of creating the file is just for the sake of convenience
import type { Task,Action } from '../src/types/types';
import { useLocalStorage } from '../practiceForAssignment2/p8';
type Props = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
   dispatch:(f:Action)=>void;
};

export default function TaskItem({ task, onToggle, onDelete,dispatch}: Props) {

const [isEditing, setIsEditing] = useLocalStorage("viewEditState",false);  //same as viewing/editing state
const [editText, setEditText] = useLocalStorage("draft",task.title); //same as draft

const allowInlineEditing=()=>{
  setIsEditing(true);
};

const updateValue=(e:React.ChangeEvent<HTMLInputElement>)=>setEditText(e.target.value);

    const handleToggle = () => {
if(isEditing){
  return;
}
    onToggle(task.id)
  };
  const itemClass = `task-item ${task.completed ? 'completed' : ''}`;
  const checkmark = !isEditing?task.completed ?  <div onClick={handleToggle} className="checkbox-custom"><span className="checkmark">✓</span></div> :!task.completed?<div onClick={handleToggle} className="checkbox-custom"></div>: null:null;
  const handleEditSave=()=>{
      if (editText.trim() === "") {
        return;
      }
    dispatch({type:"edit",payload:{id:task.id,next:editText}})
    setIsEditing(false);
  }
 

  const handleDelete = () => onDelete(task.id);
  const handleCancelEdit = () => {
  setEditText(task.title); 
  setIsEditing(false);
};
 
  const allowKeyDown=(e:React.KeyboardEvent<HTMLInputElement>)=>{
    if (e.key === "Enter") {
    handleEditSave();
  }
  if (e.key === "Escape") {
    handleCancelEdit();
  }
}

 const show=isEditing?<div><input className="edit-input" autoFocus value={editText}  onBlur={handleEditSave} onKeyDown={allowKeyDown} onChange={updateValue}></input></div>:<span className="task-title"  onClick={(e) => e.stopPropagation()}  onDoubleClick={allowInlineEditing}>{task.title}</span>;
 
  return (
    <li className={itemClass}>
      <div className="task-item-content" >
       
          {checkmark}
       
        {show}
      </div>
      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}


//deeper 
//The draft value should live in a separate state (like useState) so it can be either saved (committed) or canceled (discarded).