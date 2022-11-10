import React from "react";
import Toggle from "../Toggle/Toggle";

const DesktopNavbar = () => {
  return (
    <>
      <div className="hidden sm:flex justify-between items-center">
        <ul className="list-none  sm:flex  justify-end items-center flex-1">
          <li className="font-poppins font-normal cursor-pointer text-[14px] text-black11 mr-10">
            Home
          </li>
          <li className="font-poppins font-normal cursor-pointer text-[14px] text-black11 mr-10">
            Features
          </li>
          <li className="font-poppins font-normal cursor-pointer text-[14px] text-black11 mr-10">
            Product
          </li>
          <li className="font-poppins font-normal cursor-pointer text-[14px] text-black11 mr-10">
            Clients
          </li>
        </ul>
        <div className="mr-8">
          <Toggle />
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <a
            className="flex items-center justify-center  cursor-pointer w-[36px] h-[36px] text-black11 pr-3"
            href="/"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            className="flex items-center justify-center  cursor-pointer w-[36px] h-[36px] text-black11 pr-3"
            href="/"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a
            className="flex items-center justify-center  cursor-pointer w-[36px] h-[36px] text-black11 pr-3"
            href="/"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default DesktopNavbar;
