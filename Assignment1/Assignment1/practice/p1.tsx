// P1 functionality is applied in Assignment1 project,the purpose of creating the practice file is jsut for sake of conveience
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
  </div>
);
}

export default Avatar;