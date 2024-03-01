import React from "react";
import Image from "next/image";

const main = () => {
  return (
    <>
      <div className="main-wrapper flex justify-evenly items-center h-screen pb-5">
        <div className="intro-text w-6/12 text-gray-200 text-4xl font-bold tracking-wider">
          <h1 className=" py-2">
            Hi, I'm <span className=" text-stone-500">Kaif Siddiqui.</span>
          </h1>
          <h2 className=" py-2">
            I'm a{" "}
            <span className=" text-stone-500 ">frontend web developer.</span>
          </h2>
          <p className=" text-lg font-normal w-10/12 pt-4 pb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            reiciendis quae beatae consequuntur hic non, porro aliquid eum qui
            deleniti!
          </p>
          <p className=" text-stone-500 text-xs font-medium pt-5">
            Contact: 9310****** | kaifs8998@gmail.com
          </p>
        </div>
        <div className="main-img">
          {/* <Image src={"/assets/logo1.jpg"} width={350} height={350} /> */}
          <Image src={"/assets/logo6.png"} width={400} height={400} />
        </div>
      </div>
    </>
  );
};

export default main;
