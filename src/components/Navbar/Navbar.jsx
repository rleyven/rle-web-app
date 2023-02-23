import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/rleweblogo.png";

import "./Navbar.scss";

const Navbar = () => {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars"></i>
      </label>

      <Link to="/rle-web-app">
        <img src={Logo} alt="" />
      </Link>
      <ul className="nav-menu">
        <Link to="/rle-web-app" className="home">
          <li className="link">Main</li>
        </Link>
        <Link to="/rle-web-app/possoftware" className="possoftware">
          <li className="link">POS Software</li>
        </Link>
        <Link to="/rle-web-app/customsoftware" className="customsoftware">
          <li className="link">Custom Software</li>
        </Link>
        <Link to="/rle-web-app/webdevelopment" className="webdevelopment">
          <li className="link">Web Development</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
