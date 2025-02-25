import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 sm:px-6 py-12 min-h-screen w-full font-serif">
      {/* Title with Animated Effect */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Biography
      </motion.h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Left Column - Personal Info */}
        <motion.div
          className="md:col-span-1 space-y-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Personal Info */}
          <div>
            <h2 className="flex items-center text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              ✏️ Personal Info
            </h2>
            <p><strong>Name:</strong> Alex Johnson</p>
            <p><strong>Date of Birth:</strong> 05.11.1988</p>
            <p><strong>Email:</strong> alex.johnson@deeplearn.ai</p>
            <p><strong>Phone:</strong> +1 (123) 456 7890</p>
            <p><strong>City:</strong> San Francisco, CA</p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="flex items-center text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              ⭐ Main Skills
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Neural Network Architecture</li>
              <li>TensorFlow &amp; PyTorch</li>
              <li>Python</li>
              <li>Data Preprocessing</li>
              <li>Docker &amp; AWS</li>
              <li>HPC &amp; MLOps</li>
              <li>Computer Vision &amp; NLP</li>
            </ul>
          </div>

          {/* Download CV Button */}
          <a
            href="/cv.pdf"
            download
            className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Download CV
          </a>
        </motion.div>

        {/* Right Column - Biography */}
        <motion.div
          className="md:col-span-2 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Hello!</strong> I'm <strong>Uche Maduabuchi Daniel</strong>, a dedicated deep learning engineer focused on advanced neural architectures. I've spent years researching novel techniques in computer vision and natural language processing. My passion lies in bridging the gap between cutting-edge AI research and real-world solutions, helping companies harness the power of deep learning to solve complex problems.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            When I'm not building neural networks, you can find me reading AI research papers, optimizing HPC pipelines, or collaborating with cross-functional teams to deliver scalable AI solutions.
          </p>

          {/* Images with Sophisticated Border Style */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-double border-4 border-indigo-500 shadow-2xl"
            >
              <Image
                src="/1000.jpg" // Replace with your image path
                width={250}
                height={250}
                className="object-cover"
                alt="Dr. Alex Johnson"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-double border-4 border-indigo-500 shadow-2xl"
            >
              <Image
                src="/1000.jpg" // Replace with your image path
                width={250}
                height={250}
                className="object-cover"
                alt="Alex working on HPC pipeline"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
