import React from "react";

export default function HeroSection() {
  return (
    <div
      id="HeroSection"
      className=" dark:bg-gray-900  flex  lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap items-center lg:justify-between justify-center  bg-blue-50 py-16 lg:px-28 px-16 px-8 mt-10 transition-all duration-500 ease-in-out"
    >
      <div className="lg:flex-1 order-last lg:order-first md:items-center items-center sm:items-center lg:items-start flex flex-col  gap-4">
        <div className="font-bold  dark:text-white ">Hey, I'm</div>
        <div className="flex lg:text-3xl text-3xl  gap-4  ">
          <h1 className="font-bold ">
            <div className="dark:text-white text-black">Eyasu</div>
          </h1>

          <h1 className="font-bold   dark:text-white ">
            <div className="dark:text-white text-black inline-block">
              Araya{" "}
            </div>
          </h1>
        </div>

        <p className="md:text-start  text-center  dark:text-white">
          Enthusiastic AI professional and recent bachelor's degree graduate
          with a 3.91 GPA in Computer Information Systems (CIS) with a major in
          networking. Adept in HTML, CSS, JavaScript, and the MERN stack. Proven
          track record in machine learning and deep learning, proficient in
          Python, TensorFlow, and PyTorch. Leveraging technical expertise to
          drive transformative advancements in AI technology. Adept at
          collaborative problem-solving with a commitment to ethical AI
          practices. Eager to contribute skills and experience to a dynamic team
          pushing the boundaries of artificial intelligence.
        </p>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1uN7SF58QtT8njWhLsRNld7QYmPYFCaw-/edit?usp=sharing&ouid=110172689238978687557&rtpof=true&sd=true"
        >
          <button className=" hover:text-5e3bee hover:bg-white hover:border-2 hover:border-5e3bee  cursor-pointer w-40 bg-5e3bee text-white rounded-md text-2xl p-2">
            CV
          </button>
        </a>
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
