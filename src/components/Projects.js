import { FaGithub } from "react-icons/fa"; // Import GitHub icon

export default function Projects() {
  const projects = [
    {
      title: "Sentiment Analysis",
      description:
        "A system that classifies emotions or opinions in text as positive, negative, or neutral. Used to analyze customer feedback and social media posts.",
      image: "/robot dog.jpg", // Replace with your image path
      link: "#",
      github: "https://github.com/your-repo/sentiment-analysis",
    },
    {
      title: "Chatbot Development",
      description:
        "An intelligent chatbot capable of understanding user queries and providing meaningful responses using advanced NLP techniques.",
      image: "/robot dog.jpg", // Replace with your image path
      link: "#",
      github: "https://github.com/your-repo/chatbot-development",
    },
    {
      title: "Language Translation System",
      description:
        "A neural machine translation system for translating text between multiple languages with high accuracy.",
      image: "/robot dog.jpg", // Replace with your image path
      link: "#",
      github: "https://github.com/your-repo/language-translation",
    },
    {
      title: "Text Summarization",
      description:
        "An NLP tool that generates concise summaries from lengthy documents while preserving key information.",
      image: "/robot dog.jpg", // Replace with your image path
      link: "#",
      github: "https://github.com/your-repo/text-summarization",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
          Featured Projects
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-100 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* View Project Button */}
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>

                {/* GitHub Icon */}
                <div className="mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
