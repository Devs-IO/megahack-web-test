import React from "react";
import "./styles.css";
import visa from "../../assets/cards/visa.png";
import master from "../../assets/cards/mastercard.svg";
import eye from "../../assets/icons/olho.svg";

const cardtypes = {
  visa,
  master
};
export default function Card({ type, end, limit }) {
  return (
    <div className="card-container">
      <div className="card">
        <img className="cardtype" src={cardtypes[type]} alt="visa" />
        <img className="eye" src={eye} alt="mas olha la" />
        <div className="cardtext">**** **** **** {end}</div>
      </div>

      <div className="card-limit">
        <span>tem R${limit} aqui</span>
        {/* <progress value="80" max="100"/> */}
      </div>
    </div>
  );
}
