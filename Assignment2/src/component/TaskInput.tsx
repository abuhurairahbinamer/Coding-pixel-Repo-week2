import { useState,useEffect } from 'react';
import type { editData,Task } from '../types/types';
type Props = {
  onAdd: (title: string) => void;
  edit:editData;
  tasks:Task[];
  setEdit:(f: (pre: editData) => editData) => void;
  callBack:(f:string)=>void;
};

export default function TaskInput({ onAdd ,edit,tasks,setEdit,callBack}: Props) {
  const [text, setText] = useState('');
  const editMode=edit.editMode
  useEffect(()=>{
  if(edit.editMode){
if(!edit.id){
setEdit((pre)=>({...pre,editMode:false}));
}
const Title=tasks.find(t=>t.id===edit.id);
if(Title){
  setText(Title.title);
  callBack(Title.title);
  
}
  }
  else{
   setText('');
   callBack('');
  }
  },[edit])

  const handleAdd = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return; //  reject empty
    onAdd(trimmed);
    setText(''); // clear only if valid
    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    callBack(e.target.value);
  };

  return (
    <form className="task-input-container" onSubmit={handleAdd}>
      <input
        className="task-input"
        value={text}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
      <button type="submit" disabled={editMode} className="add-btn">
        <span>+</span> Add Task
      </button>
    </form>
  );
}