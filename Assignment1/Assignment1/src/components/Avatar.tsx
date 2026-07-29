import React from 'react';
import type { AvatarProps } from '../types/types';

 const Avatar: React.FC<AvatarProps> = ({ name, imageUrl }) =>{
   const initials = (name: string): string => {
    //deeper
  if (!name.trim()) return "";
   //deeper
  const words = name.trim().split(" ");
  const first = words[0][0] || "";
  const second = words[1]?.[0] || "";

  return (first + second).toUpperCase();
};
const UpdatedName=initials(name);
const sample=initials("cher");
console.log("P1 task sample result for cher:",sample);
console.log("P1 task sample result for Abu Hurairah:",UpdatedName);
  return (
  <div className="profile-section">
    <div className="avatar-container">
      <div className="avatar-frame">
        <img src={imageUrl} alt={name} className="avatar-img" />
      </div>
      
    </div>
    <h2 className="user-name">{UpdatedName}</h2>
    <p className="user-role">Administrator</p>
   <div>
    <p>Task P1</p>
    <div>Result for Abu Hurairah is :{UpdatedName}</div>
    <div>Result for cher is : {sample}</div>
   </div>

  </div>
);
}

export default Avatar;