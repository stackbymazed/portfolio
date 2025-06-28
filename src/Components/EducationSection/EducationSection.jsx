import React from 'react';
import { FaUniversity, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const EducationSection = () => {
  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-primary mb-8">Education</h2>
        <div className="bg-base-100 shadow-lg rounded-lg p-6 text-left border-l-4 border-primary">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <FaUniversity className="text-3xl text-primary" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Diploma in Computer Science & Technology</h3>
                <p className="text-gray-600 font-medium">
                  Institute of Computer Science and Technology (ICST), Feni
                </p>
                <p className="text-sm text-gray-500 mt-1">Session: 2022–2023</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm sm:text-base">
              <FaCalendarAlt />
              <span>2022 — Present</span>
            </div>
          </div>

          <ul className="list-disc pl-10 mt-4 text-gray-700 leading-relaxed">
            <li>Currently enrolled in the final year of CST diploma program.</li>
            <li>Solid foundation in programming, data structures, and web development.</li>
            <li>Experienced in building real-world projects using HTML, CSS, JS, React, Node.js, MongoDB, etc.</li>
            <li>Participated in coding contests, tech fairs, and collaborative software projects.</li>
            <li>Aspiring to become a skilled full-stack developer through continuous learning and practice.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
