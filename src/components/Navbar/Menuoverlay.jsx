import React from "react";
import NavLink from "./NavLink";
import { navLinks } from "../../Constants";

const Menuoverlay = () => {
  return (
    <ul className=" md:hidden flex flex-col py-4 items-center gap-8 bg-transparent backdrop-blur-[5px] border-[1px] border-customGray">
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default Menuoverlay;
