import React, { useEffect, useState } from "react";
import { useThemeContext } from "../../context/contex";

export default function HeroSection() {
  const { loaded, roll } = useThemeContext();

  return (
    <div
      id="HeroSection"
      className={` ${
        loaded ? "animate-slide" : "opacity-0"
      } dark:bg-gray-900 flex lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap items-center lg:justify-between justify-center bg-blue-50 py-4 lg:px-28 px-16 px-8 pt-20`}
    >
      <div className="lg:flex-1 order-last lg:order-first md:items-center items-center sm:items-center lg:items-start flex flex-col gap-4">
        <div className="font-bold dark:text-white">Hey, I'm</div>
        <div className="flex lg:text-3xl text-3xl gap-4">
          <h1 className="font-bold ">
            <div className="dark:text-white text-black">Eyasu</div>
          </h1>
          <h1 className="font-bold dark:text-white">
            <div className="dark:text-white text-black inline-block">Araya</div>
          </h1>
        </div>
        <p className="md:text-start text-center dark:text-white">
          Enthusiastic AI professional and bachelor's degree graduate with a
          3.91 GPA in IT-networking. Adept in HTML, CSS, JavaScript, and the
          MERN stack. Proven track record in machine learning and deep learning.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/19hej9hhWzDiop8MfmhbnkHluTol9cAh-/view?usp=sharing"
        >
          <button className="hover:text-5e3bee hover:bg-white hover:border-2 hover:border-5e3bee cursor-pointer w-40 bg-5e3bee text-white rounded-md text-2xl p-2">
            CV
          </button>
        </a>
      </div>
      <div
        className={`${
          roll
            ? "animate-blobContainer sm:animate-blobContainer md:animate-blobContainerLargeScreen lg:animate-blobContainerLargeScreen"
            : ""
        } lg:flex-1 flex justify-end lg:flex-end order-first lg:order-last`}
        style={{ transformOrigin: "center center" }}
      >
        <img
          style={{ objectFit: "cover", borderRadius: "50%" }}
          id="rotating-img"
          className={`${
            roll
              ? "animate-blob sm:animate-blob md:animate-blobLargeScreen lg:animate-blobLargeScreen"
              : "opacity-0"
          } w-52 sm:w-72 md:w-80 lg:w-80 h-52 sm:h-72 md:h-80 lg:h-80 rounded-circle`}
          src="/images/Eyasu.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
