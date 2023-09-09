import React, { useState } from "react";
import "./Productlist.css"; // Import your custom CSS file for styling

const CardMenu = () => {
  // State to track whether the menu card is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu card
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card-menu-container">
      <button onClick={toggleMenu} className="menu-button">
        Open Menu
      </button>

      {isOpen && (
        <div className="menu-card">
          {/* Add content for your menu card */}
          <p>Menu Content</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CardMenu;
