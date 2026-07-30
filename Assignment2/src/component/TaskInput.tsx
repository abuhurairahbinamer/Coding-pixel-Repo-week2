import { useEffect } from 'react';
import type { editData,Task } from '../types/types';
import { useLocalStorage } from '../../practice/p8';
type Props = {
  onAdd: (title: string) => void;
  edit:editData;
  tasks:Task[];
  setEdit:(f: (pre: editData) => editData) => void;
  callBack:(f:string)=>void;
};

export default function TaskInput({ onAdd ,edit,tasks,setEdit,callBack}: Props) {
  const [text, setText] = useLocalStorage("text",'');
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


// p7 task.An uncontrolled input stores its own value inside the browser DOM rather than React state, so React cannot programmatically clear, reset, or prevent the input box from keeping invalid whitespace without directly manipulating DOM refs.