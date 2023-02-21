import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/rleweblogo.png";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>
      {/* <label className="logo">RLE Software</label> */}

      <Link to="/">
        <img src={Logo} alt="" />
        {/* <img src={process.env.PUBLIC_URL + "/img/rleweblogo.png"} alt="" /> */}
        {/* <img src={require("../img/rleweblogo.png")} alt="" /> */}
      </Link>

      <ul>
        <Link to="/" className="home" id="lnk">
          <li className="link">Home</li>
        </Link>
        <Link to="/possoftware" className="possoftware">
          <li className="link">POS Software</li>
        </Link>
        <Link to="/customsoftware" className="customsoftware">
          <li className="link">Custom Software</li>
        </Link>
        <Link to="/webdevelopment" className="webdevelopment">
          <li className="link">Web Development</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
