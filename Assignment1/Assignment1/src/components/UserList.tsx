import React from 'react';
import type { UserListProps } from '../types/types';

const UserList: React.FC<UserListProps> = ({ users }) => {
  if (users.length === 0) {
    return <p className="empty-state-text">No users found</p>;
  }
  
  return (
    <div className="user-list-card">
      {users.map((user) => {
        const isFirstUser = user.id === 1;
        const initialStyleClass = isFirstUser ? 'initial-ali' : 'initial-ahmed';
        const firstLetter = user.name.charAt(0);

        return (
          <div key={user.id} className="user-item">
            <div className={`user-initial ${initialStyleClass}`}>
              {firstLetter}
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