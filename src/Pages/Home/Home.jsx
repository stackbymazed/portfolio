import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Skills from '../../Components/Skills/Skills';

import EducationSection from '../../Components/EducationSection/EducationSection';
import Contact from '../Contact/Contact';

import Projects from '../../Components/Projects/projects ';

const Home = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <Banner />
      <AboutMe />
      <Skills />
      <EducationSection />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

