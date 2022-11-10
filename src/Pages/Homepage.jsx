import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/Intro/Intro";
import Statistic from "../components/Statistic/Statistic";
import Features from "../components/Features/Features";
import Transaction from "../components/Transaction/Transaction";
import Detail from "../components/Detail/Detail";
import Testimonials from "../components/Testimonials/Testimonials";
import Clients from "../components/Clients/Clients";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className=" p-4 flex items-center justify-center  sm:p-8">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      <div className="bg-primary flex justify-center items-start ">
        <div className="p-4 sm:p-8">
          <div className="xl:max-w-[1280px] w-full ">
            <Intro />
          </div>
        </div>
      </div>
      <div className="bg-primary px-6 flex justify-center items-center sm:px-16 ">
        <div className="xl:max-w-[1280px] w-full">
          <Statistic />
          <Features />
          <Transaction />
          <Detail />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
