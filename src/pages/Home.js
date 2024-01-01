import React from "react";
import HeaderSection from "../components/HeaderSection";
import OverViewCard from "../components/OverViewCard";
import GraphsContainer from "../components/GraphsContainer";
import Navbar from "../components/Navbar";
import DatesContainer from "../components/DatesContainer";
import Sidebar from "../components/Sidebar";
import '../styles/homeStyles.css'

export default function Home() {
  return (
    <div className="home">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="home_rightpart">
        <HeaderSection />
        <Navbar />
        <OverViewCard />
        <DatesContainer />
        <GraphsContainer />
      </div>
    </div>
  );
}
