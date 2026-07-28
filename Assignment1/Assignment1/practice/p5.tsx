// P5 functionality is applied in Assignment1 project,the purpose of creating the practice file is jsut for sake of conveience

import React from 'react';
import type { StatCardProps } from '../src/types/types';


 const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
   const format=(n: number): string=> {
  return n.toLocaleString();
}
//deeper
 const formatWithDeeper=(n: number): string=>{
  if (n > 999) return "999+";
  return n.toLocaleString();
}  
  const usersCountDeep=formatWithDeeper(8000);
  const usersCount=format(1234566);
  return(
  <div className="stat-card">
    <div>
      <p className="stat-title">{title}</p>
      <p className="stat-value">{value}</p>
      <p className="stat-value-p5task">P5 task : {usersCount}</p>
      <p className="stat-value-p5task">P4 task Deeper : {usersCountDeep}</p>
      

    </div>
  </div>
)};
export default StatCard;