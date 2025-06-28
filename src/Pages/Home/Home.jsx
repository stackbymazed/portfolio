import React from 'react';
import Banner from '../../Components/Banner/Banner';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Skills from '../../Components/Skills/Skills';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import Projects from '../../Components/Projects/projects ';
import EducationSection from '../../Components/EducationSection/EducationSection';
import Contact from '../Contact/Contact';
import ParticlesBackground from '../../Components/ParticlesBackground/ParticlesBackground';

const Home = () => {
    return (
        <div  className="relative overflow-hidden">
            <ParticlesBackground></ParticlesBackground>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <EducationSection></EducationSection>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;