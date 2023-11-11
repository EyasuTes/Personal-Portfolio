import React from "react";

export default function AboutMe() {
  return (
    <div id="AboutMe" className="lg:p-12 p-4">
      <div
        style={{ objectFit: "cover" }}
        className="flex lg:flex-nowrap sm:flex-wrap flex-wrap bg-blue-50 rounded-md dark:bg-gray-900"
      >
        <div className=" ">
          <div className="p-2 lg:w-96 sm:w-96 ">
            <img src="/images/About me/pic3.jpeg" alt="" />
          </div>
        </div>
        <div className=" p-10 flex flex-col gap-8 justify-center">
          <div>
            <div className="font-bold text-5e3bee">About</div>
            <div className=" dark:text-white font-bold text-3xl">About Me</div>
          </div>

          <p className="dark:text-white">
            i am a soon-to-be graduate in Computer Networking with a GPA of 3.91
            from Higher Colleges of Technology. I am a self-taught MERN stack
            developer and the first prize winner of the Huawei ICT Networking
            Competition in Shenzhen, China. Holding a CCNA certification, my
            academic excellence is complemented by hands-on experience and a
            keen interest in technology.
          </p>
          <p className="dark:text-white">
            Beyond the classroom, I've immersed myself in full-stack
            development, finding joy in creating dynamic web applications. As I
            approach graduation, I am eager to apply my academic achievements
            and practical skills to contribute to the dynamic field of computer
            networking and web development. Currently i am looking for job
            opportunities With a global perspective and a commitment to
            continuous learning, I am ready for the next chapter in my life,
            poised to make a meaningful impact. You can find my Contacts bellow.
          </p>
        </div>
      </div>
    </div>
  );
}
