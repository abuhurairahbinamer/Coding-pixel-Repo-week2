import React, { useState } from 'react';
import './App.css';
import type { User } from './types/types';
import Avatar from './components/Avatar';
import Badge from './components/Badge';
import StatCard from './components/StatCard';
import UserList from './components/UserList';
import ProfileCard from './components/profileCard';
export const INITIAL_USERS: User[] = [
  { id: 1, name: "Ali",role:"admin" },
  { id: 2, name: "Ahmed",role:"member" },
  { id: 3, name: "Hassan",role:"admin" }
];

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);

  // Computations before return (No business logic in JSX)
  const totalUsers = users.length;
  const isPopulated = users.length > 0;
  const toggleButtonText = isPopulated ? "Toggle Empty State" : "Populate Sample Users";
  
  const handleToggleData = () => {
    setUsers((prevUsers) => (prevUsers.length > 0 ? [] : INITIAL_USERS));
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="header-title">Assignment 1 — Component & Props Drills</h1>
      </header>

      <main className="main-content">
        <Avatar 
          name="Abu Hurairah" 
          imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop" 
        />
        
        <div style={{ marginBottom: '24px', textAlign: 'center' }}>
          <Badge text="System Online" color="#3b82f6" />
        </div>

        <StatCard title="Total Users" value={totalUsers} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 className="section-heading" style={{ margin: 0 }}>Recent Users</h3>
          <button className="toggle-btn" onClick={handleToggleData}>
            {toggleButtonText}
          </button>
        </div>

        <UserList users={users} />
      </main>
      <div>
     <ProfileCard/>
      </div>
    </div>
  );
};

export default App;