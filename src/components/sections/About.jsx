import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const About = () => {
  const frontendskills = [
    "ReactJs",
    "VanillaJs",
    "TailwindCSS",
    "BootStrap",
    "CSS",
    "HTML",
    "DOM Manipulation",
    "Flask",
  ];
  const backendskills = [
    "NodeJS",
    "ExpressJs",
    "MongoDB",
    "RESTApi",
    "PostMan API Testing",
    "Java Servlets",
  ];
  const MERNstackskills = ["React-Router", "React-Query", "JWT", "oAuth"];
  const dataEngineering = [
    "SQL",
    "PL/SQL",
    "Oracl RDBMS",
    "MySQL RDBMS",
    "PostgreSQL",
  ];

  const DataScience = [
    "ScikitLearn",
    "ScikitMultiflow",
    "MassiveOnlineAnalysis",
  ];
  const pgmlanguages = ["python", "java", "javascript"];

  const toolsandIDE = ["vmWare", "Git/Github", "vSCode"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 
        bg-clip-text text-transparent text-center"
          >
            About Me
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-gray mb-6">
              Passionate self-taught MERN Stack Web Developer, Junior Data
              Scientist, and Graduate Data Engineer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/** */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold">Frontend Web Developemet</h3>

                <div className="flex flex-wrap gap-2">
                  {frontendskills.map((tech, key) => (
                    <span
                      id={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/** */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold">Backend Web Developemet</h3>
                <div className="flex flex-wrap gap-2">
                  {backendskills.map((tech, key) => (
                    <span
                      id={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/** */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold">MERN STACK</h3>
                <div className="flex flex-wrap gap-2">
                  {MERNstackskills.map((tech, key) => (
                    <span
                      id={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] 
                    transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/** */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold">Data Science</h3>
                <div className="flex flex-wrap gap-2">
                  {DataScience.map((tech, key) => (
                    <span
                      id={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] 
                    transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/** */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {pgmlanguages.map((tech, key) => (
                    <span
                      id={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] 
                    transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/** */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold">Tools and IDE</h3>
                <div className="flex flex-wrap gap-2">
                  {toolsandIDE.map((tech, key) => (
                    <span
                      id={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] 
                    transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education and work experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> SID Master's Degree </strong> - USTO-MB University
                  (2020-2022)
                </li>
                <li>
                  <strong> CS Bachelor's Degree </strong> - USTO-MB University
                  (2017-2020)
                </li>
              </ul>
            </div>
            {/* Work Experience */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
