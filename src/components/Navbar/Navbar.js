import React from "react";
import Logo from "./Logo";
import "./Navbar.css";
import Search from "./Search";

const Navbar = (props) => {
  return (
    <nav>
      <Logo />
      <Search setQuery={props.setQuery} />
    </nav>
  );
};

export default Navbar;
