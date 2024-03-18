import { Sun, Moon } from "phosphor-react";
import React from "react";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useThemeContext } from "../../context/contex";
const Navbar = () => {
  const { setDarkTheme, darkTheme, loaded, setRoll } = useThemeContext();
  const [navActive, setNavActive] = useState(false);
  const [shownav, setShownav] = useState(false);

  function changeTheme() {
    setDarkTheme((prevDark) => !prevDark);
  }
  function toggleShownav() {
    setShownav(!shownav);
  }
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setLoaded(true);
    // }, 200);

    // const rollTimer = setTimeout(() => {
    //   setRoll(true);
    // }, 700);

    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      // clearTimeout(timer);
      // clearTimeout(rollTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      style={{ zIndex: "5" }}
      className={`${
        loaded ? "animate-slideDown" : "opacity-0"
      } dark:bg-gray-800  flex box-border fixed top-0 w-screen bg-white shadow-md justify-between px-6 lg:px-32 py-2 ${
        shownav
          ? navActive
            ? "flex-col gap-4"
            : "flex-row items-center justify-between"
          : "flex-row items-center justify-between"
      } transition-all duration-500 ease-in-out`}
    >
      <div
        onClick={toggleShownav}
        className={`relative dark:hover:bg-black w-11 flex-col gap-1 hover:bg-blue-100 p-2 rounded-md cursor-pointer ${
          navActive ? "flex" : "hidden"
        }`}
      >
        <span
          className={`dark:bg-white text-black w-7 h-1 bg-black rounded-sm ${
            navActive
              ? shownav
                ? "-rotate-45 transform  translate-y-2 transition-all duration-500 ease-in-out  "
                : "transition-all duration-500 ease-in-out"
              : "transition-all duration-500 ease-in-out"
          }`}
        ></span>
        <span
          className={`dark:bg-white text-black w-7 h-1 bg-black rounded-sm ${
            navActive
              ? shownav
                ? "scale-0  transition-all duration-500 ease-in-out"
                : "transition-all duration-500 ease-in-out"
              : " transition-all duration-500 ease-in-out"
          }`}
        ></span>
        <span
          className={`dark:bg-white text-black w-7 h-1 bg-black rounded-sm ${
            navActive
              ? shownav
                ? "rotate-45 transform  -translate-y-2 transition-all duration-500 ease-in-out"
                : "transition-all duration-500 ease-in-out"
              : "transition-all duration-500 ease-in-out"
          }`}
        ></span>
      </div>

      <div
        className={` gap-4 text-lg transition-all ease-in-out duration-300 ${
          navActive ? (shownav ? "flex flex-col  " : " hidden") : "flex"
        } `}
      >
        <Link
          activeClass="text-5e3bee dark:text-5e3bee"
          className="dark:text-white  box-border cursor-pointer border-transparent border-b-2 hover:transform hover:scale-105 transition-all"
          to="HeroSection"
          onClick={toggleShownav}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="text-5e3bee dark:text-5e3bee"
          onClick={toggleShownav}
          className="dark:text-white  box-border cursor-pointer border-transparent border-b-2 hover:transform hover:scale-105 transition-all"
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Skills
        </Link>
        <Link
          activeClass="text-5e3bee dark:text-5e3bee"
          className="dark:text-white  box-border cursor-pointer border-transparent border-b-2 hover:transform hover:scale-105 transition-all"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={toggleShownav}
        >
          Projects
        </Link>
        <Link
          activeClass="text-5e3bee dark:text-5e3bee"
          className="dark:text-white  box-border cursor-pointer border-transparent border-b-2 hover:transform hover:scale-105 transition-all"
          to="AboutMe"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={toggleShownav}
        >
          About
        </Link>
        <Link
          activeClass="text-5e3bee dark:text-5e3bee"
          className="dark:text-white  box-border cursor-pointer border-transparent border-b-2 hover:transform hover:scale-105 transition-all"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onClick={toggleShownav}
        >
          Contact
        </Link>
      </div>

      <div className="fixed right-10 flex items-center gap-4 py-4">
        <button className="  bg-5e3bee text-white p-1 rounded-md hover:scale-105 transition-all duration-500 ease-in-out">
          <a
            href="https://www.linkedin.com/in/eyasu-araya-b9197a192/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linked In
          </a>
        </button>
        <div
          onClick={changeTheme}
          className=" hover:scale-110 transition-all duration-500 ease-in-out"
        >
          {darkTheme ? (
            <Sun className="text-white" size={32} />
          ) : (
            <Moon size={32} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
