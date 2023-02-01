import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar_component">
      <NavLink to="/">
        <h1 className="website_name">Book your Book</h1>
      </NavLink>
      <ul className="navbar_block">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/findyourbook">
          <li>Find your book</li>
        </NavLink>
        <NavLink to="/login">
          {" "}
          <li>Log in</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
