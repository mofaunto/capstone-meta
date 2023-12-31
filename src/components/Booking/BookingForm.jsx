import { useState } from "react";
import "./BookingForm.css";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] = useState({});
  const [finalTime, setFinalTime] = useState([]);

  function handleDateChange(e) {
    const selectedDate = e.target.value;

    const timeslots = [
      "Please select your timeslot",
      "12:00 PM",
      "12:30 PM",
      "1:00 PM",
      "1:30 PM",
      "2:00 PM",
      "2:30 PM",
      "3:00 PM",
    ];

    setFinalTime(timeslots);
    setDate(selectedDate);
  }

  function validateForm() {
    const errors = {};

    if (!fullName) {
      errors.fName = "Please enter your fullname";
      document.getElementById("fullName").classList.add("invalid");
    } else {
      document.getElementById("fullName").classList.remove("invalid");
    }

    if (!email) {
      errors.email = "Please enter your email";
      document.getElementById("email").classList.add("invalid");
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
      document.getElementById("email").classList.add("invalid");
    } else {
      document.getElementById("email").classList.remove("invalid");
    }

    if (!date) {
      errors.date = "Please select a date";
      document.getElementById("date").classList.add("invalid");
    } else {
      document.getElementById("date").classList.remove("invalid");
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("Form submitted successfully!");
      navigate("/confirmed");
    } else {
      console.log("Form validation failed!");
    }
  }

  function isValidEmail(email) {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  return (
    <form className="booking-form-wrapper" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="fullName">
          Full Name<span className="requiredSymbol"> *</span>
        </label>
        <br />
        <input
          type="text"
          id="fullName"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors.fullName && <span className="error">{errors.fullName}</span>}
      </div>

      <div className="field">
        <label htmlFor="email">
          Email<span className="requiredSymbol"> *</span>
        </label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="field people">
        <label htmlFor="people">
          Number of People<span className="requiredSymbol"> *</span>
        </label>
        <br />
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="date">
          Select Date<span className="requiredSymbol"> *</span>
        </label>
        <br />
        <input type="date" id="date" value={date} onChange={handleDateChange} />
        {errors.date && <span className="error">{errors.date}</span>}
      </div>

      <div>
        <label htmlFor="time">Select Time</label> <br />
        <select id="time" disabled={!date}>
          {finalTime.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
      </div>

      <div className="field occasion">
        <label htmlFor="occasion">Occasion</label> <br />
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <button type="submit" className="submit-button">
          Book Table
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
