import React from "react";
import { discount, robot } from "../../assets";
import GetStarted from "./GetStarted";

const Intro = () => {
  return (
    <section className="flex flex-col  md:flex-row">
      <div className="flex-1 flex justify-center items-start flex-col">
        <div className="flex flex-row items-center  px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[30.8px]">
            <span className="text-white">20%</span> Discount For
            <span className="text-white"> 1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className="hidden mr-0 ss:flex md:mr-4 ">
            <GetStarted />
          </div>
        </div>
        <h1 className="text-white w-full font-poppins font-semibold text-[52px] leading-[75px] ss:text-[65px] ss:leading-[100.8px]">
          Payment Method.
        </h1>
        <p className="max-w-[490px] mt-5 font-poppins font-normal text-dimWhite text-[18px] text-left leading-[30.8px]">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative">
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* gradient start */}
        <div>
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>
      </div>
      <div className="ss:hidden flex justify-center items-center">
        <GetStarted />
      </div>
    </section>
  );
};

export default Intro;
