import React from "react";

const nav = () => {
  return (
    <>
      <div className="nav-wrapper flex bg-zinc-900 pt-6 pb-4 px-12 justify-between items-center text-slate-100">
        <div className="nav-logo cursor-pointer">
          <span className="flex justify-between items-center text-xl font-semibold tracking-widest text-stone-500">
            {"<Ks.dev/>"}
          </span>
        </div>
        <div className="nav-items flex space-x-8">
          <div className="nav-list">
            <ul className="nav-ul flex text-base space-x-10 tracking-wider">
              <li>Home</li>
              <li>Projects</li>
              <li>Skills</li>
              <li>About Me</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="nav-btn">
            <button className=" text-base bg-stone-600 hover:bg-stone-500">
              <a href="#">Resume</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default nav;
