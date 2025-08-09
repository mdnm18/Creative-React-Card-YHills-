// src/components/ThemeToggle.jsx

import React from 'react';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggle;