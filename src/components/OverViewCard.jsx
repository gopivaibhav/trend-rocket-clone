import React from "react";
import globe from "../assets/globe.svg";
import arrow from "../assets/sideArrow.svg";
import facebook from "../assets/facebook.svg";
import shopify from "../assets/Shopify.svg";
import instagram from "../assets/instagram.svg";
import Ads from "../assets/adlibrary.svg";
import "../styles/overViewStyles.css";
import star from "../assets/star.svg";
import starlogo from "../assets/starlogo.svg";
import RadialChart from "./RadialBar";
import RadialChart2 from "./RadialBar2";

import questionMark from "../assets/question.svg";

export default function OverViewCard() {
  return (
    <div className="overview_container">
      <h1>Overview</h1>
      <p>
        Modern Blaze offers the biggest collection of stylish, unique
        "No-Chimney" Fireplaces. Visit our online website
      </p>
      <div className="overview_cards">
        <div className="icons">
          <ul className="icons_list">
            <li>
              <div>
                <img src={globe} alt="globe" />
                <span>Website</span>
              </div>
              <img src={arrow} alt="arrow" />
            </li>
            <li>
              <div>
                <img src={facebook} alt="facebook" />
                <span>Facebook</span>
              </div>
              <img src={arrow} alt="arrow" />
            </li>
            <li>
              <div>
                <img src={shopify} alt="shopify" />
                <span>Shopify</span>
              </div>
              <img src={arrow} alt="arrow" />
            </li>
            <li>
              <div>
                <img src={instagram} alt="instagram" />
                <span>Instagram</span>
              </div>
              <img src={arrow} alt="arrow" />
            </li>
            <li>
              <div>
                <img src={Ads} alt="ads" />
                <span>Ads Library</span>
              </div>
              <img src={arrow} alt="arrow" />
            </li>
          </ul>
        </div>
        <div className="stars">
          <h2>No Score</h2>
          <div className="whiteStars">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <img src={starlogo} alt="starlogo" />
        </div>
        <div className="graph1">
          <div className="graph1_heading">
            <h3>Revenue Score</h3>
            <img src={questionMark} alt="questionmark" />
          </div>
          <RadialChart />
        </div>
        <div className="garph2">
          <div className="graph2_heading">
            <h3>Scaling Score</h3>
            <img src={questionMark} alt="questionmark" />
          </div>
          <RadialChart2 />
        </div>
      </div>
    </div>
  );
}
