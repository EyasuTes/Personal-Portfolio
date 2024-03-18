import React from "react";
import projects from "../../data/projects.json";
import { ArrowUpRight } from "phosphor-react";
// import "./style.css";
import { useThemeContext } from "../../context/contex";
export default function Portfolio() {
  const { darkTheme } = useThemeContext();
  return (
    <div
      id="portfolio"
      className=" dark:bg-gray-900 lg:p-12 p-4 flex flex-col gap-8 mt-12"
    >
      <div className="flex flex-col gap-4">
        {/* <div className="font-bold text-5e3bee">Recent Projects</div> */}
        <div className="dark:text-white font-bold text-3xl">
          Recent Projects
        </div>
      </div>
      <div
        // style={{
        //   scrollbarWidth: "thin",
        //   scrollbarColor: "transparent transparent",
        // }}
        className={`${
          darkTheme ? "scrollbar-webkit " : "lightScrollbar-webkit "
        }flex overflow-x-auto gap-8`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => window.open(project.website, "_blank")}
            className="hover:scale-95 transition-all duration-500 ease-in-out cursor-pointer mb-4 w-72 sm:w-96 md:w-96 w-72 lg:w-96  flex-none dark:bg-gray-800 relative hover:border-b-2 hover:border-5e3bee  sm:flex-col shadow-lg rounded-md flex flex-col gap-4 p-2 bg-blue-50 "
          >
            <div
              style={{ objectFit: "cover" }}
              className=" flex  justify-center   cursor-pointer"
            >
              {/* <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              > */}
              <img className="w-96 h-48" src={project.img} />
              {/* </a> */}
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
                    onClick={(event) => {
                      event.stopPropagation(); // Prevent event propagation
                    }}
                    style={{ zIndex: "10" }}
                    className="hover:bg-gray-900 p-2 flex rounded-md"
                  >
                    View In GitHub
                    <ArrowUpRight size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
