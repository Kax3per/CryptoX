import React from "react";
import { TrendingUp, Shield, Zap } from "lucide-react";

/**
 * AppDescription Component
 * ------------------------
 * Marketing / feature section presenting core value proposition
 * of the crypto platform.
 *
 * Responsibilities:
 * - Communicates product benefits clearly
 * - Highlights key features (trading, security, performance)
 * - Uses visual hierarchy (headline → description → feature cards)
 *
 * UX Concept:
 * Designed to build trust and understanding:
 * - Strong headline for attention
 * - Supporting paragraphs for clarity
 * - Feature cards for scannable content
 */
const AppDescription = () => {
  return (
    /* ================= SECTION ================= */
    <section className="w-full mt-50 min-h-screen flex items-center bg-white font-sans px-6 md:px-16 overflow-hidden">

      {/* ================= CONTAINER ================= */}
      <div className="max-w-7xl mx-auto w-full">

        {/* ================= TOP CONTENT ================= */}
        {/* Intro section with headline and description */}
        <div className="max-w-4xl mb-20">

          {/* HEADLINE */}
          {/* Main value proposition with gradient emphasis */}
          <h2 className="text-[42px] md:text-[64px] font-semibold leading-[1.05] tracking-tight">
            Everything you need
            <span className="block bg-linear-to-r from-purple-500 via-blue-500 to-purple-400 text-transparent bg-clip-text">
              in one crypto platform
            </span>
          </h2>

          {/* DESCRIPTION */}
          {/* Explains product purpose and usability */}
          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            Our platform is designed to simplify the entire crypto experience —
            from buying and selling assets to managing your long-term portfolio.
            Whether you're just getting started or actively trading every day,
            everything is built to be intuitive, fast and reliable.
          </p>

          {/* EXTENDED DESCRIPTION */}
          {/* Reinforces value through benefits (data, speed, UX) */}
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            With real-time data, seamless transactions and a clean modern interface,
            you can focus on what matters most — making better decisions and growing
            your assets without unnecessary complexity.
          </p>

        </div>

        {/* ================= FEATURES GRID ================= */}
        {/* Displays core features in card format */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          {/* Feature: Trading */}
          <div className="p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition duration-300">

            {/* ICON */}
            {/* Visual indicator for trading feature */}
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
              <TrendingUp />
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-4">
              Real-time trading
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-500 leading-relaxed">
              Monitor live market trends and execute trades instantly with zero friction.
              Advanced charts and insights help you stay ahead of price movements and
              react faster than ever before.
            </p>

            {/* SUPPORT TEXT */}
            <p className="text-gray-400 mt-4 text-sm">
              Built for both casual users and professional traders.
            </p>

          </div>

          {/* CARD 2 */}
          {/* Feature: Security */}
          <div className="p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition duration-300">

            {/* ICON */}
            {/* Represents safety and protection */}
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
              <Shield />
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-4">
              Secure by design
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-500 leading-relaxed">
              Your funds are protected with industry-grade security, including encryption,
              multi-factor authentication and advanced monitoring systems that keep your
              assets safe at all times.
            </p>

            {/* SUPPORT TEXT */}
            <p className="text-gray-400 mt-4 text-sm">
              Security is built into every layer of the product.
            </p>

          </div>

          {/* CARD 3 */}
          {/* Feature: Performance */}
          <div className="p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition duration-300">

            {/* ICON */}
            {/* Represents speed and performance */}
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
              <Zap />
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-4">
              Lightning fast performance
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-500 leading-relaxed">
              Experience ultra-fast execution speeds and smooth interactions across
              the entire app. Every action feels instant, whether you're swapping tokens
              or checking your portfolio.
            </p>

            {/* SUPPORT TEXT */}
            <p className="text-gray-400 mt-4 text-sm">
              Optimized for speed on every device.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AppDescription;