import React from "react";
import visa from "../../assets/cards/visa.png";
import master from "../../assets/cards/mastercard.svg";
import eye from "../../assets/icons/olho.svg";
import "./styles.css";

const cardtypes = {
  visa,
  master
};

export default function Card({ type, end, limit }) {
  const themes = {
    visa: { backgroundColor: "white", color: "#1a3d3d" },
    master: { backgroundColor: "#347474", color: "white" }
  };

  return (
    <div className="card-container">
      <div className="card" style={themes[type]}>
        <img className="cardtype" src={cardtypes[type]} alt="visa" />
        <img className="eye" src={eye} alt="mas olha la" />
        <div className="cardtext" style={themes[type]}>**** **** **** {end}</div>
      </div>

      <div className="card-limit">
        <div>
          <span className="limit-text">R${limit} </span>
          <span>de limite</span>
        </div>

        {/* <ProgressBar /> */}
      </div>
    </div>
  );
}
