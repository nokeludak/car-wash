import React from "react";
import "./Footer.css";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-footer">
        <h1 className="logo-footer">Car Wash App</h1>
        <p className="desc-footer">
          CarWash app is your mobile ticket to a sparkling clean car at all
          times. Simply book your car wash directly in the app and choose
          between a 3 types of car wash.
        </p>

        <div className="social-container">
          <div className="social-icon" color="385999">
            <Facebook />
          </div>
          <div className="social-icon" color="E4405F">
            <Instagram />
          </div>
        </div>
      </div>

      <div className="center-footer">
        <h3 className="h3-title"> Useful links</h3>
        <ul className="ul-element">
          <li className="li-element">Home</li>
          <li className="li-element">Wash</li>
          <li className="li-element">Transaction History</li>
          <li className="li-element">Payment</li>
        </ul>
      </div>
      <div className="right-footer">
        <h3 className="h3-title">Contact</h3>
        <div className="contact-item">
          <Room style={{ marginRight: "10px" }} />
          71000 Sarajevo, Bosnia and Hercegovina
        </div>
        <div className="contact-item">
          <Phone style={{ marginRight: "10px" }} />
          +38762959069
        </div>
        <div className="contact-item">
          <MailOutline style={{ marginRight: "10px" }} />
          ksmajic996@gmail.com
        </div>
        <img
          className="slika2"
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt="payment"
        />
      </div>
    </div>
  );
};

export default Footer;
