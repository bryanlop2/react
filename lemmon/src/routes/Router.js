import React from "react";
import { Routes, Route } from "react-router-dom";
import BookingPage from "../components/BookingPage";
import Home from "../components/Home";

function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/bookingPage" element={<BookingPage />}></Route>
    </Routes>
  );
}

export default Router;
