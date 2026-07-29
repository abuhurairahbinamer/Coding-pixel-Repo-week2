import React from 'react';
import type { UserListProps,User } from '../src/types/types';
import { groupBy } from '../src/classify/groupby';
import {classify} from '../src/classify/classify';
import { List } from '../src/components/ListCom';
const UserList: React.FC<UserListProps> = ({ users }) => {
 
 const info=classify(users);
  if (info.empty) {
    return <p className="empty-state-text">No users found</p>;
  }


   const keyFor = (user: User): string => {
  return `${user.id}-${user.name}`;
};



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



//deeper
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
  <h3>Grouped by Role P6 task</h3>


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