"use client";
import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <>
      <section
        id="about"
        className="about-wrapper flex flex-col text-white px-16 pt-36 m-auto h-fit overflow-hidden"
      >
        <div className="about-heading flex justify-center items-center text-3xl text-stone-500 font-bold tracking-wider">
          <h1>{`<About />`}</h1>
        </div>
        <div className="about-text flex justify-between items-center w-full text-lg text-wrap tracking-widest pl-6 pt-20 pb-5">
          <p>
            Hi, I'm <span>Kaif Siddiqui</span>, a self-taught frontend web
            developer dedicated to creating an <span>engaging</span> and{" "}
            <span>dynamic user experiences</span>. With a strong foundation in{" "}
            <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>, I
            specialize in building <span>responsive</span> and{" "}
            <span>interactive</span> websites. I bring ideas to life on the web.
          </p>
          <div className="sign-image flex justify-center items-center pl-10 shrink-0">
            <Image
              src={"/assets/logo6.png"}
              alt="sign"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default about;
