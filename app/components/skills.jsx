import React from "react";
import Skills from "../data/skills";

const skills = () => {
  return (
    <section
      id="skills"
      className="skills-wrapper flex flex-col justify-start items-start h-full text-white px-20 pt-28 pb-16"
    >
      <div className="skills-heading text-3xl text-stone-500 font-bold tracking-wider pb-10">
        <h1>{`<Skills />`}</h1>
      </div>

      <div className="skills-wrapper flex justify-between items-start w-11/12 h-5/6">
        <div className="skills-sec flex flex-col text-white bg-zinc-950 rounded-xl w-4/12 h-full p-2 gap-5">
          {Skills.map((skill, id) => {
            return (
              <div key={id} className="skills-list w-full tracking-widest">
                {skill.title}
                <div className=" flex w-full h-1 bg-zinc-800 rounded-lg">
                  <span className=" w-10/12 h-1 bg-stone-600 rounded-lg"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default skills;
