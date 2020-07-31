import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <NavLink to="/home">HOME</NavLink>
      <NavLink to="/login">LOGIN</NavLink>
    </div>
  );
};
export default Nav;
