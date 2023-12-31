import React, { useEffect, useRef, useState } from 'react';
import like from '../assets/like.svg';
import redirect from '../assets/redirect.svg';
import profiePhoto from '../assets/profilePhoto_652070498243383.jpg';
import '../styles/headerSectionStyles.css';
import threedots from '../assets/threedots.svg';

export default function HeaderSection() {
  const [isVisible, setIsVisible] = useState(false);
  const dialogRef = useRef(null);

  const handleClick = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="header_container">
      <div className="background_image"></div>
      <div className="header_collection">
        <img src={profiePhoto} alt="logo" className="logo" />
        <div className="header_content">
          <div className="leftPart">
            <h1>Modern Blaze</h1>
            <p>Fireplace Store</p>
          </div>
          <div className="rightPart">
            <button>
              <img src={like} alt="like"></img>Track
            </button>
            <button>
              <img src={redirect} alt="redirect" />
              Website
            </button>
          </div>
          <div className="dots" onClick={handleClick}>
            <img src={threedots} alt="dots" />
            {isVisible && (
              <ul ref={dialogRef} className="dropdown_menu">
                <li>
                  <button>
                    <img src={like} alt="like"></img>Track
                  </button>
                </li>
                <li>
                  <button>
                    <img src={redirect} alt="redirect" />
                    Website
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
