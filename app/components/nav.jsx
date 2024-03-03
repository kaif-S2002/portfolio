import React from "react";

const nav = () => {
  return (
    <>
      <div className="nav-wrapper flex bg-zinc-950 pt-6 pb-4 px-12 justify-between items-center text-slate-100 fixed w-screen">
        <div className="nav-logo cursor-pointer">
          <span className="flex justify-between items-center text-xl font-semibold tracking-widest text-stone-500 select-none">
            <a href="/">{"<Ks.dev/>"}</a>
          </span>
        </div>
        <div className="nav-items flex space-x-8">
          <div className="nav-list">
            <ul className="nav-ul flex text-base space-x-10 tracking-wider select-none">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">About Me</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="nav-btn">
            <button className=" text-base bg-stone-600 hover:scale-105 select-none">
              <a href="#">Resume</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default nav;
