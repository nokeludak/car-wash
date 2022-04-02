import React from "react";
import "./Wash.css";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Wash = () => {
  return (
    <div className="wash-container">
      <Announcement />
      <Navbar />
      <h1 className="h1-dresses">Wash program</h1>
      <div className="wash-container2">
        <div className="filter">
          <span className="filtertext">Customer</span>
          <select className="select">
            <option disabled selected>
              Customer
            </option>
            <option>Customer 1</option>
          </select>
        </div>
        <div className="filter">
          <span className="filtertext">Wash type:</span>
          <select className="select">
            <option selected>Full car</option>
            <option>Exterior wash</option>
            <option>Interior wash</option>
          </select>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wash;
