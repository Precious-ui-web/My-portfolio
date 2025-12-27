 function Projects() {
  const projects = [
    {
      name: "Personal Portfolio",
      description: "A personal portfolio website built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/yourusername/my-portfolio",
      live: "https://my-portfolio.netlify.app",
    },
    {
      name: "Currency Converter",
      description: "A React app that converts currencies using live exchange rates.",
      technologies: ["React", "API Integration", "Tailwind CSS"],
      github: "https://github.com/precious-ui-web/currency-converter",
      live: "https://currency-converter.netlify.app",
    },
    {
      name: "Weather App",
      description: "Real-time weather application with location-based forecasting.",
      technologies: ["React", "Weather API", "Responsive Design"],
      github: "https://github.com/precious-ui-web/weather-app",
      live: "https://weather-app.netlify.app",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Explore some of my recent work and side projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-7 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-pink-500"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-white text-xl md:text-2xl mb-3 group-hover:text-pink-400 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-gray-300 mb-5 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 hover:bg-purple-600 text-purple-400 text-xs md:text-sm rounded-full transition-colors duration-300 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-gray-700 hover:bg-purple-600 text-white font-medium rounded-lg text-sm transition-all duration-300 text-center border border-gray-600 hover:border-purple-500"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-lg text-sm transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;