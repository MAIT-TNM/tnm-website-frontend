import React, { useState } from "react";
import logo from "../../images/logo.png";
import { HiOutlineMenuAlt3, HiOutlineMenuAlt2 } from "react-icons/hi";
import { navLinks } from "../../Constants";
import NavLink from "./NavLink";
import Menuoverlay from "./Menuoverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] p-10 md:left-[5%] lg:left-[10%] xl:left-[15%] 2xl:left-[20%] md:rounded-[10rem] md:border-[1px] md:border-customGray md:p-5 md:container md:mt-[1.7rem] md:backdrop-blur-[5px] transition-all duration-500 ease-in fixed top-0 z-[9999] bg-transparent md:shadow-2xl">
      <div className="flex justify-between items-center">
        <a href="/" className="">
          <img src={logo} alt="Tnm logo" className="h-[40px]" />
        </a>
        <ul className="hidden md:flex nav-menu">
          {navLinks.map((link, index) => (
            <li key={index} className="text-white">
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>

        {/* mobile menu  */}

        <div className="block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-2 py-1 border-[1px] rounded border-customGray text-textshade"
          >
            {navbarOpen ? (
              <HiOutlineMenuAlt2
                className="block text-customGray cursor-pointer"
                size={30}
              />
            ) : (
              <HiOutlineMenuAlt3
                className="block text-customGray cursor-pointer"
                size={30}
              />
            )}
          </button>
        </div>
      </div>
      {navbarOpen && <Menuoverlay />}
    </nav>
  );
};

export default Navbar;
