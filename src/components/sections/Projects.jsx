import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 ">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 
        to-purple-500 bg-clip-text text-transparent text-center"
          >
            Formation Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
           hover:border-blue-500/30
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
            "
            >
              <h3 className="text-xl font-bold mb-2">
                MERN Lecture Management App
              </h3>
              <p className="text-gray-400 mb-4">
                {" "}
                MERN Stack web app that implemnts feature such as ....
              </p>
              <div>
                {["React", "Node.js", "JwT", "Token verification"].map(
                  (tech, key) => (
                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-start items-center">
                <a
                  href="https://github.com/Hajer-Im-Bsl/MERN-Learning_Management_System"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
            {/* Project 2 */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1
           hover:border-blue-500/30
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
            "
            >
              <h3 className="text-xl font-bold mb-2">
                MERN Authentication System
              </h3>
              <p className="text-gray-400 mb-4">
                {" "}
                Authentication management system built using the MERN stack
                (MongoDB, Express.js, React.js, Node.js)
              </p>
              <div>
                {["React", "Node.js", "JwT", "Token verification"].map(
                  (tech, key) => (
                    <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-start items-center">
                <a
                  href="https://github.com/Hajer-Im-Bsl/MERN-Authentication-System"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
