import React from "react";

const skills = () => {
  return (
    <div
      id="skills"
      className="skills-wrapper flex flex-col justify-start items-start h-full text-white px-20 pt-28 pb-16"
    >
      <div className="skills-heading text-3xl text-stone-500 font-bold tracking-wider pb-10">
        <h1>{`<Skills />`}</h1>
      </div>

      <div className="skills-wrapper flex justify-between items-start w-11/12 h-5/6">
        <div className="skills-sec flex flex-col text-white bg-zinc-950 rounded-xl w-4/12 h-full p-2 gap-5">
          <div className="skills-list w-full tracking-widest">
            Javascript
            <div className=" flex w-full h-1 bg-zinc-800 rounded-lg">
              <span className=" w-10/12 h-1 bg-stone-600 rounded-lg"></span>
            </div>
          </div>
          <div className="skills-list w-full tracking-widest">
            HTML
            <div className=" flex w-full h-1 bg-zinc-800 rounded-lg">
              <span className=" w-8/12 h-1 bg-stone-600 rounded-lg"></span>
            </div>
          </div>
          <div className="skills-list w-full tracking-widest">
            CSS
            <div className=" flex w-full h-1 bg-zinc-800 rounded-lg">
              <span className=" w-7/12 h-1 bg-stone-600 rounded-lg"></span>
            </div>
          </div>
          <div className="skills-list w-full tracking-widest">
            React JS
            <div className=" flex w-full h-1 bg-zinc-800 rounded-lg">
              <span className=" w-9/12 h-1 bg-stone-600 rounded-lg"></span>
            </div>
          </div>
          <div className="skills-list  w-full tracking-widest">
            Tailwind CSS
            <div className=" flex w-full h-1 bg-zinc-800 rounded-lg">
              <span className=" w-7/12 h-1 bg-stone-600 rounded-lg"></span>
            </div>
          </div>
        </div>
        <div className="skills-sec bg-zinc-950 rounded-xl w-4/12 h-full p-2">
          <div className="skills-list text-white space-y-6 w-full tracking-widest">
            <div className="">
              Git & GitHub
              <div className=" flex w-full h-1 bg-zinc-800 rounded-lg">
                <span className="  w-9/12 h-1 bg-stone-600 rounded-lg"></span>
              </div>
            </div>
            <div>
              VsCode
              <div className=" flex w-full h-1 bg-zinc-800 rounded-lg">
                <span className="  w-9/12 h-1 bg-stone-600 rounded-lg"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
