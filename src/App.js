import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./global.css";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation" element={<Booking />} />
      </Routes>
    </>
  );
}
