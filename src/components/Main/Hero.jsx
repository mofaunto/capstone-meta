import React from "react";
import { NavLink } from "react-router-dom";
import heroShot from "../../icons_assets/restauranfood.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-container global-max-width">
          <div className="hero-left">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Welcome to the best Mediterranian restaurant in all of Chicago,
              where we serve authentic & tradional recipes with new twists
            </p>

            <NavLink to="/reservation">
              <button className="reserve-btn">Reserve a Table</button>
            </NavLink>
          </div>
          <div className="hero-right">
            <div className="hero-image">
              <img src={heroShot} alt="Featured Dish" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
