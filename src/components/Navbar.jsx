import React, { useRef, useEffect } from "react";
import "../styles/navbarStyles.css";

export default function Navbar() {
  const refArray = useRef([]);
  const prevSelectedItemRef = useRef(null);

  const handleItemClick = (clickedItemRef) => {
    if (prevSelectedItemRef.current) {
      prevSelectedItemRef.current.style.borderBottom = "";
    }

    clickedItemRef.style.borderBottom = "2.5px solid rgb(122, 90, 248)";
    prevSelectedItemRef.current = clickedItemRef;
  };

  const navItems = [
    "Overview",
    "Trend Viability",
    "Review Tracker",
    "Social",
    "Google Ads",
    "FB Ads",
    "Traffic And Revenue",
    "Products",
  ];

  useEffect(() => {
    if (refArray.current.length > 0) {
      handleItemClick(refArray.current[0]); // Set initial selection to the first item
    }
  }, []);

  return (
    <div className="nav_container">
      <ul className="nav_list">
        {navItems.map((item, index) => (
          <li
            ref={(element) => (refArray.current[index] = element)}
            key={index}
            onClick={() => handleItemClick(refArray.current[index])}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="line"></div>
    </div>
  );
}
