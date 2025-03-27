import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const achievements = [
  {
    image: "/1000.jpg", // Replace with your actual image path
    title: "DoeWeb",
    highlight: "Employee of the month.",
    description:
      "Though I was only an intern, I was highly praised at work and given promotion.",
  },
  {
    image: "/3033279.jpg", // Replace with your actual image path
    title: "Hackathon",
    highlight: "DeveloperWeek NYC 2018 Hackathon.",
    description:
      "This was an incredible experience creating the whole project in 24 hours.",
  },
  {
    image: "/6505995.jpg", // Replace with your actual image path
    title: "Awwwards",
    highlight: "Honorable mention.",
    description:
      "Being noticed means much to me and my client for whom the site was developed.",
  },
  {
    image: "/images/achievement4.jpg", // Replace with your actual image path
    title: "Web Summit",
    highlight: "Speaker.",
    description:
      "Speaking at Web Summit is stunning, encouraging, and inspiring at the same time.",
  },
];

export default function AchievementsPage() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8 font-serif">
        Achievements
      </h2>
      <div className="relative">
        {/* Fancy Left Navigation */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 shadow-lg"
        >
          <ChevronLeft className="w-8 h-8 text-gray-800 dark:text-gray-100" />
        </button>

        {/* Carousel Container (hides scrollbar) */}
        <div
          ref={carouselRef}
          className="overflow-x-scroll no-scrollbar flex gap-6 px-8"
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 h-96 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg p-8 text-center text-gray-800 dark:text-gray-100 hover:shadow-2xl transition transform hover:-translate-y-2 font-serif"
            >
              {/* Achievement Image */}
              <div className="relative w-full h-56">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-none"
                />
              </div>
              <h3 className="text-2xl font-semibold mt-4">{achievement.title}</h3>
              <p className="font-bold mt-2">{achievement.highlight}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fancy Right Navigation */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 shadow-lg"
        >
          <ChevronRight className="w-8 h-8 text-gray-800 dark:text-gray-100" />
        </button>
      </div>
    </div>
  );
}
