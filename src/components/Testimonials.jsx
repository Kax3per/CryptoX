import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Mock testimonials dataset
 * --------------------------
 * Simulates user reviews.
 * In production, this would come from API / CMS.
 */
const data = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  name: "Alex Johnson",
  role: "Crypto Trader",
  text: "This app completely changed the way I trade. The interface is insanely clean and everything just works perfectly.",
  img: `https://i.pravatar.cc/100?img=${i + 10}`,
}));

/**
 * Testimonials Component
 * ----------------------
 * Responsive, infinite-loop carousel with:
 * - Desktop: 3 cards per view
 * - Mobile: 1 card per view
 *
 * Features:
 * - Infinite scrolling (loop illusion via cloned elements)
 * - Smooth transitions with reset logic
 * - Adaptive layout depending on viewport
 *
 * UX Concept:
 * - Social proof section
 * - Card-based testimonials
 * - Subtle motion for engagement
 */
const Testimonials = () => {

  /**
   * Current slider index (includes cloned items)
   */
  const [index, setIndex] = useState(3);

  /**
   * Controls animation toggle (used for seamless loop reset)
   */
  const [transition, setTransition] = useState(true);

  /**
   * Responsive flag
   * true  -> mobile view
   * false -> desktop view
   */
  const [isMobile, setIsMobile] = useState(false);

  /**
   * DEVICE DETECTION
   * -----------------
   * Updates layout based on screen width
   */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /**
   * ITEMS PER VIEW
   * ----------------
   * Controls how many cards are visible
   */
  const perView = isMobile ? 1 : 3;

  /**
   * EXTENDED DATA (CLONES)
   * -----------------------
   * Adds items at beginning and end to simulate infinite loop.
   *
   * Example:
   * [last items] + [original data] + [first items]
   */
  const extended = [
    ...data.slice(-perView),
    ...data,
    ...data.slice(0, perView),
  ];

  /**
   * NAVIGATION HANDLERS
   */
  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  /**
   * LOOP FIX LOGIC
   * ----------------
   * Resets index when reaching cloned edges
   * without visible jump (by disabling transition briefly)
   */
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

  /**
   * RE-ENABLE TRANSITION
   * ---------------------
   * After instant jump, restore animation
   */
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  /**
   * TRANSLATION STEP
   * -----------------
   * Percentage shift based on visible items
   */
  const translate = 100 / perView;

  return (
    /* ================= SECTION ================= */
    <section className="w-full h-screen flex items-center bg-white font-sans px-4 sm:px-6 md:px-16 overflow-hidden">

      {/* ================= CONTAINER ================= */}
      <div className="max-w-7xl mx-auto w-full">

        {/* ================= HEADER ================= */}
        <div className={`mb-10 md:mb-16 flex ${isMobile ? "flex-col items-center text-center" : "justify-between items-end"}`}>

          {/* TITLE */}
          <h2 className="text-[28px] sm:text-[36px] md:text-[64px] font-semibold leading-[1.05] tracking-tight">
            Loved by
            <span className="block bg-linear-to-r from-purple-500 via-blue-500 to-purple-400 text-transparent bg-clip-text">
              crypto traders
            </span>
          </h2>

          {/* DESKTOP CONTROLS */}
          {!isMobile && (
            <div className="flex gap-3 mt-6 md:mt-0">

              {/* PREVIOUS BUTTON */}
              <button onClick={prev} className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
                <ChevronLeft />
              </button>

              {/* NEXT BUTTON */}
              <button onClick={next} className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
                <ChevronRight />
              </button>

            </div>
          )}
        </div>

        {/* ================= SLIDER ================= */}
        <div className="overflow-hidden flex justify-center">

          {/* TRACK */}
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

                {/* CARD */}
                <div
                  className={`
                    ${isMobile ? "max-w-90 w-full" : ""}
                    p-6 md:p-8 
                    rounded-3xl 
                    border border-gray-200 
                    shadow-sm hover:shadow-2xl 
                    transition flex flex-col justify-between
                  `}
                >

                  {/* QUOTE ICON */}
                  <Quote className="text-purple-500 mb-4 md:mb-6" size={24} />

                  {/* RATING */}
                  <div className="flex gap-1 text-purple-500 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                    {item.text}
                  </p>

                  {/* USER INFO */}
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

        {/* ================= MOBILE CONTROLS ================= */}
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