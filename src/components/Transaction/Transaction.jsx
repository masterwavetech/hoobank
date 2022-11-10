import React from "react";
import { apple, bill, google } from "../../assets";

const Transaction = () => {
  return (
    <section className="flex flex-col-reverse py-6 sm:py-16 md:flex-row">
      <div className="flex-1 flex justify-center items-center mr-0 mt-10 relative md:mr-10 md:mt-0">
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>
      <div className="flex-1 flex flex-col justify-center items-start">
        <h2 className="font-poppins font-semibold text-[40px] text-white leading-[66.8px] w-full xs:text-[48px] xs:leading-[76.8px]">
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]max-w-[470px] mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <img
            src={apple}
            alt="google_play"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Transaction;
