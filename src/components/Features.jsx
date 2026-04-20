import React from "react";
import dashboardImg from "../assets/dashboard.png";

const Features = () => {
  return (
    <section className="w-full bg-white font-sans px-4 sm:px-6 md:px-12 py-16 md:py-24">

      <div className="w-full max-w-7xl mx-auto">

        {/* MOBILE + TABLET (iPad też tutaj) */}
        <div className="flex flex-col xl:hidden items-center text-center">

          {/* IMAGE FIRST */}
          <div className="relative w-full flex justify-center mb-8">
            <img
              src={dashboardImg}
              alt="dashboard"
              className="
                w-full 
                max-w-150
                rounded-2xl
                shadow-[0_40px_60px_rgba(0,0,0,0.15)]
                border border-gray-200
              "
            />
          </div>

          {/* TEXT */}
          <div className="max-w-md">

            <h2 className="text-[30px] sm:text-[38px] font-semibold leading-[1.1]">
              Your crypto
              <span className="block bg-linear-to-r from-purple-500 via-blue-500 to-purple-400 text-transparent bg-clip-text">
                control center
              </span>
            </h2>

            <p className="mt-5 text-gray-500 text-sm sm:text-base leading-relaxed">
              Manage your portfolio, analyze markets and execute trades
              with a powerful interface designed for speed and clarity.
            </p>

            <p className="mt-3 text-gray-400 text-sm">
              Built for beginners and professionals.
            </p>

            <button className="mt-6 px-6 py-3 rounded-full bg-black text-white text-sm shadow-lg">
              Explore
            </button>

          </div>

        </div>

        {/* DESKTOP */}
        <div className="hidden xl:grid grid-cols-2 items-center">

          {/* IMAGE */}
          <div className="relative flex justify-start">
            <img
              src={dashboardImg}
              alt="dashboard"
              className="
                w-[120%] 
                max-w-none
                -translate-x-12 xl:-translate-x-20
                rounded-3xl
                shadow-[0_80px_120px_rgba(0,0,0,0.18)]
                border border-gray-200
              "
            />
          </div>

          {/* TEXT */}
          <div className="relative z-10 pl-16 xl:pl-28 pr-6 max-w-140">

            <h2 className="text-[42px] xl:text-[56px] font-semibold leading-[1.1]">
              Your crypto
              <span className="block bg-linear-to-r from-purple-500 via-blue-500 to-purple-400 text-transparent bg-clip-text">
                control center
              </span>
            </h2>

            <p className="mt-6 text-gray-500 leading-relaxed">
              Manage your portfolio, analyze markets and execute trades
              with a powerful interface designed for speed, clarity and precision.
            </p>

            <p className="mt-4 text-gray-500 leading-relaxed">
              Track real-time performance and make smarter decisions.
            </p>

            <p className="mt-4 text-gray-400 text-sm">
              Built for both beginners and professionals.
            </p>

            <button className="mt-10 px-7 py-3 rounded-full bg-black text-white hover:scale-105 transition shadow-lg">
              Explore Features
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;