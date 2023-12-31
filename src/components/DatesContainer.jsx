import React, { useEffect, useRef } from "react";
import calender from '../assets/calender.svg';
import '../styles/datesStyles.css';

export default function DatesContainer() {
  const refArray = useRef([]);
  const prevSelectedItemRef = useRef(null);

  const handleItemClick = (clickedItemRef) => {
    if (prevSelectedItemRef.current) {
      prevSelectedItemRef.current.style.backgroundColor = "";
    }

    clickedItemRef.style.backgroundColor = "rgba(29, 41, 57, 0.08)";
    prevSelectedItemRef.current = clickedItemRef;
  };

  const dateOptions = [
    "365 Days",
    "90 Days",
    "60 Days",
    "30 Days",
  ];

  useEffect(() => {
    if (refArray.current.length > 0) {
      handleItemClick(refArray.current[3]); // Set initial selection to the first item
    }
  }, []); // Run only once on initial render

  return (
    <div className="dates_container">
      <ul className="dates_list">
        {dateOptions.map((item, index) => (
          <li
            ref={(element) => (refArray.current[index] = element)}
            key={index}
            onClick={() => handleItemClick(refArray.current[index])}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="dates_rightpart">
        <img src={calender} alt="calender" />
        <p>December 01, 2023 - December 31, 2023</p>
      </div>
    </div>
  );
}
