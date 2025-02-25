export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl w-full text-center animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Hi, I am <span className="text-blue-500">Uche Daniel.</span>
        </h1>
        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-serif">
          Creative AI Engineer Specializing in Deep Learning Technologies.
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-serif">
          I work on cutting-edge deep learning research, designing systems that learn from complex data to produce actionable insights. My focus is on harnessing sophisticated neural architectures to unlock new possibilities in artificial intelligence.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-6">
      <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-base sm:text-lg text-white font-semibold rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300">
  Download Resume
</button>

        <div className="flex gap-4">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-125"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.762-1.606-2.666-.303-5.466-1.334-5.466-5.931 0-1.31.47-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.302 1.23a11.51 11.51 0 013.004-.404c1.02.005 2.045.137 3.003.404 2.294-1.553 3.3-1.23 3.3-1.23.653 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.608-2.805 5.625-5.475 5.922.431.371.815 1.103.815 2.222 0 1.604-.014 2.896-.014 3.293 0 .32.217.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-125"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8.19 20H5.228V8.95H8.19V20zM6.71 7.562c-.983 0-1.779-.797-1.779-1.778S5.728 4.005 6.71 4.005c.98 0 1.777.797 1.777 1.779s-.797 1.778-1.777 1.778zM20 20h-2.959v-5.461c0-1.303-.026-2.981-1.818-2.981-1.822 0-2.1 1.422-2.1 2.891V20H10.14V8.95h2.841v1.506h.04c.394-.743 1.355-1.525 2.79-1.525 2.981 0 3.531 1.961 3.531 4.513V20z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-125"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.917 4.917 0 00-8.384 4.482A13.958 13.958 0 011.671 3.149a4.917 4.917 0 001.523 6.556 4.902 4.902 0 01-2.23-.616v.062a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.92 4.92 0 004.6 3.419A9.867 9.867 0 010 19.54a13.944 13.944 0 007.548 2.213c9.058 0 14.009-7.513 14.009-14.02 0-.213-.005-.426-.014-.637A9.935 9.935 0 0024 4.557z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
