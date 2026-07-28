import React from 'react';
import type { StatCardProps } from '../types/types';
import { format,formatWithDeeper } from '../classify/format';
 const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  const usersCountDeep=formatWithDeeper(8000);
  const usersCount=format(1234566);
  return(
  <div className="stat-card">
    <div>
      <p className="stat-title">{title}</p>
      <p className="stat-value">{value}</p>
      <p className="stat-value-p5task">P5 task : {usersCount}</p>
      <p className="stat-value-p5task">P5 task Deeper : {usersCountDeep}</p>
      

    </div>
  </div>
)};
export default StatCard;