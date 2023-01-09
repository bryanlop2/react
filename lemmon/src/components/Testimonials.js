import React from "react";
import feature1 from "../assets/img/feature1.png";
import feature2 from "../assets/img/feature2.png";
import feature3 from "../assets/img/feature3.png";
import feature4 from "../assets/img/feature4.png";
import ratings from "../assets/img/ratings.png";

function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>
        <div className="review-container">
          <div className="review">
            <img id="profile" src={feature1} alt="Customer review" />
            <h2>Mario B.</h2>
            <img id="rating" src={ratings} alt="ratings" />
            <p>Love the bruschetta.</p>
          </div>

          <div className="review">
            <img id="profile" src={feature2} alt="Customer Review" />
            <h2>Luisa L.</h2>
            <img id="rating" src={ratings} alt="ratings" />
            <p>A must eat option.</p>
          </div>

          <div className="review">
            <img id="profile" src={feature3} alt="Customer Review" />
            <h2>Daniel V.</h2>
            <img id="rating" src={ratings} alt="ratings" />
            <p>Looking for a dessert? This is your place.</p>
          </div>

          <div className="review">
            <img id="profile" src={feature4} alt="Customer Review" />
            <h2>Sofia B.</h2>
            <img id="rating" src={ratings} alt="ratings" />
            <p>Fast and delicious food.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
