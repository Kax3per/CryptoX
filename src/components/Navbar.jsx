import React, { useState } from "react";

/**
 * Navbar Component
 * -----------------
 * Responsive navigation bar with:
 * - Desktop navigation links + CTA
 * - Mobile hamburger menu with fullscreen overlay
 *
 * Responsibilities:
 * - Provide global navigation
 * - Handle mobile menu toggle state
 * - Maintain visual consistency across breakpoints
 *
 * UX Concept:
 * - Glassmorphism navbar (blur + transparency)
 * - Minimal desktop layout
 * - Fullscreen immersive mobile menu
 */
const Navbar = () => {

  /**
   * Mobile menu state
   * true  -> menu open
   * false -> menu closed
   */
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      {/* Fixed top navigation with blur effect */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-5 
      bg-white/70 backdrop-blur-md z-50">

        {/* LOGO */}
        {/* Gradient brand text with emphasized first letter */}
        <div className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight 
        bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400 
        text-transparent bg-clip-text">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold">C</span>ryptoX
        </div>

        {/* DESKTOP LINKS */}
        {/* Visible only on md+ screens */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 text-sm text-gray-600">

          {/* Navigation links */}
          <a href="#" className="hover:text-black transition">Market</a>
          <a href="#" className="hover:text-black transition">Features</a>
          <a href="#" className="hover:text-black transition">Pricing</a>
          <a href="#" className="hover:text-black transition">Docs</a>

        </div>

        {/* CTA DESKTOP */}
        {/* Primary action button (desktop only) */}
        <button className="hidden md:block px-4 lg:px-5 py-2 text-sm rounded-full text-white 
        bg-linear-to-r from-purple-600 to-blue-500 
        hover:scale-105 transition-all duration-300 
        shadow-[0_0_20px_rgba(99,102,241,0.4)]">
          Get Started
        </button>

        {/* HAMBURGER */}
        {/* Mobile menu toggle with animated icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center gap-1.5 z-60"
        >

          {/* TOP LINE */}
          {/* Rotates when menu is open */}
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`} />

          {/* MIDDLE LINE */}
          {/* Hidden when menu is open */}
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${open ? "opacity-0" : ""}`} />

          {/* BOTTOM LINE */}
          {/* Rotates opposite direction when open */}
          <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />

        </button>

      </nav>

      {/* MOBILE MENU */}
      {/* Fullscreen overlay navigation for mobile devices */}
      <div className={`
        fixed inset-0 w-full h-screen bg-white 
        flex flex-col items-center justify-center gap-8 text-lg
        transition-all duration-500 z-40
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}>

        {/* NAV LINKS */}
        {/* Each click closes menu */}
        <a href="#" onClick={() => setOpen(false)}>Market</a>
        <a href="#" onClick={() => setOpen(false)}>Features</a>
        <a href="#" onClick={() => setOpen(false)}>Pricing</a>
        <a href="#" onClick={() => setOpen(false)}>Docs</a>

        {/* CTA */}
        {/* Primary action in mobile context */}
        <button className="mt-6 px-6 py-3 rounded-full text-white 
        bg-linear-to-r from-purple-600 to-blue-500">
          Get Started
        </button>
      </div>

      {/* SPACER (MEGA WAŻNE) */}
      /**
       * Spacer element
       * ----------------
       * Prevents content from being hidden under fixed navbar.
       * Matches navbar height.
       */
      <div className="h-20" />
    </>
  );
};

export default Navbar;