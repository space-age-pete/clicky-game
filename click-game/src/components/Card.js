import React from "react";

const Card = props => (
  <div>
    <div className="card" style={props.style} onClick={props.onClick} id={props.id}>
      {/* <img className="card-img-top" src={props.src} alt="Card cap" /> */}
    </div>
  </div>
);

export default Card;
