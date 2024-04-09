import React from "react";
import Skills from "../data/skills";
import {
  RiJavascriptFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiReactjsFill,
} from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt, FaGithub } from "react-icons/fa";

const skills = () => {
  return (
    <section
      id="skills"
      className="skills-wrapper flex flex-col justify-start items-center h-screen text-white px-20 pt-32"
    >
      <div className="skills-heading text-3xl text-stone-500 font-bold tracking-wider pb-10">
        <h1>{`<Skills />`}</h1>
      </div>

      <div className="skills-list grid justify-center items-center gap-10 pt-8 text-stone-500 tracking-wider h-fit">
        <div className=" flex flex-col justify-center items-center">
          <i>
            <RiJavascriptFill size={80} />
          </i>
          <h4>Javascript</h4>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <i>
            <RiHtml5Fill size={80} />
          </i>
          <h4>HTML</h4>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <i>
            <RiCss3Fill size={80} />
          </i>
          <h4>CSS</h4>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <i>
            <RiReactjsFill size={80} />
          </i>
          <h4>React JS</h4>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <i>
            <TbBrandNextjs size={80} />
          </i>
          <h4>Next JS</h4>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <i>
            <SiTailwindcss size={80} />
          </i>
          <h4>Tailwind CSS</h4>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <i>
            <FaGitAlt size={80} />
          </i>
          <h4>Git</h4>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <i>
            <FaGithub size={80} />
          </i>
          <h4>Github</h4>
        </div>
      </div>
    </section>
  );
};

export default skills;
