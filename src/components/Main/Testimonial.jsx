import ratings from "../../icons_assets/rating.png";
import profile1 from "../../icons_assets/profile1.jpg";
import profile2 from "../../icons_assets/profile2.jpg";
import profile3 from "../../icons_assets/profile3.jpg";
import profile4 from "../../icons_assets/profile4.jpg";
import Profile from "../Profile/Profile";
import "./Testimonial.css";

const Testimonial = () => {
  const reviews = [
    {
      id: 0,
      image: profile1,
      rating: ratings,
      title: "Katie",
      comment: "Their salad was the best one I tried in Chicago",
    },
    {
      id: 1,
      image: profile2,
      rating: ratings,
      title: "Hector",
      comment: "Great location and great customer service!",
    },
    {
      id: 2,
      image: profile3,
      rating: ratings,
      title: "Marissa",
      comment: "My compliments to the chefs!",
    },
    {
      id: 3,
      image: profile4,
      rating: ratings,
      title: "John",
      comment: "Wish there were more locations, great food",
    },
  ];

  return (
    <div className="review-container">
      <div className="review-wrapper">
        <div className="review-top">
          <h3 className="review-top-title">Testimonials</h3>
        </div>

        <article className="review-bottom">
          {reviews.map((item) => {
            const { rating, image, title, comment, id } = item;
            return (
              <Profile
                key={id}
                rating={rating}
                image={image}
                title={title}
                comment={comment}
              ></Profile>
            );
          })}
        </article>
      </div>
    </div>
  );
};

export default Testimonial;
