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
            <img src={ratings} alt="ratings" id="rating" />
            <img src={profile1} alt="Content Customer" id="profile" />
            <h2>Customer name</h2>
            <p>Great place</p>
          </div>
          <div className="review">
            <img src={ratings} alt="ratings" id="rating" />
            <img src={profile2} alt="Content Customer" id="profile" />
            <h2>Customer name</h2>
            <p>Great place</p>
          </div>
          <div className="review">
            <img src={ratings} alt="ratings" id="rating" />
            <img src={profile3} alt="Content Customer" id="profile" />
            <h2>Customer name</h2>
            <p>Great place</p>
          </div>
          <div className="review">
            <img src={ratings} alt="ratings" id="rating" />
            <img src={profile4} alt="Content Customer" id="profile" />
            <h2>Customer name</h2>
            <p>Great place</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
