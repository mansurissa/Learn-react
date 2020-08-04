import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <h3>LOGO</h3>
        <ul className="nav-links">
          <Link to="/" className="link-styles">
            <li>Home</li>
          </Link>
          <Link to="/about" className="link-styles">
            <li>About</li>
          </Link>
          <Link to="/shop" className="link-styles">
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
