import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Skills from '../../Components/Skills/Skills';

import EducationSection from '../../Components/EducationSection/EducationSection';
import Contact from '../Contact/Contact';

import Projects from '../../Components/Projects/projects ';
// import { ParticlesBackground } from '../../Components/ParticlesBackground/ParticlesBackground';

const Home = () => {
  return (
    <div >
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

