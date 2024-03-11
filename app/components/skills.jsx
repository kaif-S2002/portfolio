import React from "react";

const skills = () => {
  return (
    <div
      id="skills"
      className="skills-wrapper flex flex-col justify-start items-start h-screen text-white px-16 py-28"
    >
      <div className="skills-heading text-3xl text-stone-500 font-bold pb-10">
        <h1>{`<Skills />`}</h1>
      </div>

      <div className="skills-wrapper flex justify-between items-start w-11/12 p-2 ">
        <div className=" bg-zinc-950 rounded-xl h-full p-2">
          <ul className="skills-list text-stone-500 space-y-2 w-full">
            <li className="">Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React JS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className=" bg-zinc-950 rounded-xl h-full p-2">
          <ul className="skills-list text-stone-500 space-y-2 w-full">
            <li className="">Git & GitHub</li>
            <li>VsCode</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default skills;
