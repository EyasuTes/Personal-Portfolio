import React from "react";

export default function AboutMe() {
  return (
    <div id="AboutMe" className="dark:bg-gray-900 bg-blue-50 mt-10 lg:p-6 p-1">
      <div>
        {/* <div className="font-bold text-5e3bee">About</div> */}
        <div className="p-1 pb-5 dark:text-white font-bold text-3xl ">
          About Me
        </div>
      </div>
      <div
        style={{ objectFit: "cover" }}
        className="flex lg:flex-nowrap sm:flex-wrap flex-wrap bg-blue-50 rounded-md dark:bg-gray-900 gap-4"
      >
        <div className=" ">
          <div className="p-2 lg:w-96 sm:w-96 ">
            <img src="/images/About me/pic3.jpeg" alt="" />
          </div>
        </div>
        <div className="  flex flex-col gap-8 justify-center">
          <p className="dark:text-white">
            <strong>Introduction:</strong>
            <br />
            I'm Eyasu Araya, an AI enthusiast and recent graduate with a degree
            in IT Networking (GPA: 3.91). Self-taught in MERN Stack and AI
            development, I'm passionate about leveraging technology for
            transformative advancements.
            <br />
            <br />
            <strong>Educational Background:</strong>
            <br />I earned my Bachelor's degree in IT Networking from the Higher
            Colleges of Technology in the UAE, graduating with a notable GPA of
            3.91 in December 2023. As a lifelong learner, I took on the role of
            a self-taught MERN Stack Developer, showcasing my skills through
            projects like my personal portfolio website where I utilized HTML,
            CSS, JavaScript, React, and Tailwind CSS.
            <br></br>
            <br />
            <strong>AI Enthusiast and Developer:</strong>
            <br />
            <br />
            Driven by a passion for artificial intelligence, I embarked on a
            self-taught journey in AI development. My commitment is reflected in
            certifications from SAMSUNG INNOVATION CAMPUS and completion of
            courses on Coursera, including Mathematics for Machine Learning and
            Data Science Specialization and Machine Learning Specialization.
            <br />
            <br />
            <strong>Certifications and Honors:</strong> <br />
            CCNA and Project Management certified. Distinguished scholarship
            recipient, Huawei ICT competition award.
            <br />
            <br />
            <strong>Skills: </strong>
            <br />
            Languages: JavaScript, HTML/CSS, Python, Java.
            <br />
            Web/AI Frameworks and tools: React, Redux, TensorFlow, PyTorch, Git,
            MongoDB, AWS, VS-Code.
          </p>
        </div>
      </div>
    </div>
  );
}
