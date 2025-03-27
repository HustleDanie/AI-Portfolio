// Footer.js
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Hustle | AI</h2>
          <p className="mt-2 text-gray-400">Showcasing projects and expertise in  Artificial Intelligence</p>
        </div>

        {/* Social Media Links */}
        <div className="mb-6 space-x-6">
          <a href="https://www.linkedin.com/in/maduabuchi-uche-a444391a9" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="inline-block text-2xl hover:text-blue-600 transition-colors" />
          </a>
          <a href="https://github.com/hustledanie" target="_blank" rel="noopener noreferrer">
            <FaGithub className="inline-block text-2xl hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://twitter.com/DanieHustl?s=09" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="inline-block text-2xl hover:text-blue-400 transition-colors" />
          </a>
        </div>

        {/* Qck Links */}
        <div className="mb-6">
          <a href="#" className="text-gray-400 hover:text-white mx-4">Home</a>
          <a href="/portfolio" className="text-gray-400 hover:text-white mx-4">Portfolio</a>
          
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <p className="text-gray-400">
            <FaEnvelope className="inline-block mr-2" />
            <a href="mailto:your-email@example.com" className="hover:text-white">danieluche2018@gmail.com</a>
          </p>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm">
          <p>2025 Hustle | AI</p>
        </div>
      </div>
    </footer>
  );
}
