import React from "react";
import Image from "next/image";
import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const main = () => {
  return (
    <>
      <section
        id="home"
        className="main-wrapper flex justify-between items-center h-fit overflow-hidden pl-16 ml-1 pt-36"
      >
        <div className="intro-text w-7/12 text-gray-200 text-4xl font-bold tracking-wider ">
          <h1 className="text-1 pb-2 text-sm">Hi, I'm</h1>
          <h1 className="text-2 py-1 text-stone-500 space-x-3">
            KAIF SIDDIQUI
          </h1>
          <h1 className="text-3 py-2 text-stone-500 space-x-3">
            FRONT-END WEB DEVELOPER
          </h1>
          <p className="text-summary text-xs font-light w-9/12 pt-4 pb-12">
            <span className=" text-lg">Welcome to my portfolio!</span> I
            translate ideas into visually stunning and functionally robust{" "}
            <span>web solutions</span>. Craft with intuitive{" "}
            <span>user experiences</span> through clean,{" "}
            <span>responsive design</span> and{" "}
            <span>seamless interaction.</span>
          </p>
          <p className="text-contact text-stone-500 text-xs font-medium">
            Contact: +91-9310551083 | kaifs8998@gmail.com
          </p>
          <ul className="social-links flex justify-start items-center text-xl text-stone-500 pt-6 space-x-6">
            <li>
              <a
                href="http://www.linkedin.com/in/kaifsiddiqui02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="social-icons hover:-translate-y-1 hover:ease-in-out"
                  aria-hidden="true"
                />
                <span className=" sr-only">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/kaifsiddiqui__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter
                  className="social-icons hover:-translate-y-1 ease-in-out"
                  aria-hidden="true"
                />
                <span className=" sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:kaifs8998@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGmail
                  className="social-icons hover:-translate-y-1 ease-in-out"
                  aria-hidden="true"
                />
                <span className=" sr-only">Gmail</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kaif-S2002"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="social-icons hover:-translate-y-1 ease-in-out"
                  aria-hidden="true"
                />
                <span className=" sr-only">Github</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="main-img">
          <Image
            src={"/assets/myPic.png"}
            width={400}
            height={400}
            alt="alt-image"
            className="myImg "
          />
        </div>
      </section>
    </>
  );
};

export default main;
