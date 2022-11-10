import React from "react";

const Statistic = () => {
  return (
    <section className="flex justify-center items-center flex-row flex-wrap mb-6 sm:mb-20">
      <div className="flex-1 flex justify-start items-center flex-row m-3">
        <h4 className="font-poppins font-semibold text-[20px] xs:text-[40.89px] sm:text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          3800+
        </h4>
        <p className="font-poppins font-normal text-[12px] xs:text-[20.45px] sm:text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          User Active
        </p>
      </div>
      <div className="flex-1 flex justify-start items-center flex-row m-3">
        <h4 className="font-poppins font-semibold text-[20px] xs:text-[40.89px] sm:text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          230+
        </h4>
        <p className="font-poppins font-normal text-[12px] xs:text-[20.45px] sm:text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          Trusted by Company
        </p>
      </div>
      <div className="flex-1 flex justify-start items-center flex-row m-3">
        <h4 className="font-poppins font-semibold text-[20px] xs:text-[40.89px] sm:text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          $230M+
        </h4>
        <p className="font-poppins font-normal text-[12px] xs:text-[20.45px] sm:text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          Transaction
        </p>
      </div>
    </section>
  );
};

export default Statistic;
