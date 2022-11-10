import React from "react";
import Feedback from "./Feedback";
import { feedback } from "../../Api";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-6 relative sm:py-16">
        <div className="flex flex-col justify-center items-center ">
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
          <div className="w-full flex flex-col justify-between items-center mb-6 relative z-[1] sm:mb-16 md:flex-row">
            <h2 className="font-poppins font-semibold text-[40px] text-white leading-[66.8px] w-full xs:text-[48px] xs:leading-[76.8px]">
              What People are <br className="sm:block hidden" /> saying about us
            </h2>
            <div className="w-full md:mt-0 mt-6">
              <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-left max-w-[450px]">
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </div>
          </div>
        </div>

        <Slider {...settings}>
          {feedback.map((item) => {
            return (
              <React.Fragment key={item._id}>
                <Feedback item={item} />
              </React.Fragment>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Testimonials;
