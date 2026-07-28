import type {User} from '../types/types';

export const classify = (users: User[]) => {
  const count = users.length;

  return {
    empty: count === 0,
    count,
    label: `${count} user${count === 1 ? "" : "s"}` // deeper 
  };
};