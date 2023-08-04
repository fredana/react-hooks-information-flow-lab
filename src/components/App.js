import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Filter from "./Filter";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleToggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <Header darkMode={darkMode} onDarkModeClick={handleToggleDarkMode} />
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <ShoppingList items={itemData} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;

