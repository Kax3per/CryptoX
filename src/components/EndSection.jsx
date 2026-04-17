import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const EndSection = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 py-14 px-4 sm:px-6 md:px-16 font-sans">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

          {/* LEFT */}
          <div className="text-center md:text-left max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                C
              </div>
              <h3 className="text-lg font-semibold">CryptoX</h3>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed">
              Trade, manage and grow your crypto portfolio with a modern,
              fast and secure platform designed for the next generation.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="hover:text-black cursor-pointer transition">Features</span>
            <span className="hover:text-black cursor-pointer transition">Pricing</span>
            <span className="hover:text-black cursor-pointer transition">Docs</span>
            <span className="hover:text-black cursor-pointer transition">Contact</span>
          </div>

          {/* SOCIAL - react-icons */}
          <div className="flex gap-3">

            <a href="#" className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center hover:bg-purple-500 hover:text-white transition">
              <FaTwitter size={16} />
            </a>

            <a href="#" className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center hover:bg-black hover:text-white transition">
              <FaGithub size={16} />
            </a>

            <a href="#" className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
              <FaLinkedin size={16} />
            </a>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-8 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">

          <p>© 2026 CryptoX. All rights reserved.</p>

          <div className="flex gap-5">
            <span className="hover:text-black cursor-pointer transition">Privacy</span>
            <span className="hover:text-black cursor-pointer transition">Terms</span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default EndSection;