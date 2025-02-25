import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const workExperience = [
  {
    title: "Illustrator and Graphic Designer",
    description:
      "Every day, I work with exciting projects that challenge my artistic abilities and push me to explore new techniques. One of the best aspects of my work here is the collaboration with a team of talented individuals.",
    recommendations: "RECOMMENDATIONS",
  },
  {
    title: "Freelance Illustrator",
    description:
      "From illustrating for children's books and editorial publications to creating visual assets for marketing campaigns and brand identities, each project presented a unique set of challenges and creative possibilities.",
    recommendations: "RECOMMENDATIONS",
  },
  {
    title: "Graphic Designer Intern",
    description:
      "Here, I gained invaluable experience and developed a strong foundation in the field of graphic design. One of my responsibilities was to assist the senior graphic designers in creating marketing materials for clients.",
    recommendations: "RECOMMENDATIONS",
  },
];

const testimonials = [
  {
    image: "/images/person1.jpg",
    quote:
      "An amazing experience working with this team! The creativity and professionalism exceeded my expectations.",
    name: "Jane Doe",
    title: "Creative Director, XYZ Agency",
  },
  {
    image: "/images/person2.jpg",
    quote:
      "The designs were not only visually appealing but also effective in communicating our brand’s message.",
    name: "Michael Smith",
    title: "Marketing Lead, ABC Corp",
  },
  {
    image: "/images/person3.jpg",
    quote:
      "I highly recommend this service to anyone looking for top-tier illustration and design work.",
    name: "Emily Johnson",
    title: "CEO, DesignWave",
  },
];

export default function ExperiencePage() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="py-16 bg-white px-8">
      {/* Testimonials Section */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 font-serif">Testimonials</h2>
      </div>

      {/* Testimonial Carousel */}
      <div className="relative mt-12">
        {/* Left Navigation */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-100 rounded-full hover:bg-gray-200 shadow-lg"
        >
          <ChevronLeft className="w-8 h-8 text-gray-800 font-serif" />
        </button>

        {/* Testimonial Cards Container */}
        <div
          ref={carouselRef}
          className="overflow-x-scroll no-scrollbar flex gap-6 px-12"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 bg-gray-100 p-6 rounded-lg shadow-md flex items-center gap-4 transition transform hover:scale-105"
            >
              {/* Profile Image */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              {/* Testimonial Text */}
              <div>
                <Quote className="text-gray-400 w-6 h-6 mb-2" />
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <h4 className="text-gray-900 font-semibold mt-2">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-100 rounded-full hover:bg-gray-200 shadow-lg"
        >
          <ChevronRight className="w-8 h-8 text-gray-800" />
        </button>
      </div>
    </div>
  );
}
