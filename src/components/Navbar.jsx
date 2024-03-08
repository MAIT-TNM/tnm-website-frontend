import React from "react";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";

const buttonStyles = {
  padding: "0.7rem 1.5rem",
  borderRadius: "10rem",
  cursor: "pointer",
};

const Navbar = () => {
  return (
    <div className="navbar border-[1px] z-10 border-[#919AA4] fixed px-5 top-5 left-[15%] w-[70%] h-[70px] bg-transparent flex justify-between items-center rounded-[10rem] shadow-2xl">
      <NavLink to="/">
        <img src={logo} alt="tnm_logo" className="w-[40px] h-[40px]" />
      </NavLink>
      <ul className="h-full w-[60%] flex items-center justify-around text-white">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/events">Events</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/faculty">Faculty Coordinator</NavLink>
        </li>
        <li>
          <NavLink to="/schedule">Schedule</NavLink>
        </li>
      </ul>
      <div className="h-full w-[20%] flex items-center justify-around">
        <Link to="register">
          <button style={buttonStyles} className="bg-[#EDE4FF] font-medium">
            Register
          </button>
        </Link>
        <Link to="login">
          <button
            style={buttonStyles}
            className="border-[1px] border-[#919AA4] bg-transparent text-[#EDE4FF]"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
