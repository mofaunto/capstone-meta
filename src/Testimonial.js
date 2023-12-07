import ratings from "./icons_assets/rating.png";
import profile1 from "./icons_assets/profile1.jpg";
import profile2 from "./icons_assets/profile2.jpg";
import profile3 from "./icons_assets/profile3.jpg";
import profile4 from "./icons_assets/profile4.jpg";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial">
        <div className="testimonial-head">
          <h1>Testimonials</h1>
        </div>

        <div className="review-container">
          <div className="review">
            <img src={profile1} alt="Content Customer" id="profile" />
            <img src={ratings} alt="ratings" id="rating" />
            <h2>Katie</h2>
            <p>Their salad was the best one I tried in Chicago</p>
          </div>
          <div className="review">
            <img src={profile2} alt="Content Customer" id="profile" />
            <img src={ratings} alt="ratings" id="rating" />
            <h2>Hector</h2>
            <p>Great location and great customer service!</p>
          </div>
          <div className="review">
            <img src={profile3} alt="Content Customer" id="profile" />
            <img src={ratings} alt="ratings" id="rating" />
            <h2>Marissa</h2>
            <p>My compliments to the chefs!</p>
          </div>
          <div className="review">
            <img src={profile4} alt="Content Customer" id="profile" />
            <img src={ratings} alt="ratings" id="rating" />
            <h2>John</h2>
            <p>Wish there were more locations, great food</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
