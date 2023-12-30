import React from "react";
import like from "../assets/like.svg";
import redirect from "../assets/redirect.svg";
// import backgroundImage from "../assets/pageCoverPhoto_652070498243383.jpg";
import profiePhoto from "../assets/profilePhoto_652070498243383.jpg";
import "../styles/headerSectionStyles.css";

export default function () {
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
        </div>
      </div>
    </div>
  );
}
