import { motion } from "framer-motion";

const experiences = [
  { year: "2015", title: "MIT", description: "Undergraduate Project in Computer Science and Engineering, A+" },
  { year: "2015", title: "University of Boston", description: "Bachelor of Science in Computer Science. Courses in programming languages, compiler design, data structures, algorithms, and theory of computation." },
  { year: "2016", title: "DoeWeb", description: "Software Development Intern in a US IT company. Used AngularJS, PHP, and basic frameworks." },
  { year: "2015", title: "DiveNet", description: "Backend developer in a SF hardware startup creating smart equipment for divers. Used Node.js and PostgreSQL, collaborating with engineers and security specialists." },
  { year: "2017", title: "WebLook", description: "Full-Stack developer at WebLook web agency in SF. Created and maintained websites and mobile apps for clients from small businesses to enterprises." },
  { year: "2015", title: "Remote Freelancer", description: "Gained experience from previous jobs and started freelancing. Since 2018, collaborated with global companies as a UI/UX designer and full-stack developer." },
];

export default function WorkExperience() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Title Section */}
      <motion.h1
        className="text-4xl font-extrabold text-center text-gray-800 mb-12 font-serif"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h1>

      {/* Experience List */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 font-serif">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="flex space-x-6 items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 font-serif"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Year Badge */}
            <div className="flex-shrink-0 w-16 h-16 bg-gray-100 flex items-center justify-center rounded-full text-gray-800 text-xl font-bold">
              {exp.year}
            </div>

            {/* Experience Details */}
            <div>
              <h2 className="text-xl font-semibold text-purple-700">{exp.title}</h2>
              <p className="text-gray-700 mt-1">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
