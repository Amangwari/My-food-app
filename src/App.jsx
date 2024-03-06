import "./App.css";
import React from "react";
import Header from "./components/Header";
import Body from "./Pages/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import Error from "./Pages/Error";
import AboutUs from "./Pages/AboutUs";
import RestaurantMenu from "./Pages/RestaurantMenu";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/restaurants/:resId" element={<RestaurantMenu/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
