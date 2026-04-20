const Loader = () => {
  return (
    /**
     * FULLSCREEN OVERLAY
     * -------------------
     * Covers entire viewport during loading state.
     * Prevents user interaction with underlying content.
     */
    <div className="fixed inset-0 bg-white flex items-center justify-center z-999">

      {/* CENTERED CONTENT */}
      {/* Vertically and horizontally centered loader */}
      <div className="flex flex-col items-center gap-4">

        /**
         * SPINNER
         * --------
         * Circular loading indicator using border animation.
         * - border-gray-200 → base ring
         * - border-t-purple-500 → animated highlight
         * - animate-spin → continuous rotation
         */
        <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-500 rounded-full animate-spin"></div>

        /**
         * LOADING TEXT
         * -------------
         * Provides minimal feedback to user.
         * Keeps UI informative during loading state.
         */
        <p className="text-sm text-gray-500">Loading...</p>

      </div>
    </div>
  );
};

export default Loader;