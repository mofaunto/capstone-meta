import { render, screen } from "@testing-library/react";
import BookingForm from "./components/Booking/BookingForm";

test("Has the form element id fullName", () => {
  render(<BookingForm />);
  const formId = screen.getElementById("fullName");
  expect(formId).toBeInTheDocument();
});
