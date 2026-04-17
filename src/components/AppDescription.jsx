import React from "react";
import { TrendingUp, Shield, Zap } from "lucide-react";

const AppDescription = () => {
  return (
    <section className="w-full mt-50 min-h-screen flex items-center bg-white font-sans px-6 md:px-16 overflow-hidden">

      <div className="max-w-7xl mx-auto w-full">

        {/* TOP */}
        <div className="max-w-4xl mb-20">

          <h2 className="text-[42px] md:text-[64px] font-semibold leading-[1.05] tracking-tight">
            Everything you need
            <span className="block bg-gradient-to-r from-purple-500 via-blue-500 to-purple-400 text-transparent bg-clip-text">
              in one crypto platform
            </span>
          </h2>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            Our platform is designed to simplify the entire crypto experience —
            from buying and selling assets to managing your long-term portfolio.
            Whether you're just getting started or actively trading every day,
            everything is built to be intuitive, fast and reliable.
          </p>

          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            With real-time data, seamless transactions and a clean modern interface,
            you can focus on what matters most — making better decisions and growing
            your assets without unnecessary complexity.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition duration-300">

            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
              <TrendingUp />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Real-time trading
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Monitor live market trends and execute trades instantly with zero friction.
              Advanced charts and insights help you stay ahead of price movements and
              react faster than ever before.
            </p>

            <p className="text-gray-400 mt-4 text-sm">
              Built for both casual users and professional traders.
            </p>

          </div>

          {/* CARD 2 */}
          <div className="p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition duration-300">

            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
              <Shield />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Secure by design
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Your funds are protected with industry-grade security, including encryption,
              multi-factor authentication and advanced monitoring systems that keep your
              assets safe at all times.
            </p>

            <p className="text-gray-400 mt-4 text-sm">
              Security is built into every layer of the product.
            </p>

          </div>

          {/* CARD 3 */}
          <div className="p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition duration-300">

            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
              <Zap />
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Lightning fast performance
            </h3>

            <p className="text-gray-500 leading-relaxed">
              Experience ultra-fast execution speeds and smooth interactions across
              the entire app. Every action feels instant, whether you're swapping tokens
              or checking your portfolio.
            </p>

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