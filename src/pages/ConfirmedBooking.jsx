import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./ConfirmedBooking.css";

const ConfirmedBooking = () => {
  return (
    <>
      <Header />
      <div className="booking-confirmed">
        <h1>Your Booking is Confirmed!</h1>
        <p>Check your email for the booking details.</p>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmedBooking;
