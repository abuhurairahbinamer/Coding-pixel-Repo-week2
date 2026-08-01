import React from 'react';
import type { UserListProps,User } from '../types/types';
import { groupBy } from '../classify/groupby';
import {classify} from '../classify/classify';
import { List } from './ListCom';
const UserList: React.FC<UserListProps> = ({ users }) => {
 
 const info=classify(users);
  if (info.empty) {
    return <p className="empty-state-text">No users found</p>;
  }

console.log("p4 task check is empty :",classify([]).empty);
console.log("p4 task  check count :",classify([{id:1,name:"ahmed",role:"admin"}]).count);
console.log("p4 task check label :",classify([{id:1,name:"ahmed",role:"member"}]).label);
const check=Number(classify([]).empty===true);
const check1=classify([{id:1,name:"ahmed",role:"admin"}]).count;
const check2=classify([{id:1,name:"ahmed",role:"admin"}]).label;

   const keyFor = (user: User): string => {
  return `${user.id}-${user.name}`;
};

const P6result=groupBy(users,o=>o.role);
// const P6result=groupBy(users,o=>o.name);
console.log("p6 task",P6result.admin.length===2);


const originalKeys = users.map(user => keyFor(user));
console.log("P3 task Original keys:", originalKeys);

const reversedUsers = [...users].reverse();
const reversedKeys = reversedUsers.map(user => keyFor(user));
console.log("P3 task Reversed keys:", reversedKeys);

  const processedUsers = users.map((user) => {
    const isFirstUser = user.id === 1;
    const initialStyleClass = isFirstUser ? 'initial-ali' : 'initial-ahmed';
    const firstLetter = user.name.charAt(0);

    return {
      ...user,
      key: keyFor(user),
      initialStyleClass,
      firstLetter
    };
  });


// const generateKey=(user:User,idx:number)=>user.id?user.id.toString():`${user.name}-${user.role}-${idx}`
const generateKey = <
  T extends { id: number; name: string; role: string }
>(
  user: T,
  idx: number
) =>
  user.id ? user.id.toString() : `${user.name}-${user.role}-${idx}`;

  return (
    <div>
    <div className="user-list-card">
      {processedUsers.map((user) => {
      
        return (
          <div key={user.key} className="user-item">
            <div className={`user-initial ${user.initialStyleClass}`}>
              {user.firstLetter}
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 700 }}>{user.name}</p>
            </div>
          </div>
        );
      })}

    </div>
    <div>
     <p>Task P3</p>
     <p>
      <div>Original Keys</div>
     {originalKeys.map((key)=>(
      <p key={key}>{key}</p>
     ))}
     </p>
      <p>
      <div>Reversed Keys</div>
     {reversedKeys.map((key)=>(
      <p key={key}>{key}</p>
     ))}
     </p>
    </div>
    <div>
      <p>Task P4</p>
      <p>result for classify([]).empty===true is: {check}</p>
      <p>{`result for classify([{id:1,name:"ahmed",role:"admin"}]).count) is:`} {check1}</p>
      <p>{`result for classify([{id:1,name:"ahmed",role:"admin"}]).label) is:`} {check2}</p>
      
    </div>
   <div>
  <h3>Grouped by Role P6 task</h3>

  {Object.entries(P6result).map(([role, users]) => (
    <div key={role}>
      <h4>{role}</h4>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  ))}
</div>
<div>
<div>P8 task</div>
<List<User> items={users} getKey={generateKey<User>} renderItem={
  (user)=>(
   <div>
    <strong>{user.name}</strong> - {user.role}
    </div>
  )
}/>
</div>
    </div>
  );
};

export default UserList;