import React from 'react';
import type { BadgeProps } from '../types/types';

 const Badge: React.FC<BadgeProps> = ({ text, color }) => (
  <span 
    className="badge"
    style={{ 
      color: color, 
      backgroundColor: `${color}15`, 
      borderColor: `${color}30` 
    }}
  >
    {text}
  </span>
);

export default Badge;