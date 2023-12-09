import "./BookingPage.css";
import BookingForm from "./BookingForm";

function BookingPage() {
  return (
    <div className="reservation-wrapper">
      <div className="reservation-container global-max-width">
        <div className="reservation-form">
          <h1>Reserve a Table</h1>
          <p>
            Please fill in and submit form to book your reservation at Little
            Lemon.
          </p>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
