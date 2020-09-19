import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <div>
        <label>
          <input type="radio" checked={props.cleanHogs} onClick={props.handleFilter} />Show Clean Hogs Only
      </label>
        <span></span>  <span></span>
        <label>
          <select value={props.sortBy} onChange={props.handleSort}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Nav;
