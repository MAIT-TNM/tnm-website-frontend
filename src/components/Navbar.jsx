import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="backdrop-blur-[5px] navbar border-[1px] z-10 border-[#919AA4] fixed px-5 top-5 left-[25%] w-[50%] h-[70px] bg-transparent flex justify-between items-center rounded-[10rem] shadow-2xl">
      <NavLink to="/">
        <img src={logo} alt="tnm_logo" className="w-[40px] h-[40px]" />
      </NavLink>
      <ul className="h-full w-[100%] flex items-center justify-center gap-10 text-white">
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
    </div>
  );
};

export default Navbar;
