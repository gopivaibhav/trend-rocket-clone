import React from "react";
import "../styles/sidebarStyles.css";
import logo from "../assets/TrendRocket.svg";
import trend from "../assets/Treanding-icon.svg";
import discover from "../assets/DiscoverBrands.svg";
import ads from "../assets/Ads.svg";
import products from "../assets/Products.svg";
import creative from "../assets/CreativeCenter.svg";
import support from "../assets/Support.svg";
import settings from "../assets/Settings.svg";
import users from '../assets/User.svg'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={logo} alt="logo" className="rocket" />
        <img src={trend} alt="trend.." />
        <img src={discover} alt="discover.." />
        <img src={ads} alt="ads.." />
        <img src={products} alt="products" />
        <img src={creative} alt="creative.." />
      </div>
      <div className="sidebar_bottom">
        <img src={support} alt="support" />
        <img src={settings} alt="settings" />
        <img src={users} alt="user" className="sidebar_user" />
      </div>
    </div>
  );
}
