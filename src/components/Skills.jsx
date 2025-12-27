const skillsData = {
  "Frontend Development": ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Vite"],
  "Backend Development": ["Node.js", "Express", "MongoDB", "REST APIs"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code", "Netlify", "Vercel"],
};

 function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-7 border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <h3 className="text-xl md:text-2xl font-bold text-purple-400 mb-5 group-hover:text-pink-300 transition-colors duration-300">
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-gray-200 hover:text-white rounded-full text-sm md:text-base font-medium transition-all duration-300 border border-gray-600 hover:border-pink-500 cursor-default transform hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Overview */}
        <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6">Proficiency Levels</h3>
          <div className="space-y-6">
            {[
              { name: "Frontend Development", level: 95 },
              { name: "Backend Development", level: 80 },
              { name: "Problem Solving", level: 90 },
              { name: "UI/UX Design", level: 75 },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">{item.name}</span>
                  <span className="text-pink-400 font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;