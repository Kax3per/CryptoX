import React from "react";
import phoneImg from "../assets/phone.png";
import { ShieldCheck, Zap, BarChart3, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] px-4 sm:px-6 md:px-12 flex items-center overflow-hidden">

      {/* glow */}
      <div className="absolute bottom-[200px] right-[7%] sm:right-[10%] w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-purple-500/20 blur-[120px] sm:blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto w-full">

        {/* MOBILE */}
        <div className="flex flex-col md:hidden items-center text-center min-h-[calc(100vh-80px)]">

          {/* TEXT */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-[10px] text-gray-600 mb-5">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              All-in-one Crypto Trading App
            </div>

            <h1 className="text-[34px] leading-[1.05] font-semibold tracking-tight text-black">
              Trade Crypto
              <span className="block bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 text-transparent bg-clip-text">
                Smarter, Faster,
              </span>
              <span className="text-gray-700">Better.</span>
            </h1>

            <p className="mt-5 text-gray-500 text-sm">
              Join thousands of traders using our app to buy, sell and manage crypto with ease.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative flex items-center justify-center mt-8">
            <div className="absolute bottom-[-30px] w-[220px] h-[90px] bg-purple-500/30 blur-[70px] rounded-full" />

            <img
              src={phoneImg}
              alt="crypto app"
              className="relative w-[260px] drop-shadow-[0_40px_60px_rgba(0,0,0,0.3)]"
            />
          </div>

          {/* BUTTONS - tylko mobile poprawka */}
          <div className="mt-auto mb-8 w-full flex gap-3">

            <button className="flex-1 px-4 py-3 rounded-full bg-black text-white text-sm flex items-center justify-center gap-2">
              Download
            </button>

            <button className="flex-1 px-4 py-3 rounded-full bg-gray-100 text-sm flex items-center justify-center gap-2">
              Demo
              <span className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-white">
                <Play size={10} />
              </span>
            </button>

          </div>

        </div>

        {/* DESKTOP - NIE RUSZANE */}
        <div className="hidden md:grid md:grid-cols-2 gap-10 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-xs text-gray-600 mb-6">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              All-in-one Crypto Trading App
            </div>

            <h1 className="text-[72px] lg:text-[82px] leading-[1.05] font-semibold tracking-tight text-black">
              Trade Crypto
              <span className="block bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 text-transparent bg-clip-text">
                Smarter, Faster,
              </span>
              <span className="text-gray-700">Better.</span>
            </h1>

            <p className="mt-6 text-gray-500 max-w-md text-base">
              Join thousands of traders using our app to buy, sell and manage crypto with ease.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-full bg-black text-white text-sm shadow-lg">
                Download App ↗
              </button>

              <button className="px-6 py-3 rounded-full bg-gray-100 flex items-center gap-2 text-sm">
                Watch Demo
                <span className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white">
                  <Play size={12} />
                </span>
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl border border-purple-200 flex items-center justify-center text-purple-500">
                  <ShieldCheck size={18} />
                </div>
                <p className="text-sm font-medium">Secure</p>
                <p className="text-xs text-gray-500">Bank-level security</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl border border-purple-200 flex items-center justify-center text-purple-500">
                  <Zap size={18} />
                </div>
                <p className="text-sm font-medium">Fast</p>
                <p className="text-xs text-gray-500">Lightning fast trades</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-xl border border-purple-200 flex items-center justify-center text-purple-500">
                  <BarChart3 size={18} />
                </div>
                <p className="text-sm font-medium">Smart</p>
                <p className="text-xs text-gray-500">Advanced charts & data</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute bottom-[-40px] w-[300px] h-[120px] bg-purple-500/30 blur-[80px] rounded-full" />

            <img
              src={phoneImg}
              alt="crypto app"
              className="w-[420px] lg:w-[480px] drop-shadow-[0_60px_80px_rgba(0,0,0,0.35)]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;