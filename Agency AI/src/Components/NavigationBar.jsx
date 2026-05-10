import React from "react";
import assets from "../assets/assets";

const NavBar = ({ Theme, setTheme }) => {
  return (
    <>
      <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
        <img src={Theme === "dark" ? assets.logo_dark : assets.logo} alt="" />

        <div
          className="
            flex justify-between 
            text-gray-700 dark:text-white
            sm:text-sm
  gap-7
            max-sm:w-60
            max-sm:pl-10
            max-sm:fixed
            max-sm:top-0
            max-sm:bottom-0
            max-sm:right-0
            max-sm:min-h-screen
            max-sm:h-full
            max-sm:flex-col
            max-sm:items-start
            max-sm:justify-start
            max-sm:gap-6
            max-sm:bg-white
            max-sm:dark:bg-gray-900
            max-sm:pt-20
            max-sm:shadow-2xl
            max-sm:z-50
            max-sm:transition-transform
            max-sm:duration-300
            max-sm:translate-x-full
          "
        >
          <a href="#" className="sm:hover:border-b">
            Home
          </a>
          <a href="#Services" className="sm:hover:border-b">
            services
          </a>
          <a href="#our-work" className="sm:hover:border-b">
            our work
          </a>
          <a href="#Contact-us" className="sm:hover:border-b">
            contact Us
          </a>
        </div>
        <div>
          <a
            href="#contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition duration-300 shadow-md"
          >
            Connect
            <img
              src={assets.arrow_icon}
              width={14}
              alt="Arrow icon"
              className="w-3.5"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
