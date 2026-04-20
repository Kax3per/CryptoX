import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * EndSection (Footer) Component
 * ------------------------------
 * Final section of the page containing:
 * - Brand identity
 * - Navigation links
 * - Social media links
 * - Legal / copyright info
 *
 * Responsibilities:
 * - Provide secondary navigation
 * - Reinforce brand presence
 * - Offer external connections (socials)
 *
 * UX Concept:
 * Clean, lightweight footer with clear separation:
 * - Top → brand + links + social
 * - Divider → visual separation
 * - Bottom → legal + secondary links
 */
const Footer = () => {
  return (
    /* ================= FOOTER ================= */
    <footer className="w-full bg-linear-to-b from-gray-50 to-white border-t border-gray-200 py-14 px-4 sm:px-6 md:px-16 font-sans">

      {/* ================= CONTAINER ================= */}
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP SECTION ================= */}
        {/* Contains brand, navigation and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

          {/* LEFT - BRAND */}
          {/* Logo + short product description */}
          <div className="text-center md:text-left max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">

              {/* LOGO ICON */}
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                C
              </div>

              {/* BRAND NAME */}
              <h3 className="text-lg font-semibold">CryptoX</h3>
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm text-gray-500 leading-relaxed">
              Trade, manage and grow your crypto portfolio with a modern,
              fast and secure platform designed for the next generation.
            </p>
          </div>

          {/* LINKS */}
          {/* Secondary navigation links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">

            <span className="hover:text-black cursor-pointer transition">
              Features
            </span>

            <span className="hover:text-black cursor-pointer transition">
              Pricing
            </span>

            <span className="hover:text-black cursor-pointer transition">
              Docs
            </span>

            <span className="hover:text-black cursor-pointer transition">
              Contact
            </span>

          </div>

          {/* SOCIAL */}
          {/* External links to social platforms */}
          <div className="flex gap-3">

            {/* TWITTER */}
            <a href="#" className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center hover:bg-purple-500 hover:text-white transition">
              <FaTwitter size={16} />
            </a>

            {/* GITHUB */}
            <a href="#" className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center hover:bg-black hover:text-white transition">
              <FaGithub size={16} />
            </a>

            {/* LINKEDIN */}
            <a href="#" className="w-10 h-10 rounded-xl bg-white border flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
              <FaLinkedin size={16} />
            </a>

          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        {/* Visual separation between top and bottom sections */}
        <div className="my-8 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent" />

        {/* ================= BOTTOM SECTION ================= */}
        {/* Legal information + additional links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">

          {/* COPYRIGHT */}
          <p>© 2026 CryptoX. All rights reserved.</p>

          {/* LEGAL LINKS */}
          <div className="flex gap-5">
            <span className="hover:text-black cursor-pointer transition">
              Privacy
            </span>
            <span className="hover:text-black cursor-pointer transition">
              Terms
            </span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;