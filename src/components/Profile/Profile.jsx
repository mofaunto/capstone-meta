import "./Profile.css";

const Profile = ({ rating, image, title, comment }) => {
  return (
    <article className="profile-container">
      <div className="profile-img">
        <img src={image} alt="Reviewer" />
        <img src={rating} alt="Rating stars" className="profile-rating" />
      </div>
      <div className="profile-title">
        <h3>{title}</h3>
      </div>
      <div className="profile-comment">
        <p>{comment}</p>
      </div>
    </article>
  );
};

export default Profile;
