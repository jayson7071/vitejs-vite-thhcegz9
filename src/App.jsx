import React from 'react';

export default function App() {
  // Replace these placeholders with your actual details
  const personalInfo = {
    name: "J Jayson",
    role: "1st CSE student",
    bio: "",
    email: "jaysonjerome11@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  };

  const skills = ["React", "JavaScript (ES6+)", "Tailwind CSS", "Git & GitHub", "HTML5 & CSS3", "REST APIs"];

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio application built with React and Tailwind CSS to showcase my engineering skills and projects.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      githubLink: "#" // You will update this after pushing to GitHub
    },
    {
      title: "Interactive RnD Dashboard",
      description: "A conceptual user interface designed for data visualization and tracking research development metrics.",
      tech: ["JavaScript", "CSS Grid", "Chart.js"],
      githubLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white shadow-sm z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600 tracking-tight">{personalInfo.name}.</span>
          <div className="space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 flex flex-col justify-center items-start min-h-[70vh]">
        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Welcome to my space</span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">{personalInfo.name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">{personalInfo.role}</h2>
        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
          {personalInfo.bio}
        </p>
        <div className="flex space-x-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition shadow-md">
            View My Work
          </a>
          <a href="#contact" className="border border-gray-300 hover:border-gray-400 bg-white font-medium px-6 py-3 rounded-lg transition">
            Let's Talk
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white border-t border-b border-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Technical Core</h2>
          <p className="text-gray-500 mb-10">Technologies and tools I work with daily.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-center space-x-3 hover:shadow-sm transition">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="font-medium text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Projects</h2>
        <p className="text-gray-500 mb-10">A selection of my recent engineering and design work.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
                  View Code Source &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Whether you want to discuss RnD opportunities, design work, or just say hello, my inbox is open.
          </p>
          <a href={`mailto:${personalInfo.email}`} className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition shadow-lg mb-8">
            Send an Email
          </a>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
          </div>
          <p className="text-xs text-gray-600 mt-12">&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}
