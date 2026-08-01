import { useEffect } from 'react';
import type { editData,Task } from '../types/types';
import { useLocalStorage } from '../../practiceForAssignment2/p8';
type Props = {
  onAdd: (title: string,priority:number) => void;
  edit:editData;
  tasks:Task[];
  setEdit:(f: (pre: editData) => editData) => void;
  callBack:(f:string)=>void;
};

export default function TaskInput({ onAdd ,edit,tasks,setEdit,callBack}: Props) {
  const [text, setText] = useLocalStorage("text",{text:"",priority:1});
  const editMode=edit.editMode;
  useEffect(()=>{
  if(edit.editMode){
if(!edit.id){
setEdit((pre)=>({...pre,editMode:false}));
}
const Title=tasks.find(t=>t.id===edit.id);
if(Title){
  setText((pre)=>({...pre,text:Title.title}))
  // setText(Title.title);
  callBack(Title.title);
}
  }
  else{
      setText((pre)=>({...pre,text:"",priority:1}))
  //  setText('');
      callBack('');
  }
  },[edit])

  const handleAdd = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = text.text.trim();
    if (!trimmed) return; //  reject empty
    onAdd(trimmed,text.priority);
    // setText(''); // clear only if valid
     setText((pre)=>({...pre,text:"",priority:1}))
    
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setText(e.target.value);
    setText((pre)=>({...pre,text:e.target.value}))
    callBack(e.target.value);
  };

  return (
    <form className="task-input-container" onSubmit={handleAdd}>
      <input
        className="task-input"
        value={text.text}
        onChange={handleChange}
        placeholder="What needs to be done?"
      />
  <select className="priority-select" onChange={(e) =>setText((pre)=>({...pre,priority:Number(e.target.value)}))} value={text.priority}   >
  <option value="1">1 (Low)</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5 (High)</option>
</select>
      <button type="submit" disabled={editMode} className="add-btn">
        <span>+</span> Add Task
      </button>
    </form>
  );
}


// p7 task.An uncontrolled input stores its own value inside the browser DOM rather than React state, so React cannot programmatically clear, reset, or prevent the input box from keeping invalid whitespace without directly manipulating DOM refs.