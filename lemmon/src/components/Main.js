import React from "react";
import { Link } from "react-router-dom";
import pizza from "../assets/img/pizza.png";

function Main() {
  return (
    <main className="main">
      <div className="main-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>we are a familly and the description</p>
        <Link to="/bookingPage">
          <button id="button" to="BookingPage">
            Reserve a Table
          </button>
        </Link>
      </div>

      <div className="featured">
        <img src={pizza} alt="Pizza" />
      </div>
    </main>
  );
}

export default Main;
