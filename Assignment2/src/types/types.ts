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