export type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
};

export type Filter = 'all' | 'active' | 'completed'; 

export type editFilter= true | false;
//filter edit is added for task P6
export type editData={
  id:string;
  editMode:editFilter;
}



export type Action =
  | { type: "add"; payload: { title: string } }
  | { type: "toggle"; payload: { id: string } }
  | { type: "delete"; payload: { id: string } }
  | { type: "edit"; payload: { id: string,next: string} };