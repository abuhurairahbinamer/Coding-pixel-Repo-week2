import React from 'react';
import type { AvatarProps } from '../types/types';

 const Avatar: React.FC<AvatarProps> = ({ name, imageUrl }) => (
  <div className="profile-section">
    <div className="avatar-container">
      <div className="avatar-frame">
        <img src={imageUrl} alt={name} className="avatar-img" />
      </div>
      
    </div>
    <h2 className="user-name">{name}</h2>
    <p className="user-role">Administrator</p>
  </div>
);

export default Avatar;