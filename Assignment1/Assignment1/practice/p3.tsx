// P1 functionality is applied in Assignment1 project,the purpose of creating the practice file is jsut for sake of conveience
import React from 'react';
import type { UserListProps,User } from '../types/types';

const UserList: React.FC<UserListProps> = ({ users }) => {
  if (users.length === 0) {
    return <p className="empty-state-text">No users found</p>;
  }
  //deeper
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