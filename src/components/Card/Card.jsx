import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ name, continent, flag, id }) {
  return (
    <Link to={`/country/${id}`}>
      <div className="cards">
        <div className="card">
          <h3>{name}</h3>
          <h5>{continent}</h5>
          <img
            src={flag}
            alt="Imag not found"
            width="200px"
            height="80px"
            className="flag"
          />
        </div>
      </div>
    </Link>
  );
}
