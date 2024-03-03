"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";
import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";

const main = () => {
  return (
    <>
      <div className="main-wrapper flex justify-center items-center h-screen overflow-hidden pt-36">
        <div className="intro-text w-7/12 text-gray-200 text-3xl font-bold tracking-wider mt-5">
          <h1 className="text py-1 flex items-center space-x-3">
            <span className=" text-white">Hi, I'm</span>
            <span className=" text-stone-500 space-x-3">
              <Typewriter
                words={["< Kaif Siddiqui."]}
                loop={1}
                cursor
                cursorStyle="/>"
                typeSpeed={100}
                // deleteSpeed={40}
                // delaySpeed={1600}
                // onLoopDone={}
                // onType={handleType}
              />
            </span>
          </h1>
          <h1 className="text py-2">
            <span className=" text-stone-500 space-x-3">
              <span className=" text-white">I'm a</span>
              <Typewriter
                words={["< frontend web developer."]}
                loop={1}
                cursor
                cursorStyle="/>"
                typeSpeed={90}
                // deleteSpeed={30}
                // delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </span>
          </h1>
          <p className="text-summary text-sm font-light w-9/12 pt-4 pb-12">
            Welcome to my portfolio! As a frontend web developer, I craft
            intuitive user experiences through clean, responsive design and
            seamless interaction. Explore my projects to witness my passion for
            translating ideas into visually stunning and functionally robust web
            solutions.
          </p>
          <p className="text-contact text-stone-500 text-xs font-medium">
            Contact: 9310****** | kaifs8998@gmail.com
          </p>
          <ul className="social-links flex justify-start items-center text-stone-500 text-xl pt-6 space-x-6">
            <li>
              <a
                href="http://www.linkedin.com/in/kaifsiddiqui02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/kaifsiddiqui__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/__kaif.siddiqui__/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kaif-S2002"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <div className="main-img">
          <Image
            src={"/assets/myPic.png"}
            width={380}
            height={380}
            className="myImg "
          />
        </div>
      </div>
    </>
  );
};

export default main;
