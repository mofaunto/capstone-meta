import chefs from "./icons_assets/Mario and Adrian A.jpg";
import interior from "./icons_assets/restaurant.jpg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <h4>Little Lemon</h4>
          <h5>Chicago</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            ut saepe, dignissimos, molestiae et eligendi obcaecati deleniti
            reiciendis cum nihil inventore placeat a quaerat maiores nostrum
            sit? Aspernatur, nihil asperiores.
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
