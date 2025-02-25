'use client';

import './globals.css'; // Ensure the relative path is correct

import About from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Hero from '@/components/Hero';

import { motion, AnimatePresence } from 'framer-motion';
import AchievementsPage from '@/components/Achievements';
import ExperiencePage from '@/components/Testimonial';
import AboutMe from '@/components/AboutMe';
import WorkExperience from '@/components/WorkExperience';
import FeaturedProjects from '@/components/FeaturedProject';

export default function HomePage() {
  return (
    <>
      {/* Global Custom Scrollbar Styles */}
      <style jsx global>{`
        /* Custom Scrollbar Styles for WebKit browsers */
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 10px;
          border: 3px solid #f1f1f1;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: #555;
        }
        /* Firefox scrollbar styling */
        body {
          scrollbar-width: thin;
          scrollbar-color: #888 #f1f1f1;
        }
      `}</style>

      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Hero Section */}
          <section id="hero">
            <Hero />
          </section>

          {/* About Section */}
          <section id="A">
            <AboutMe /> 
          </section> 

{/* About Section */}
<section id="A">
            <FeaturedProjects /> 
          </section> 


          {/* About Section */}
          {/*<section id="A">
            <WorkExperience /> 
          </section> */}


           {/* About Section */}
          {/* <section id="A">
            <ExperiencePage /> 
          </section> */}

          {/* About Section */}
          <section id="A">
            <AchievementsPage /> 
          </section> 

          {/* Projects Section */}
          {/* <section id="projects">
            <Projects /> 
          </section> */}
        </motion.main>
      </AnimatePresence>
    </>
  );
}
