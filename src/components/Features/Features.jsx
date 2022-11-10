import React from "react";
import { star, send, shield } from "../../assets";

const Features = () => {
  return (
    <section className="flex flex-col py-6 sm:py-16 md:flex-row">
      <div className="flex-1 flex flex-col justify-center items-start">
        <h2 className="font-poppins font-semibold text-[40px] text-white leading-[66.8px] w-full xs:text-[48px] xs:leading-[76.8px] ">
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button
          type="button"
          className={`bg-blue-gradient rounded-[10px] outline-none mt-10 py-3 px-6 font-poppins font-medium text-[18px] text-primary`}
        >
          Get Started
        </button>
      </div>
      <div className="flex-1 flex justify-center items-start flex-col">
        <div className="flex justify-center items-center flex-row p-6 rounded-[20px] mb-6  feature-card">
          <div
            className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}
          >
            <img
              src={star}
              alt="star"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
              Rewards
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-row p-6 rounded-[20px] mb-6  feature-card">
          <div
            className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}
          >
            <img
              src={shield}
              alt="star"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
              100% Secured
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-row p-6 rounded-[20px] mb-0  feature-card">
          <div
            className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}
          >
            <img
              src={send}
              alt="star"
              className="w-[50%] h-[50%] object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
              Balance Transfer
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
