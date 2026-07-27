import React from 'react';
import type { StatCardProps } from '../types/types';

 const StatCard: React.FC<StatCardProps> = ({ title, value }) => (
  <div className="stat-card">
    <div>
      <p className="stat-title">{title}</p>
      <p className="stat-value">{value}</p>
    </div>
  </div>
);
export default StatCard;