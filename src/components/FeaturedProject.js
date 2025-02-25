import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Autonomous Drone Navigation",
    description:
      "A deep learning system for real-time drone path planning and obstacle avoidance using reinforcement learning.",
    tags: ["PyTorch", "Computer Vision", "SLAM", "Reinforcement Learning"],
    image: "/100.jpg",
  },
  {
    title: "3D Object Reconstruction",
    description:
      "A neural network that reconstructs 3D objects from multiple 2D images, enhancing perception in robotics.",
    tags: ["TensorFlow", "3D Vision", "Multi-View Learning", "GANs"],
    image: "/1000.jpg",
  },
  {
    title: "Human-Object Interaction Recognition",
    description:
      "A transformer-based model that detects and interprets interactions between humans and objects in videos.",
    tags: ["Transformers", "NLP+Vision", "Action Recognition", "Video AI"],
    image: "/6505995.jpg",
  },
  {
    title: "Explainable AI for Medical Imaging",
    description:
      "An explainable deep learning system for diagnosing medical images with interpretable visual explanations.",
    tags: ["Explainable AI", "Medical Imaging", "CNNs", "Attention Mechanisms"],
    image: "/10312453.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16 max-w-7xl mx-auto font-serif">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center mb-12">
        Featured Deep Learning Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Project Image */}
            <div className="relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            {/* Project Title */}
            <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>
            {/* Project Description */}
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {project.description}
            </p>
            {/* Tags */}
            <div className="flex flex-wrap mt-4 gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Action Buttons */}
            <div className="mt-4 flex gap-4">
              <button className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
                Learn More
              </button>
              <button className="border-2 border-gray-800 dark:border-gray-700 text-gray-800 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition">
                GitHub Repo
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* See More Projects Button */}
      <div className="mt-10 text-center">
        <button className="bg-blue-600 dark:bg-blue-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          See More Projects
        </button>
      </div>
    </div>
  );
}
