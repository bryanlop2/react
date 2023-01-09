import React from "react";
import man from "../assets/img/owners.jpg";
import woman from "../assets/img/oweners2.jpg";

function About() {
  return (
    <>
      <div id="about" className="about">
        <div className="about-content">
          <h4>Little Lemon</h4>
          <h5>Chicago</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            in harum magnam provident cupiditate, blanditiis et iusto voluptate
            itaque distinctio id error, labore officiis repudiandae sapiente vel
            deleniti? Reiciendis, eum?
          </p>
        </div>
        <div className="owners">
          <img id="male" src={man} alt="Male Owner" />
          <img
            id="male"
            src={woman}
            alt="Female Owner"
          />
        </div>
      </div>
    </>
  );
}

export default About;
