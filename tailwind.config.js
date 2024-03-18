/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.jsx",
    "./src/pages/Home/*.jsx",
    "./src/pages/Home/Homescreen/*.jsx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "5e3bee": "#5e3bee",
      },
    },
    animation: {
      blob: "blob 1s forwards",
      blobContainer: "blobContainer 1s forwards",
      blobLargeScreen: "blobLargeScreen 1s forwards",
      blobContainerLargeScreen: "blobContainerLargeScreen 1s forwards",
      slide: "slide 1s forwards",
      slideDown: "slide 1s forwards",
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "rotate(0deg) ",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      blobLargeScreen: {
        "0%": {
          transform: "rotate(0deg) ",
        },
        "100%": {
          transform: "rotate(-360deg)",
        },
      },
      blobContainerLargeScreen: {
        "0%": {
          transform: " translateX(180%) ",
        },
        "100%": {
          transform: "translateX(0%)",
        },
      },
      blobContainer: {
        "0%": {
          transform: " translateX(-180%) ",
        },
        "100%": {
          transform: "translateX(0%)",
        },
      },
      slide: {
        "0%": {
          transform: "translateX(-100%) ",
          opacity: 0,
        },
        "100%": {
          transform: " translateX(0%) ",
          opacity: 1,
        },
      },
      slideDown: {
        "0%": {
          transform: "translateY(-100%)",
          opacity: 0,
        },
        "100%": {
          transform: "translateY(0%)",
          opacity: 0,
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // ".scrollbar-thin": {
        //   scrollbarWidth: "thin",
        //   scrollbarColor: "rgb(31 29 29) green",
        // },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            height: "10px" /* Width of the scrollbar */,
          },
          /* Track (the area behind the thumb) */
          "&::-webkit-scrollbar-track": {
            background: "#1c273e",
          },
          /* Thumb (the draggable part of the scrollbar) */
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#5e3bee",
            borderRadius: "10px",
            // borderRadius: "10px",
          },
          /* Corner (the intersection of the scrollbar) */
          "&::-webkit-scrollbar-corner": {
            background: "transparent",
          },
        },
        ".lightScrollbar-webkit": {
          "&::-webkit-scrollbar": {
            height: "10px" /* Width of the scrollbar */,
          },
          /* Track (the area behind the thumb) */
          "&::-webkit-scrollbar-track": {
            background: "#edf2f7",
          },
          /* Thumb (the draggable part of the scrollbar) */
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#a3bffa",
            borderRadius: "10px",
            // borderRadius: "10px",
          },
          /* Corner (the intersection of the scrollbar) */
          "&::-webkit-scrollbar-corner": {
            background: "transparent",
          },
        },
      };
      // Add the new utilities to the Tailwind CSS configuration
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
