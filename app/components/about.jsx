"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="about-wrapper flex flex-col text-slate-100 px-16 pt-36 m-auto h-fit overflow-hidden tracking-wider"
    >
      <div className="about-heading flex justify-center items-center text-3xl text-stone-500">
        <h1>{`<About />`}</h1>
      </div>
      <div className="about-text flex justify-between items-center w-full text-lg text-wrap pl-6 pt-20 pb-5">
        <p>
          Hi, I'm <span>Kaif Siddiqui</span>, a passionate{" "}
          <span>frontend web developer</span> with expertise in{" "}
          <span>HTML</span>, <span>CSS</span>, and <span>JavaScript</span>. I
          have a strong background in modern frameworks and libraries, including{" "}
          <span>React.js</span>, <span>Next.js</span>, and <span>Redux</span>.
          My skills extend to backend technologies such as <span>Node.js</span>{" "}
          and <span>Express.js</span>, enabling me to build comprehensive{" "}
          <span>full-stack applications</span>. I also specialize in creating{" "}
          <span>visually appealing</span> and <span>responsive designs</span>{" "}
          using <span>Tailwind CSS</span>. I am actively seeking job
          opportunities where I can{" "}
          <span>contribute my skills and grow professionally</span>.
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
  );
};
export default About;
