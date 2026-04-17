import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const data = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  name: "Alex Johnson",
  role: "Crypto Trader",
  text: "This app completely changed the way I trade. The interface is insanely clean and everything just works perfectly.",
  img: `https://i.pravatar.cc/100?img=${i + 10}`,
}));

const Testimonials = () => {
  const [index, setIndex] = useState(3);
  const [transition, setTransition] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // 👇 dynamic clones
  const perView = isMobile ? 1 : 3;
  const extended = [
    ...data.slice(-perView),
    ...data,
    ...data.slice(0, perView),
  ];

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  // loop fix
  useEffect(() => {
    if (index >= data.length + perView) {
      setTimeout(() => {
        setTransition(false);
        setIndex(perView);
      }, 500);
    }

    if (index <= 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(data.length);
      }, 500);
    }
  }, [index, perView]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  const translate = 100 / perView;

  return (
    <section className="w-full h-screen flex items-center bg-white font-sans px-4 sm:px-6 md:px-16 overflow-hidden">

      <div className="max-w-7xl mx-auto w-full">

        {/* HEADER */}
        <div className={`mb-10 md:mb-16 flex ${isMobile ? "flex-col items-center text-center" : "justify-between items-end"}`}>
          <h2 className="text-[28px] sm:text-[36px] md:text-[64px] font-semibold leading-[1.05] tracking-tight">
            Loved by
            <span className="block bg-gradient-to-r from-purple-500 via-blue-500 to-purple-400 text-transparent bg-clip-text">
              crypto traders
            </span>
          </h2>

          {!isMobile && (
            <div className="flex gap-3 mt-6 md:mt-0">
              <button onClick={prev} className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
                <ChevronLeft />
              </button>
              <button onClick={next} className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
                <ChevronRight />
              </button>
            </div>
          )}
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden flex justify-center">
          <div
            className={`flex ${transition ? "transition-transform duration-500 ease-in-out" : ""}`}
            style={{
              transform: `translateX(-${index * translate}%)`,
            }}
          >

            {extended.map((item, i) => (
              <div
                key={i}
                className={`
                  ${isMobile 
                    ? "min-w-full flex justify-center" 
                    : "min-w-[33.333%] px-3"}
                `}
              >
                <div
                  className={`
                    ${isMobile ? "max-w-[360px] w-full" : ""}
                    p-6 md:p-8 
                    rounded-3xl 
                    border border-gray-200 
                    shadow-sm hover:shadow-2xl 
                    transition flex flex-col justify-between
                  `}
                >
                  <Quote className="text-purple-500 mb-4 md:mb-6" size={24} />

                  <div className="flex gap-1 text-purple-500 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                    {item.text}
                  </p>

                  <div className="mt-6 md:mt-8 flex items-center gap-3 md:gap-4">
                    <img
                      src={item.img}
                      alt="user"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm md:text-base font-medium">{item.name}</p>
                      <p className="text-xs md:text-sm text-gray-400">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* MOBILE ARROWS */}
        {isMobile && (
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
              <ChevronRight size={18} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Testimonials;