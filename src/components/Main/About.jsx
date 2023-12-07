import chefs from "../../icons_assets/Mario and Adrian A.jpg";
import interior from "../../icons_assets/restaurant.jpg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h1>Little Lemon</h1>
          <p>
            We at Little Lemon, try our best to bring the authentic
            Mediterranian cuisine since 2010. Our Chefs Mario and Adrian are
            ready to serve any of your culinary needs, so come meet them in our
            cozy restaurant and feel the taste of the Mediterranian!
          </p>
        </div>

        <div className="owner">
          <img src={chefs} alt="Chefs" id="chefs" />
          <img src={interior} alt="Interior of Restaurant" id="interior" />
        </div>
      </div>
    </>
  );
};

export default About;
