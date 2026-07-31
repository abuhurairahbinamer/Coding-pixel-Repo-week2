import type { Task,Action } from "../src/types/types";
import { editTitle } from "./p6";
import { removeAt } from "./P3";
export function taskReducer(state: Task[], action: Action): Task[] {
  if (action.type === "add") {
    return [
      ...state,
      {
        id: crypto.randomUUID(),
        title: action.payload.title,
        completed: false,
        createdAt: Date.now(),
        priority:action.payload.priority
      },
    ];
  } 
  
  else if (action.type === "toggle") {
    return state.map(task =>
      task.id === action.payload.id
        ? { ...task, completed: !task.completed }
        : task
    );
  } 
  
  else if (action.type === "delete") {
     // p3 with deeper
   return removeAt(state,action.payload.id);
  } 
  
  else if (action.type === "edit") {
    // return state.map(task =>
    //   task.id === action.payload.id
    //     ? { ...task, title: action.payload.next }
    //     : task
    // );
    


//p6 task with deeper
    return editTitle(state,action.payload.id,action.payload.next)
  } 
  
  else if (action.type === "clear_completed") {
    return state.filter(task => !task.completed);
  } 
  
  else {
    return state;
  }
}


//p9 task deeper 
//every action including add,toggle,edit,delete needs payload
//minimal payload for each is:

// ADD_TASK → { title }
// TOGGLE_TASK → { id }
// DELETE_TASK → { id }
// EDIT_TASK → { id, text }
