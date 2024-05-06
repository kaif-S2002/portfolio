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
    { icon: <RiHtml5Fill size={40} />, title: "HTML" },
    { icon: <RiCss3Fill size={40} />, title: "CSS" },
    { icon: <RiJavascriptFill size={40} />, title: "Javascript" },
    { icon: <RiReactjsFill size={40} />, title: "React JS" },
    { icon: <TbBrandNextjs size={40} />, title: "Next JS" },
    { icon: <SiTailwindcss size={40} />, title: "Tailwind CSS" },
    // { icon: <FaGitAlt size={40} />, title: "Git" },
    // { icon: <FaGithub size={40} />, title: "GitHub" },
  ];

  return (
    <section
      id="skills"
      className="skills-wrapper flex flex-col justify-center items-center h-fit text-white px-20 pt-32 overflow-hidden"
    >
      <h1 className="skills-heading text-3xl text-stone-500 font-bold tracking-wider pb-6">{`<Skills />`}</h1>

      <div className=" flex flex-col justify-center items-start bg-zinc-950 p-5 mt-12 rounded-xl text-stone-500">
        <h2>Front-end</h2>
        <div className=" h-6 w-0.5 bg-stone-600 mt-2 mb-4 ml-5"></div>
        <div className="skills-list grid justify-center items-center gap-8 text-xs tracking-wide h-fit">
          {skillsData.map((...[data]) => {
            return (
              <>
                <div className="skills-list-items grid grid-flow-col justify-start items-center">
                  <i>{data.icon}</i>
                  <h4 className=" ml-2">{data.title}</h4>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default skills;
