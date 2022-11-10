import React from "react";
import { logo } from "../../assets";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <nav className="w-full py-6 flex items-center justify-between  navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;
