"use client";
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
    {
      frontend: {
        title: "Front-end",
        items: [
          { icon: <RiHtml5Fill size={40} />, title: "HTML" },
          { icon: <RiCss3Fill size={40} />, title: "CSS" },
          { icon: <RiJavascriptFill size={40} />, title: "Javascript" },
          { icon: <RiReactjsFill size={40} />, title: "React JS" },
          { icon: <TbBrandNextjs size={40} />, title: "Next JS" },
          { icon: <SiTailwindcss size={40} />, title: "Tailwind CSS" },
        ],
      },
      devTools: {
        title: "Dev Tools",
        items: [
          { icon: <FaGitAlt size={40} />, title: "Git" },
          { icon: <FaGithub size={40} />, title: "GitHub" },
        ],
      },
    },
  ];

  return (
    <section
      id="skills"
      className="skills-wrapper flex flex-col justify-center items-center h-fit text-white px-20 pt-32 overflow-hidden"
    >
      <h1 className="skills-heading text-3xl text-stone-500 font-bold tracking-wider pb-6">{`<Skills />`}</h1>

      <div className="skills-cards flex justify-evenly items-start w-full h-fit mt-12 bg-zinc-950 rounded-xl">
        <div className="flex flex-col justify-center items-start p-5 text-stone-500">
          {skillsData.map((category) => {
            return (
              <>
                <div key={category.title}>
                  <h2>{category.frontend.title}</h2>
                  <div className="h-6 w-0.5 bg-stone-600 mt-2 mb-4 ml-4"></div>
                  <div className="skills-list grid justify-center items-center gap-8 text-xs tracking-wide">
                    {category.frontend.items.map((item, index) => (
                      <div
                        key={index}
                        className="skills-list-items flex items-center"
                      >
                        <i>{item.icon}</i>
                        <h4 className="ml-2">{item.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="flex flex-col justify-start items-start p-5 text-stone-500">
          {skillsData.map((category) => {
            return (
              <>
                <div key={category.title}>
                  <h2>{category.devTools.title}</h2>
                  <div className="h-6 w-0.5 bg-stone-600 mt-2 mb-4 ml-4"></div>
                  <div className="skills-list grid justify-center items-center gap-8 text-xs tracking-wide">
                    {category.devTools.items.map((item, index) => (
                      <div
                        key={index}
                        className="skills-list-items flex items-center"
                      >
                        <i>{item.icon}</i>
                        <h4 className="ml-2">{item.title}</h4>
                      </div>
                    ))}
                  </div>
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
