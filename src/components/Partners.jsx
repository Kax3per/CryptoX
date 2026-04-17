import React from "react";

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

const Partners = () => {
  return (
    <section className="w-full h-[30vh] flex items-center bg-white font-sans px-6 md:px-16 overflow-hidden">

      <div className="max-w-7xl mx-auto w-full">

        {/* TEXT */}
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm mb-3">
            Trusted by leading crypto platforms
          </p>

          <h3 className="text-[28px] md:text-[60px] font-bold tracking-tight">
            Our partners &
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              {" "}integrations
            </span>
          </h3>
        </div>

        {/* WRAPPER */}
        <div className="relative overflow-hidden">

          {/* FADE */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

          {/* TRACK */}
          <div className="flex animate-marquee items-center">

            {[...Array(5)].flatMap(() => logos).map((logo, i) => (
              <div key={i} className="mx-14 flex-shrink-0">
                <img
                  src={logo}
                  alt="logo"
                  className="h-12 opacity-60 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }

          .animate-marquee {
            width: max-content;
            animation: marquee 25s linear infinite;
          }
        `}
      </style>

    </section>
  );
};

export default Partners;