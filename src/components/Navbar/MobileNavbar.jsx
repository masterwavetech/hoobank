import React, { useState } from "react";
import { close, menu } from "../../assets";
import Toggle from "../Toggle/Toggle";

const MobileNavbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex items-center justify-end flex-1 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[20px] h-[20px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "fixed"
          } bg-primary absolute top-20 right-0 left-0 bottom-0  py-0 px-[23px] w-full`}
        >
          <div className="my-0 mx-auto px-0 pt-[24px] pb-[96px] max-w-[288px]">
            <nav className="block">
              <a className="nav_link" href="/">
                Home
              </a>
              <a className="nav_link" href="/">
                Features
              </a>
              <a className="nav_link" href="/">
                Product
              </a>
              <a className="nav_link" href="/">
                Clients
              </a>
            </nav>
            <div className="mt-[24px] flex justify-between items-center rounded-lg py-[12px] px-[14px] bg-toggle">
              <p className="leading-6 text-[14px] font-medium text-black11">
                Appearance
              </p>
              <Toggle />
            </div>
            <div className="mt-[24px] flex flex-wrap items-center justify-center">
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
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
