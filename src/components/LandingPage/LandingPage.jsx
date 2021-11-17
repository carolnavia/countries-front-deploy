import "./LandingPage.css";
import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing">
      <h1 className="wander"> Wanderlust</h1>
      <Link className="linkplay" to="/home">
        <button className="botonPlay"> Ingresar </button>
      </Link>
    </div>
  );
}
