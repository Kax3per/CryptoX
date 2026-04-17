import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-5 
    bg-white/70 backdrop-blur-md
    sticky top-0 z-50">

      {/* Logo */}
      <div className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight 
      bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 
      text-transparent bg-clip-text">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold">C</span>ryptoX
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10 text-sm text-gray-600">
        <a href="#" className="hover:text-black transition">Market</a>
        <a href="#" className="hover:text-black transition">Features</a>
        <a href="#" className="hover:text-black transition">Pricing</a>
        <a href="#" className="hover:text-black transition">Docs</a>
      </div>

      {/* CTA Desktop */}
      <button className="hidden md:block px-4 lg:px-5 py-2 text-sm rounded-full text-white 
      bg-gradient-to-r from-purple-600 to-blue-500 
      hover:scale-105 transition-all duration-300 
      shadow-[0_0_20px_rgba(99,102,241,0.4)]">
        Get Started
      </button>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col justify-center gap-1.5 z-[60]"
      >
        <span className={`block h-[2px] w-6 bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
        <span className={`block h-[2px] w-6 bg-black transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block h-[2px] w-6 bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
      </button>

      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 w-full h-screen bg-white 
        flex flex-col items-center justify-center gap-8 sm:gap-10 
        text-lg sm:text-xl
        transition-all duration-500
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}>

        <a href="#" onClick={() => setOpen(false)} className="hover:scale-110 transition">Market</a>
        <a href="#" onClick={() => setOpen(false)} className="hover:scale-110 transition">Features</a>
        <a href="#" onClick={() => setOpen(false)} className="hover:scale-110 transition">Pricing</a>
        <a href="#" onClick={() => setOpen(false)} className="hover:scale-110 transition">Docs</a>

        <button className="mt-6 px-6 py-3 rounded-full text-white 
        bg-gradient-to-r from-purple-600 to-blue-500 
        shadow-[0_0_20px_rgba(99,102,241,0.4)]">
          Get Started
        </button>
      </div>

    </nav>
  );
};

export default Navbar;