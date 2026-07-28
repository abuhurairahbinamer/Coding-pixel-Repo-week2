// P6 functionality is applied in Assignment1 project,the purpose of creating the practice file is jsut for sake of conveience
import React from 'react';
import type { UserListProps,User } from '../src/types/types';
import { groupBy } from '../src/classify/groupby';

const UserList: React.FC<UserListProps> = ({ users }) => {
 
  if (users.length===0) {
    return <p className="empty-state-text">No users found</p>;
  }
//P6 task done deeper
 const groupBy=<T, K extends string | number>(
  arr: T[],
  keyFn: (item: T) => K
): Record<K, T[]>=> {
  return arr.reduce((acc, item) => {
    const key = keyFn(item);
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<K, T[]>);
}

   const keyFor = (user: User): string => {
  return `${user.id}-${user.name}`;
};

const P6result=groupBy(users,o=>o.role);
// const P6result=groupBy(users,o=>o.name);
console.log("p6 task",P6result.admin.length===2);



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
    </div>
  );
};

export default UserList;