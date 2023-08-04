// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   function onDarkModeClick() {
//     setIsDarkMode((isDarkMode) => !isDarkMode);
//   }

//   return (
//     <div className={"App " + (isDarkMode ? "dark" : "light")}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={onDarkModeClick}>
//           {isDarkMode ? "Dark" : "Light"} Mode
//         </button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;

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

