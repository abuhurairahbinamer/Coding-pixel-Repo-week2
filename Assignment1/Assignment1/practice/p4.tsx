// P4 functionality is applied in Assignment1 project,the purpose of creating the practice file is jsut for sake of conveience
import React from 'react';
import type { UserListProps,User } from '../src/types/types';

const UserList: React.FC<UserListProps> = ({ users }) => {
  const classify = (users: User[]) => {
  const count = users.length;

  return {
    empty: count === 0,
    count,
    label: `${count} user${count === 1 ? "" : "s"}` // deeper 
  };
};
 const info=classify(users);
  if (info.empty) {
    return <p className="empty-state-text">No users found</p>;
  }

console.log("p4 task check is empty :",classify([]).empty)
console.log("p4 task  check count :",classify([{id:1,name:"ahmed",role:"admin"}]).count)
console.log("p4 task check label :",classify([{id:1,name:"ahmed",role:"member"}]).label)

   const keyFor = (user: User): string => {
  return `${user.id}-${user.name}`;
};


const originalKeys = users.map(user => keyFor(user));


const reversedUsers = [...users].reverse();
const reversedKeys = reversedUsers.map(user => keyFor(user));


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
  );
};

export default UserList;