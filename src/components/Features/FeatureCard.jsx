import React from "react";

const FeatureCard = ({ item }) => {
  return (
    <div className="flex justify-center items-center flex-row p-6 rounded-[20px] mb-6  feature-card">
      <div
        className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}
      >
        <img
          src={url("../../assets/Star.svg")}
          alt="star"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {item.title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
