import React from "react";
import FacebookLikes from "./FacebookLikes";
import upArrow from "../assets/uparrow.svg";
import "../styles/graphsStyles.css";

export default function GraphsContainer() {
  return (
    <div className="graphs_container">
      <div className="graphs_card">
        <h2>Facebook Likes</h2>
        <div className="graph_container">
          <div className="graphs_leftpart">
            <h2>5.1k</h2>
            <p>
              <img src={upArrow} alt="uparrow" />
              <span>0.51%</span>change
            </p>
          </div>
          <div className="graphs_rightpart">
            <FacebookLikes />
          </div>
        </div>
      </div>
      <div className="graphs_card">
        <h2>Instagram Followers</h2>
        <div className="graph_container">
          <div className="graphs_leftpart">
            <h2>10.8k</h2>
            <p>
              <img src={upArrow} alt="uparrow" />
              <span>0.11%</span>change
            </p>
          </div>
          <div className="graphs_rightpart">
            <FacebookLikes />
          </div>
        </div>
      </div>
      <div className="graphs_card">
        <h2>Website Traffic</h2>
        <div className="graph_container">
          <div className="graphs_leftpart">
            <h2>59.5k</h2>
            <p>
              <img src={upArrow} alt="uparrow" />
              <span>12.26%</span>change
            </p>
          </div>
          <div className="graphs_rightpart">
            <FacebookLikes />
          </div>
        </div>
      </div>
    </div>
  );
}
