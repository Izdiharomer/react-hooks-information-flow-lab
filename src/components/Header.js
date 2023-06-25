import React, { useState } from 'react';

const Header = ({ onDarkModeClick }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
    onDarkModeClick(!isDarkMode);
  };

  return (
    <header className={isDarkMode ? 'dark' : 'light'}>
      <h1>My Website</h1>
      <button onClick={handleDarkModeClick}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
