import React from "react";
import Logo from "../img/rleweblogo.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-top">
        <div className="flex-1">
          <div className="address">
            <h6>RLE Software Address</h6>
            <span>
              Calapan City, Oriental Mindoro 5200 <br></br> Philippines
            </span>
            <h6>Contacts</h6>
            <span>+63 910 788 3160</span>
            <h6>E-Mail</h6>
            <span>info@rlesoftware.com</span>
          </div>
        </div>
        <div className="flex-1">
          <h6>Folow us</h6>
          <span>
            <a href="https://www.facebook.com/rlesoftware/">Facebook</a>
          </span>
        </div>
        <div className="flex-1">
          <h6>Helpful Links</h6>
        </div>
      </div>
      <div className="container">
        <img src={Logo} alt="" />
        <span>
          © 2023 <b>RLE Software Development Services</b>. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
