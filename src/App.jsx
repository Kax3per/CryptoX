import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import AppShowcase from "./components/AppShowcase";
import AppDescription from "./components/AppDescription";
import EndSections from "./components/Footer";
import Loader from "./components/LoadingScreen";

import phoneImg from "./assets/phone.png";
import dashboardImg from "./assets/dashboard.png";
import appImg from "./assets/app-light.png";

import { useEffect, useState } from "react";

/**
 * App Component
 * --------------
 * Root component responsible for:
 * - Preloading critical assets (images, logos)
 * - Controlling initial loading state
 * - Rendering full page layout after assets are ready
 *
 * UX Strategy:
 * - Prevent layout shifts (CLS)
 * - Ensure smooth first paint
 * - Display loader until assets are ready
 */
function App() {

  /**
   * Loading state
   * false -> assets still loading
   * true  -> ready to render app
   */
  const [loaded, setLoaded] = useState(false);

  /**
   * ASSET PRELOADING
   * -----------------
   * Preloads:
   * - Local images (hero, dashboard, app)
   * - External logos (partners section)
   *
   * Ensures:
   * - No flickering
   * - Smooth animations on first render
   */
  useEffect(() => {

    /**
     * List of assets to preload
     */
    const images = [
      phoneImg,
      dashboardImg,
      appImg,

      // External logos (partners)
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
     * Counter for loaded assets
     */
    let loadedCount = 0;

    /**
     * Preload logic
     * --------------
     * Uses native Image API
     * Handles both success and error (fail-safe)
     */
    images.forEach((src) => {
      const img = new Image();
      img.src = src;

      img.onload = img.onerror = () => {
        loadedCount++;

        /**
         * When all assets are processed → unlock app
         */
        if (loadedCount === images.length) {
          setLoaded(true);
        }
      };
    });

  }, []);

  /**
   * LOADING STATE RENDER
   * ---------------------
   * Blocks UI until assets are ready
   */
  if (!loaded) return <Loader />;

  /**
   * MAIN APP RENDER
   * ----------------
   * Sequential layout of sections
   */
  return (
    <div className="w-full overflow-x-hidden flex flex-col gap-20 md:gap-0">

      {/* NAVIGATION */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* FEATURES */}
      <Features />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* PARTNERS / INTEGRATIONS */}
      <Partners />

      {/* PRODUCT DESCRIPTION */}
      <AppDescription />

      {/* APP SHOWCASE */}
      <AppShowcase />

      {/* FOOTER */}
      <EndSections />

    </div>
  );
}

export default App;