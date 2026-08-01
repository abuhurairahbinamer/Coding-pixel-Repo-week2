export type User = {
  id: number;
  name: string;
  role:string;
};

export type BadgeProps = {
  text: string;
  color: string;
};

export type AvatarProps = {
  name: string;
  imageUrl: string;
};

export type StatCardProps = {
  title: string;
  value: number;
};

export type UserListProps = {
  users: User[];
};