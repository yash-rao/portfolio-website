import React from 'react';
import "../styles/darkModeToggle.css";

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <span className="theme__toggle-wrap">
      <input
        id="theme"
        className="theme__toggle"
        type="checkbox"
        role="switch"
        name="theme"
        value="dark"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <span className="theme__fill"></span>
      <span className="theme__icon">
        <span className="theme__icon-part"></span>
        <span className="theme__icon-part"></span>
        <span className="theme__icon-part"></span>
        <span className="theme__icon-part"></span>
        <span className="theme__icon-part"></span>
        <span className="theme__icon-part"></span>
        <span className="theme__icon-part"></span>
        <span className="theme__icon-part"></span>
        <span className="theme__icon-part"></span>
      </span>
    </span>
  );
};

export default DarkModeToggle;
