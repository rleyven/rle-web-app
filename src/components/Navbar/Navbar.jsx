import React from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../img/rleweblogo.png";
import { UserAuth } from "../Context/AuthContext";
import "./Navbar.scss";

const Navbar = () => {
  const { googleSignIn, user } = UserAuth();
  // const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const { logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (user != null) {
  //     navigate("/rle-web-app");
  //   }
  // }, [user]);

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
          <li className="link">Home</li>
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
        {user?.displayName ? (
          <Link className="signin">
            <li className="link" onClick={handleSignOut}>
              LOGOUT [{user.displayName}]
            </li>
          </Link>
        ) : (
          <Link className="signin">
            <li className="link" onClick={handleGoogleSignIn}>
              SIGN IN
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
