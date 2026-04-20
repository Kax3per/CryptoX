import React from "react";

/**
 * Logos array
 * ------------
 * List of partner / integration brand logos.
 * Duplicated later for seamless infinite scroll animation.
 */
const logos = [
  "https://cdn.simpleicons.org/bitcoin",
  "https://cdn.simpleicons.org/ethereum",
  "https://cdn.simpleicons.org/binance",
  "https://cdn.simpleicons.org/cardano",
  "https://cdn.simpleicons.org/polygon",
  "https://cdn.simpleicons.org/solana",
  "https://cdn.simpleicons.org/tether",
  "https://cdn.simpleicons.org/chainlink",
  "https://cdn.simpleicons.org/litecoin",
  "https://cdn.simpleicons.org/dogecoin",
  "https://cdn.simpleicons.org/monero",
];

/**
 * Partners Component
 * -------------------
 * Displays scrolling list of partner logos.
 *
 * Responsibilities:
 * - Build trust via recognizable brands
 * - Showcase integrations / ecosystem
 * - Provide subtle motion for visual engagement
 *
 * UX Concept:
 * - Continuous horizontal marquee animation
 * - Faded edges for smooth entry/exit
 * - Low opacity logos → highlight on hover
 */
const Partners = () => {
  return (
    /* ================= SECTION ================= */
    <section className="w-full py-16 bg-white font-sans px-6 md:px-16 overflow-hidden">

      {/* ================= CONTAINER ================= */}
      <div className="max-w-7xl mx-auto w-full">

        {/* ================= HEADER ================= */}
        {/* Section intro + headline */}
        <div className="text-center mb-12">

          {/* SUBTEXT */}
          <p className="text-gray-400 text-sm mb-3">
            Trusted by leading crypto platforms
          </p>

          {/* HEADLINE */}
          <h3 className="text-[28px] md:text-[60px] font-bold tracking-tight">
            Our partners &
            <span className="bg-linear-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              {" "}integrations
            </span>
          </h3>

        </div>

        {/* ================= MARQUEE WRAPPER ================= */}
        {/* Contains scrolling logos with fade edges */}
        <div className="relative overflow-hidden">

          {/* LEFT FADE */}
          {/* Creates smooth fade-in effect */}
          <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />

          {/* RIGHT FADE */}
          {/* Creates smooth fade-out effect */}
          <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* ================= TRACK ================= */}
          /**
           * Scrolling container
           * --------------------
           * Logos duplicated to create infinite loop illusion
           */
          <div className="flex items-center animate-marquee will-change-transform">

            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="mx-8 md:mx-14 shrink-0">

                {/* LOGO ITEM */}
                {/* Low opacity by default, highlighted on hover */}
                <img
                  src={logo}
                  alt="logo"
                  className="h-8 md:h-12 opacity-60 hover:opacity-100 transition duration-300"
                />

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>
        {`
          /**
           * Marquee animation
           * ------------------
           * Moves track horizontally to create infinite scroll effect.
           */
          @keyframes marquee {
            0% { transform: translate3d(0,0,0); }
            100% { transform: translate3d(-50%,0,0); }
          }

          /**
           * Animation class
           * Ensures smooth linear infinite motion
           */
          .animate-marquee {
            width: max-content;
            animation: marquee 18s linear infinite;
          }
        `}
      </style>

    </section>
  );
};

export default Partners;