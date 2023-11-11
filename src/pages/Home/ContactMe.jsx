import React from "react";
import {
  EnvelopeSimple,
  LinkedinLogo,
  PhoneCall,
  GithubLogo,
} from "phosphor-react";
export default function ContactMe() {
  return (
    <div id="contact" className="bg-blue-100 dark:bg-gray-900 ">
      <div className="flex flex-wrap justify-center gap-8 py-4 dark:text-white">
        <div className="flex flex-col items-center">
          <EnvelopeSimple size={32} />
          <div>eyasuaraya0@gmail.com</div>
        </div>
        <div className="flex flex-col items-center ">
          <LinkedinLogo size={32} />
          <div>https://www.linkedin.com/in/eyasu-araya-b9197a192/</div>
        </div>
        <div className="flex flex-col items-center">
          <PhoneCall size={32} />
          <div>+971545524462</div>
        </div>
        <div className="flex flex-col items-center">
          <GithubLogo size={32} />
          <div>https://github.com/EyasuTes</div>
        </div>
      </div>
    </div>
  );
}
