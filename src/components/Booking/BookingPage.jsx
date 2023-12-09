import "./BookingPage.css";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../../API";

function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <header className="booking-wrapper">
        <div className="booking-container global-max-width">
          <div className="booking-form">
            <h1>Personal Details</h1>
            <p>
              Please fill in and submit form to book your reservation at Little
              Lemon
            </p>
            <BookingForm
              availableTimes={availableTimes}
              updateTimes={dispatch}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default BookingPage;
