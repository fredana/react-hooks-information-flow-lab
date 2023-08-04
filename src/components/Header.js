import React from "react";

function Header({ darkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
