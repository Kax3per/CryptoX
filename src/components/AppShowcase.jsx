import React from "react";
import appImg from "../assets/app-light.png";

const AppShowcase = () => {
  return (
    <section className="w-full h-screen flex items-center bg-white font-sans overflow-hidden px-4 sm:px-6 md:px-16">

      <div className="max-w-7xl mx-auto w-full">

        {/* MOBILE */}
        <div className="flex flex-col md:hidden items-center text-center">

          {/* IMAGE */}
          <div className="relative flex justify-center mb-8">
            <img
              src={appImg}
              alt="app"
              className="
                w-[110%]
                max-w-none
                drop-shadow-[0_40px_60px_rgba(0,0,0,0.2)]
              "
            />
          </div>

          {/* TEXT */}
          <div className="max-w-md">

            {/* logo */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="font-medium bg-gradient-to-r from-purple-500 via-blue-500 to-purple-400 text-transparent bg-clip-text">
                CryptoX
              </span>
            </div>

            {/* heading */}
            <h2 className="text-[32px] sm:text-[38px] font-semibold leading-[1.05]">
              The all-in-one
              <span className="block bg-gradient-to-r from-purple-500 via-blue-500 to-purple-400 text-transparent bg-clip-text">
                crypto app
              </span>
            </h2>

            {/* desc */}
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Manage your portfolio, swap tokens, track prices and secure your assets.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex gap-3 w-full">

              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-3 py-3 rounded-xl text-xs"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="apple"
                  className="w-4 invert"
                />
                App Store
              </a>

              <a
                href="#"
                className="flex-1 flex items-center justify-center gap-2 bg-black text-white px-3 py-3 rounded-xl text-xs"
              >
                <img
                  src="https://cdn.simpleicons.org/googleplay/ffffff"
                  alt="google"
                  className="w-4"
                />
                Google Play
              </a>

            </div>

          </div>

        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid md:grid-cols-2 items-center gap-10">

          {/* LEFT - IMAGE */}
          <div className="relative flex justify-start">
            <img
              src={appImg}
              alt="app"
              className="
                w-[120%] md:w-[130%] lg:w-[140%]
                max-w-none
                -translate-x-16 md:-translate-x-24
                drop-shadow-[0_60px_80px_rgba(0,0,0,0.15)]
              "
            />
          </div>

          {/* RIGHT */}
          <div className="max-w-xl pl-4 md:pl-16">

            {/* logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                C
              </div>
              <span className="font-medium bg-gradient-to-r from-purple-500 via-blue-500 to-purple-400 text-transparent bg-clip-text">
                CryptoX
              </span>
            </div>

            {/* heading */}
            <h2 className="text-[44px] md:text-[64px] font-semibold leading-[1.05] tracking-tight">
              The all-in-one
              <span className="block bg-gradient-to-r from-purple-500 via-blue-500 to-purple-400 text-transparent bg-clip-text">
                crypto app
              </span>
            </h2>

            {/* desc */}
            <p className="mt-6 text-gray-500 text-lg leading-relaxed">
              Manage your portfolio, swap tokens, track prices and secure your assets —
              all in one place.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex gap-4">

              <a
                href="#"
                className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:scale-105 transition shadow-lg"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="apple"
                  className="w-5 invert"
                />
                <div className="text-left leading-tight">
                  <p className="text-[10px] opacity-70">Download on the</p>
                  <p className="text-sm font-medium">App Store</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:scale-105 transition shadow-lg"
              >
                <img
                  src="https://cdn.simpleicons.org/googleplay/ffffff"
                  alt="google"
                  className="w-5"
                />
                <div className="text-left leading-tight">
                  <p className="text-[10px] opacity-70">Get it on</p>
                  <p className="text-sm font-medium">Google Play</p>
                </div>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AppShowcase;