import React from "react";
import { card } from "../../assets";

const Detail = () => {
  return (
    <section className="flex flex-col md:flex-row py-6 sm:py-16">
      <div className="flex-1 flex flex-col justify-center items-start">
        <h2 className="font-poppins font-semibold text-[40px] text-white leading-[66.8px] w-full xs:text-[48px] xs:leading-[76.8px]">
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="bg-blue-gradient rounded-[10px] outline-none mt-10 py-3 px-6 font-poppins font-medium text-[18px] text-primary   ">
          Get Started
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center ml-0 mt-10 relative md:mt-0 md:ml-10 ">
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default Detail;
