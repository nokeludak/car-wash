import React, {useState} from "react";
import Register from "../pages/Register";
import "./Navbar.css";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="navbar">
      <div className="center">
        <h1 className="navbar-title">Car Wash</h1>
        
      </div>
      <div className="right">
        <button className="create-button" onClick={()=> {setOpenModal(true)}}>Create Customer</button>
        {openModal && <Register />}
        
      </div>
    </div>
  );
};

export default Navbar;
