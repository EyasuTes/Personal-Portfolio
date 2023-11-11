import React from "react";
import projects from "../../data/projects.json";
import { ArrowUpRight } from "phosphor-react";
export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className=" dark:bg-gray-900 lg:p-12 p-4 flex flex-col gap-8 mt-12"
    >
      <div className="flex flex-col gap-4">
        <div className="font-bold text-5e3bee">Recent Projects</div>
        <div className="dark:text-white font-bold text-3xl">My Projects</div>
      </div>
      <div className="flex lg:flex-nowrap  flex-wrap gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="lg:flex-1 dark:bg-gray-800 relative hover:border-b-2 hover:border-5e3bee md:flex-row sm:flex-col flex-col shadow-lg rounded-md flex lg:flex-col gap-4 p-4 bg-blue-50 "
          >
            <div
              style={{ objectFit: "cover" }}
              className=" flex  justify-center hover:scale-95 transition-all duration-500 ease-in-out cursor-pointer"
            >
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.img} />
              </a>
            </div>
            <div className="flex flex-col pb-12">
              <div>
                <div className="dark:text-white font-bold text-xl">
                  {project.title}
                </div>
                <div className="dark:text-white ">{project.text}</div>
              </div>

              <div className="dark:text-white absolute flex gap-2 right-4 bottom-2 font-bold text-5e3bee">
                <div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View In GitHub
                  </a>
                </div>

                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
