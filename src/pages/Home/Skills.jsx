import React from "react";
import exp from "../../data/skills.json";
// import "./style.css";
import { useThemeContext } from "../../context/contex";
export default function Skills() {
  const { darkTheme, loaded } = useThemeContext();
  return (
    <div
      id="skills"
      className={`${
        loaded
          ? "transform translate-y-0 opacity-100"
          : "transform -translate-y-full opacity-0"
      } transition-all duration-1000 ease-in-out lg:mx-12 mx-8 flex flex-col gap-8 mt-12`}
    >
      <div className="flex flex-col gap-4">
        {/* <div className="font-bold text-5e3bee">My Skills</div> */}
        <div className=" dark:text-white font-bold text-3xl">My Skills</div>
      </div>
      <div
        // style={{
        //   scrollbarWidth: "thin",
        // }}
        className={`${
          darkTheme ? "scrollbar-webkit " : "lightScrollbar-webkit "
        }"  overflow-x-auto flex flex-nowrap gap-8`}
      >
        {exp.map((e, index) => (
          <div
            key={index}
            className="mb-4 w-64 dark:bg-gray-900 flex-none hover:border-b-2 hover:border-5e3bee shadow-lg rounded-md flex flex-col gap-4 p-4 bg-blue-50 "
          >
            <div className="w-12 h-12">
              <img src={e.img} alt="" />
            </div>

            <div className=" dark:text-white font-bold text-xl">{e.title}</div>
            <div
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "transparent transparent",
              }}
              className="dark:text-white h-60 overflow-y-auto "
              // style={{
              //   scrollbarWidth: "thin",
              //   scrollbarColor: "transparent transparent",
              // }}
            >
              {e.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
