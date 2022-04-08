import React, { useEffect, useState } from "react";
import "./Wash.css";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios"

const Wash = () => {
  const [customers, setCustomers] =useState([])
  const [formData, setFormData] = useState({
    username: "",
    washType: "",
    price: 0,
    discount: false,
    
  });
  const { username, washType, price, discount } = formData;
  
  
  useEffect(() => {
    const getCustomers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/customer/"
          
        )
        setCustomers(res.data)
        console.log(res.data)
      } catch (error) {}
    }
    getCustomers()
    
    
  }, [])
 // WASH FUNCTION BACKEND CONNECTION
  const washFunction = async (e) => {
    e.preventDefault();
    const data = { username, washType, price, discount };
    try {
      const res = await axios.post(
        "http://localhost:5000/customer/wash",
        data
      );

      setCustomers(res.data)
    } catch (error) {
      console.log(error);
    }

  }

  
  
  return (
    <div className="wash-container">
      <Announcement />
      <Navbar />

      <div className="wash-container2">
        <div className="filter">
          <span className="filtertext">Customer:</span>
          <select  className="select">
            {customers.map((item)=>{
              return <option key={item._id}>{item.username}</option>
})}
          </select>
        </div>
        <div className="filter">
          <span className="filtertext">Wash type:</span>
          <select className="select">
            <option >Full car</option>
            <option>Exterior wash</option>
            <option>Interior wash</option>
          </select>
        </div>
        
        <div className="filter">
          <span className="filtertext">Price:</span>
          <select className="select">
            <option >10 $</option>
            <option>6 $</option>
            <option>4 $</option>
          </select>
          <br/>
          <br/>
         
          <form className="form">
          <input type="checkbox"></input>
          <label>  Discount</label>
        </form>
        </div>
        <button className="login-button">WASH</button>
       
      </div>

      <Footer />
    </div>
  );
};

export default Wash;
