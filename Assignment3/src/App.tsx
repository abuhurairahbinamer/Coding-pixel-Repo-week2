// import { useState } from 'react';
import type { Task, Filter,editData,Action } from './types/types';
import TaskInput from './component/TaskInput';
import TaskList from './component/TaskList';
import FilterBar from './component/FilterBar';
import {visible} from '../practiceForAssignment2/p4';
import { preds } from '../practiceForAssignment2/p4';
import {counts} from '../practiceForAssignment2/p5';
import {useLocalStorage} from '../practiceForAssignment2/p8';
import './App.css';
import '../PracitceForAssignment3/P1'
import '../PracitceForAssignment3/p7'
import '../PracitceForAssignment3/p8'
import {taskReducer} from '../practiceForAssignment2/p9'
function App() {
  // const [tasks, setTasks] = useState<Task[]>([]);
  // const [filter, setFilter] = useState<Filter >('all');
  // const [callback,setCallBack]=useState<string>("")
  // const [edit,setEdit]=useState<editData>({id:"",editMode:false})
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks",[]);
  // const [tasks, dispatch] = useReducer(taskReducer, []);
  const [filter, setFilter] = useLocalStorage<Filter >("filter",'all');
  const [callback,setCallBack]=useLocalStorage<string>("callback","");
  const [edit,setEdit]=useLocalStorage<editData>("edit",{id:"",editMode:false})
  const editMode=edit.editMode
   const dispatch = (action: Action) => {
    setTasks(prevTasks => taskReducer(prevTasks, action));
  };
  //  Add task
  const addTask = (title: string,priority:number) => {
    const trimmed = title.trim();
    if (!trimmed) return;

    // const newTask: Task = {
    //   id: crypto.randomUUID(),
    //   title: trimmed,
    //   completed: false,
    //   createdAt: Date.now(),
    // };

    // setTasks(prev => [...prev, newTask]);
     dispatch({
    type: 'add',
    payload: { title: trimmed,priority:priority }
  });
  };



  //  Toggle
  const toggleTask = (id: string) => {
    // setTasks(prev =>
    //   prev.map(t =>
    //     t.id === id ? { ...t, completed: !t.completed } : t
    //   )
    // );
    dispatch({
      type: 'toggle',
    payload: { id: id }
    })
  };

  //  Delete
  const deleteTask = (id: string) => {
   
    dispatch({
      type: 'delete',
    payload: { id: id }
    })
  };

  //  Filtered tasks
  //p4 with deeper
  const filteredTasks = visible(tasks,filter,preds)

  //  Counts 
  // p5 with deeper
  const countResult=counts(tasks);
  const total = countResult.total;
  const completed = countResult.completed;
  const active = total - completed;

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>⚡ Task Board</h1>
        <p>Stay organized and boost your productivity</p>
      </header>

      <TaskInput onAdd={addTask} edit={edit} setEdit={setEdit} tasks={tasks} callBack={setCallBack} />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        total={total}
        active={active}
        completed={completed}
        edit={editMode}
        dispatch={dispatch}
      />

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        showEditScreen={setEdit}
        edit={edit}
        setTasks={setTasks}
        callback={callback}
        dispatch={dispatch}
      />

    </div>
  );
}

export default App;