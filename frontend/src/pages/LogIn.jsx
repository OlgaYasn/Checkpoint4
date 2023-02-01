import React from "react";
import { Link } from "react-router-dom";
import collage from "../assets/images/collage_books.png";
import "../styles/LogIn.css";

function LogIn() {
  return (
    <div className="login_page">
      <div className="login_form">
        <h2>Log in here </h2>

        <form name="connexion" method="post" className="connexion-form">
          <div className="connexion-input">
            <label htmlFor="Email">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="test@blabla.com"
            />
          </div>
          <div className="connexion-input">
            <label htmlFor="password">Your password</label>
            <input type="password" name="password" placeholder="" />
          </div>
          <div className="connexion-button">
            <button className="uppercase" type="submit">
              Log in
            </button>
          </div>
          <h4>
            <Link to="/CreateProfile">Register </Link>
          </h4>
        </form>
      </div>{" "}
      <div className="loginbook_images">
        <img src={collage} alt="book" className="loginbook_image" />{" "}
      </div>
    </div>
  );
}

export default LogIn;
