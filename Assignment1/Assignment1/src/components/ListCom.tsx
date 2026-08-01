type ListProps<T>={
    items:T[];
    getKey:(item:T,idx:number)=>string;
    renderItem:(item:T)=> React.ReactNode;
}
export const List=<T,>({items,getKey,renderItem}:ListProps<T>)=>{
  return (
    <div>
      {items.map((item,idx) => (
        <div key={getKey(item,idx)}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}