import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';


const projectList = [
  {
    title: 'Roommate Finder App',
    description: 'A web platform where users can find roommates based on preferences. Includes like system, authentication, profile restrictions, and dashboard.',
    images: [
      'https://i.ibb.co/QYJ1pPh/1.png',
      'https://i.ibb.co/NrrsG0Z/2.png',
      'https://i.ibb.co/XzBxRv3/3.png',
      'https://i.ibb.co/HNmdVVy/4.png',
    ],
    liveLink: 'https://roommate-finder.web.app',
    githubLink: 'https://github.com/yourname/roommate-finder-client',
  },
  {
    title: 'Online Study Platform',
    description: 'A group study app where friends can create, submit and grade assignments. Includes Firebase Auth, JWT, and a responsive UI.',
    images: [
      'https://i.ibb.co/wdzwX7W/study-1.png',
      'https://i.ibb.co/YdcvW6j/study-2.png',
      'https://i.ibb.co/k4cNhh0/study-3.png',
      'https://i.ibb.co/bHkrsqZ/study-4.png',
    ],
    liveLink: 'https://study-with-friends.web.app',
    githubLink: 'https://github.com/yourname/group-study-client',
  },
  // Add more projects here in same format
];

const Projects = () => {
  return (
    <section id="projects" className="bg-base-100 py-16 px-4">
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
