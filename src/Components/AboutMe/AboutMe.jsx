import React from 'react';

const AboutMe = () => {
    return (
        <section id="about" className=" py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center bg-gray-50">
                <h2 className="text-4xl font-bold text-primary mb-8">About Me</h2>

                <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                    Hello! I'm <span className="font-semibold text-gray-900">Majedul Islam Nayem</span>, a passionate <span className="text-primary font-semibold">Front-End Developer</span> dedicated to crafting beautiful and user-friendly digital experiences. With strong expertise in <span className="font-semibold">React</span>, <span className="font-semibold">Tailwind CSS</span>, and modern JavaScript, I transform designs into seamless, high-performance websites.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                    My ambition is to grow into a skilled <span className="text-primary font-semibold">Full-Stack Developer</span>, and I am actively exploring backend technologies such as <span className="font-semibold">Node.js</span>, <span className="font-semibold">Express</span>, <span className="font-semibold">MongoDB</span>, along with authentication using <span className="font-semibold">Firebase</span> and <span className="font-semibold">JWT</span>. Outside of web development, I enjoy learning <span className="font-semibold">Python</span> to diversify my skill set.
                </p>

                <a
                    href="/cv.pdf"
                    download
                    className="btn btn-primary px-10 py-3 text-lg font-semibold inline-flex items-center justify-center mb-6"
                >
                    Download Resume
                </a>


            </div>
        </section>
    );
};

export default AboutMe;
