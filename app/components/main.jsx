"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "nextjs-simple-typewriter";

const main = () => {
  return (
    <>
      <div className="main-wrapper flex justify-center items-center h-screen">
        <div className="intro-text w-7/12 text-gray-200 text-3xl font-bold tracking-wider">
          <h1 className=" py-2 flex items-center space-x-3">
            <span className=" text-white">Hi, I'm</span>
            <span className=" text-stone-500 space-x-3">
              <Typewriter
                words={["< Kaif Siddiqui."]}
                loop={1}
                cursor
                cursorStyle="/>"
                typeSpeed={80}
                // deleteSpeed={40}
                // delaySpeed={1600}
                // onLoopDone={}
                // onType={handleType}
              />
            </span>
          </h1>
          <h2 className=" py-2">
            <span className=" text-stone-500 space-x-3">
              <span className=" text-white">I'm a</span>
              <Typewriter
                words={["< frontend web developer."]}
                loop={1}
                cursor
                cursorStyle="/>"
                typeSpeed={70}
                // deleteSpeed={30}
                // delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </span>
          </h2>
          <p className=" text-base font-normal w-9/12 pt-4 pb-16">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            reiciendis quae beatae consequuntur hic non, porro aliquid eum qui
            deleniti!
          </p>
          <p className=" text-stone-500 text-xs font-medium">
            Contact: 9310****** | kaifs8998@gmail.com
          </p>
        </div>
        <div className="main-img ">
          {/* <Image src={"/assets/logo1.jpg"} width={350} height={350} /> */}
          {/* <Image src={"/assets/logo6.png"} width={200} height={200} /> */}
          <Image
            src={"/assets/myPic.png"}
            width={380}
            height={380}
            className="myImg rounded-xl border-b-2 border-b-zinc-900"
          />
        </div>
      </div>
    </>
  );
};

export default main;
