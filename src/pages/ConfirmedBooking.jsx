import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Success from "../icons_assets/success.png";
import "./ConfirmedBooking.css";
import { NavLink } from "react-router-dom";

const ConfirmedBooking = () => {
  return (
    <>
      <Header />
      <div className="booking-confirmed-container">
        <div className="booking-confirmed-img">
          <img src={Success} alt="Success" />
        </div>
        <div className="booking-confirmed-text">
          <h1>Your Booking is Confirmed!</h1>
          <p>Check your email for the booking details.</p>
        </div>
        <NavLink to="/">
          <button className="returnbutton">Go Home</button>
        </NavLink>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmedBooking;
