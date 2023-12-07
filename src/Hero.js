import heroShot from "./icons_assets/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Welcome to the best Mediterranian restaurant in all of Chicago,
            where we serve authentic & tradional recipes with new twists
          </p>

          <Link to="/reservations">
            <button id="button" to="/reservations">
              Reserve a Table
            </button>
          </Link>
        </div>

        <div className="heroshot">
          <img src={heroShot} alt="Featured Dish" />
        </div>
      </div>
    </>
  );
};

export default Hero;
