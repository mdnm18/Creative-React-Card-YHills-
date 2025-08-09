// src/App.jsx

import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  // State for users, with initial data loaded from localStorage
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // State for theme, with preference loaded from localStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Effect to save users to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Effect to save theme to localStorage and update body class
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const addUser = (newUser) => {
    setUsers([newUser, ...users]); // Add new users to the top of the list
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header>
        <h1>Contactify</h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>
      <main>
        <UserForm addUser={addUser} />
        <UserList users={users} deleteUser={deleteUser} />
      </main>
    </div>
  );
}

export default App;