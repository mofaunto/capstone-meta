import React from "react";
import "./BookingForm.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Full name is a required!"),
  email: yup
    .string()
    .required("Email is a required!")
    .email("Please enter a valid email!"),
  guests: yup
    .number()
    .min(1, "There must be at least 1 guest!")
    .required("Please specify number of guests per table!"),
  date: yup.string().required("Please select the date!"),
  time: yup.string().required("Please select the time!"),
});

function BookingForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    console.table(data);
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="reservation-form-wrapper"
    >
      <fieldset>
        <div className="field">
          <label htmlFor="name">
            Full Name<span className="requiredSymbol"> *</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            id="name"
            {...register("name")}
          />
          <span className="error-message">{errors.name?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="email">
            Email<span className="requiredSymbol"> *</span>
          </label>
          <input
            type="text"
            placeholder="jonhdoe@email.com"
            name="email"
            id="email"
            {...register("email")}
          />
          <span className="error-message">{errors.email?.message}</span>
        </div>

        <div className="field occasion">
          <label htmlFor="occasion">Occasion (optional)</label>
          <div className="options">
            <select name="occasion" id="occasion" {...register("occasion")}>
              <option value="select">Select Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="field guest">
          <label htmlFor="guests">
            Guests<span className="requiredSymbol"> *</span>
          </label>
          <input
            type="number"
            placeholder="2"
            min={1}
            name="guests"
            id="guests"
            {...register("guests")}
          />
          <span className="error-message">{errors.guests?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="date">
            Date<span className="requiredSymbol"> *</span>
          </label>
          <input type="date" name="date" id="date" {...register("date")} />
          <span className="error-message">{errors.date?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="time">
            Time<span className="requiredSymbol"> *</span>
          </label>
          <div className="options">
            <select name="time" id="time" {...register("time")}>
              <option value="12:00PM">12:00 PM</option>
              <option value="12:30PM">12:30 PM</option>
              <option value="1:00PM">1:00 PM</option>
              <option value="1:30PM">1:30 PM</option>
              <option value="2:00PM">2:00 PM</option>
              <option value="2:30PM">2:30 PM</option>
            </select>
          </div>
          <span className="error-message">{errors.time?.message}</span>
        </div>
        <button className="reservation-form-btn" type="submit">
          <a href="/confirmed">Reserve</a>
        </button>
      </fieldset>
    </form>
  );
}

export default BookingForm;
