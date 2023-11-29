import React from "react";
import banner from "../Images/banner.jpg";
import rating from "../Images/rating.png";
import rating2 from "../Images/rating-2.jpeg";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] fron-0% to-[#FCFCFC] to-100% -z-10 ">
      <div className="edited-div py-24 flex flex-col sm:flex-col-reverse md:flex-row-reverse lg:flex-row  justify-center items-center">
        {/* left that is text */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl leading-snug text-4xl font-bold">
            Dive into Delights of Delectable{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className="text-secondary text-xl ">
            Where Each plate Weaves a Story of Culinary Mastery and Passionate
            Craftmanship
          </p>
          <button className="btn bg-green px-8 py-3 text-white rounded-full hover:text-green">
            Order Now!
          </button>
        </div>

        {/* right that is image */}
        <div className="md:w-1/2 relative inline-block right">
          <img src={banner} alt="banner image" />

          <img
            className="hiding absolute  top-0 right-0 w-24 h-auto z-10 hover:w-1/5 "
            src={rating2}
            alt="rating image"
          />
          <div className="hiding absolute  bottom-0 right-0 w-20 h-auto hover:w-1/5">
            <img src={rating} alt="rating image" />
            <p className="text-red hover:text-green">$50.00</p>
          </div>
          <div className="hiding absolute  bottom-0 left-0 w-20 h-auto hover:w-1/5">
            <img src={rating} alt="rating image" />
            <p className="text-red hover:text-green">$50.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
