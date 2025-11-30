import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const Academics = () => {
  return (
    <section
      id="academics"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 
    bg-clip-text text-transparent text-center"
          >
            Academics
          </h2>
          <div className="w-full mt-8">
            <div className="p-8 rounded-xl border-white/10 border hover:-translate-y-1 transition-all glass">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Education & Degrees
              </h3>

              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="flex justify-between items-start flex-wrap">
                    <h4 className="text-xl font-bold text-blue-200">
                      Doctoral Degree (Ph.D.) – Data Science
                    </h4>
                    <span className="text-sm text-gray-400 bg-blue-500/10 px-2 py-1 rounded">
                      March 2023 – Present
                    </span>
                  </div>
                  <p className="text-gray-300 mt-1 mb-2">USTO-MB, Oran</p>

                  <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                    <li>
                      <strong className="text-gray-200">Research Topic:</strong>{" "}
                      Improving Online Machine Learning Approaches for Data
                      Streams Mining.
                    </li>
                    <li>
                      <strong className="text-gray-200">Publications:</strong>{" "}
                      Presented at 2 international conferences, including one{" "}
                      <span className="text-blue-400">IEEE-affiliated</span>{" "}
                      proceeding.
                    </li>
                    <li>
                      <strong className="text-gray-200">Focus:</strong>{" "}
                      Developing adaptive models for efficient real-time
                      processing of massive data streams.
                    </li>
                  </ul>
                  <a
                    href="https://www.researchgate.net/profile/Hadjer-Imene-Bensaoula"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-blue-400 hover:text-blue-300 hover:underline text-sm"
                  >
                    View ResearchGate Profile →
                  </a>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <div className="flex justify-between items-start flex-wrap">
                    <h4 className="text-xl font-bold text-purple-200">
                      Master’s Degree, Information Systems & Data
                    </h4>
                    <span className="text-sm text-gray-400 bg-purple-500/10 px-2 py-1 rounded">
                      Jan 2021 – July 2022
                    </span>
                  </div>
                  <p className="text-gray-300 mt-1 mb-2">USTO-MB, Oran</p>

                  <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                    <li>
                      <strong className="text-yellow-400">
                        Valedictorian:
                      </strong>{" "}
                      Graduated First in Class (Ranked 1st overall).
                    </li>
                    <li>
                      <strong className="text-gray-200">Thesis:</strong>{" "}
                      Proposed an energy-efficient approach for data stream
                      classification using incremental decision trees (Green
                      AI).
                    </li>
                    <li>
                      <strong className="text-gray-200">Tech Stack:</strong>{" "}
                      Java + MOA Framework.
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-pink-500 pl-4">
                  <div className="flex justify-between items-start flex-wrap">
                    <h4 className="text-xl font-bold text-pink-200">
                      Bachelor’s Degree, Computer Systems
                    </h4>
                    <span className="text-sm text-gray-400 bg-pink-500/10 px-2 py-1 rounded">
                      Sept 2017 – Nov 2020
                    </span>
                  </div>
                  <p className="text-gray-300 mt-1 mb-2">USTO-MB, Oran</p>

                  <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                    <li>Graduated with Honors.</li>
                    <li>
                      <strong className="text-gray-200">
                        Final Year Project:
                      </strong>{" "}
                      Developed a Single-Page Application (SPA) for conference
                      management.
                    </li>
                    <li>
                      <strong className="text-gray-200">Tech Stack:</strong>{" "}
                      AngularJS (Front-End), Java Servlets (REST API), MySQL.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Academics;
