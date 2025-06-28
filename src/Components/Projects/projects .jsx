import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';


const projectList = [
  {
    title: 'Roommate Finder App',
    description: 'A web platform where users can find roommates based on preferences. Includes like system, authentication, profile restrictions, and dashboard.',
    images: [
      'https://i.ibb.co/tTPmjLcL/Screenshot-2025-06-28-135054.png',
      'https://i.ibb.co/WQ1d8y1/Screenshot-2025-06-28-135134.png',
      'https://i.ibb.co/Vc0mLsWC/Screenshot-2025-06-28-135157.png',
      'https://i.ibb.co/vCwm7PW1/Screenshot-2025-06-28-135217.png',
    ],
    liveLink: 'https://roommate-finder-5dc65.web.app/',
    githubLink: 'https://github.com/stackbymazed/Roommate-Finder-Client',
  },
  {
    title: 'Online Study Platform',
    description: 'A group study app where friends can create, submit and grade assignments. Includes Firebase Auth, JWT, and a responsive UI.',
    images: [
      'https://i.ibb.co/3yNSKrZx/Screenshot-2025-06-28-135823.png',
      'https://i.ibb.co/Y45KnMcq/Screenshot-2025-06-28-135855.png',
      'https://i.ibb.co/39fnbCjw/Screenshot-2025-06-28-135914.png',
    ],
    liveLink: 'https://assignment-11-e732e.web.app/',
    githubLink: 'https://github.com/stackbymazed/Online-Group-Study-Client',
  },
  // Add more projects here in same format
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-10">My Projects</h2>
        <div className="grid gap-8 grid-cols-1">
          {
            projectList.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;
