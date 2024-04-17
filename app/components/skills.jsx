import React from "react";
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
  const skillsData = [
    { icon: <RiJavascriptFill size={80} />, title: "Javascript" },
    { icon: <RiHtml5Fill size={80} />, title: "HTML" },
    { icon: <RiCss3Fill size={80} />, title: "CSS" },
    { icon: <RiReactjsFill size={80} />, title: "React JS" },
    { icon: <TbBrandNextjs size={80} />, title: "Next JS" },
    { icon: <SiTailwindcss size={80} />, title: "Tailwind CSS" },
    { icon: <FaGitAlt size={80} />, title: "Git" },
    { icon: <FaGithub size={80} />, title: "GitHub" },
  ];

  return (
    <section
      id="skills"
      className="skills-wrapper flex flex-col justify-start items-center h-fit text-white px-20 pt-32 overflow-hidden"
    >
      <div className="skills-heading text-3xl text-stone-500 font-bold tracking-wider pb-6">
        <h1>{`<Skills />`}</h1>
      </div>

      <div className=" flex justify-between items-center gap-16 w-full">
        <div className=" flex h-0.5 bg-stone-500 rounded-xl w-full"></div>

        <div className="skills-list grid justify-center items-center gap-8 pt-6 text-stone-500 text-xs tracking-wide h-fit">
          {skillsData.map((...[data]) => {
            return (
              <>
                <div className="skills-list-items flex flex-col justify-center items-center bg-zinc-950 py-4 px-6 rounded-xl">
                  <i>{data.icon}</i>
                  <h4 className=" pt-2">{data.title}</h4>
                </div>
              </>
            );
          })}
        </div>

        <div className=" flex h-0.5 bg-stone-500 rounded-xl w-full"></div>
      </div>
    </section>
  );
};

export default skills;
