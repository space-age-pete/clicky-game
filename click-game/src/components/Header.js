import React from "react";

const Header = props => (
  <div>
    <nav className="navbar navbar-dark">
      <h3>Score: {props.score} </h3>
      <h3>High Score: {props.hiScore}</h3>
    </nav>
  </div>
);

export default Header;
