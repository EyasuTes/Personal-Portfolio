import React from "react";

export default function HeroSection() {
  return (
    <div
      id="HeroSection"
      className=" dark:bg-gray-900  flex  lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap items-center lg:justify-between justify-center  bg-blue-50 py-16 lg:px-28 px-16 px-8 mt-10 transition-all duration-500 ease-in-out"
    >
      <div className="lg:flex-1 order-last lg:order-first md:items-center items-center sm:items-center lg:items-start flex flex-col  gap-4">
        <div className="font-bold  dark:text-white ">Hey, I'm Eyasu.</div>
        <div className="flex lg:text-3xl text-3xl  gap-4  ">
          <h1 className="font-bold ">
            <div className="text-5e3bee">Full Stack</div>
            <div className="dark:text-white ">Developer </div>
          </h1>
          <div
            style={{ clipPath: "polygon(80% 0, 100% 0%, 20% 100%, 0 100%)" }}
            className="bg-black w-8 h-16  dark:bg-white  text-3xl"
          ></div>
          <h1 className="font-bold   dark:text-white ">
            <div className="text-5e3bee inline-block"> Network</div>
            <div>Engineer </div>
          </h1>
        </div>

        <p className="md:text-start  text-center  dark:text-white">
          I'm Eyasu Araya, a passionate MERN (MongoDB, Express, React, Node.js)
          full-stack developer with a keen interest in creating robust and
          innovative web applications. With a solid foundation in computer
          networking and Cloud Computing.
        </p>
        <button className=" hover:text-5e3bee hover:bg-white hover:border-2 hover:border-5e3bee  cursor-pointer w-40 bg-5e3bee text-white rounded-md text-2xl p-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1DIVSCf6knJaePduaIh1A2vssp0SFxj_a/view?usp=sharing"
          >
            CV
          </a>
        </button>
      </div>
      <div className="lg:flex-1 flex justify-end lg:flex-end order-first lg:order-last">
        <img
          style={{ objectFit: "cover", borderRadius: "50%" }}
          className="w-96 h-96  rounded-circle"
          src="/images/Eyasu.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
