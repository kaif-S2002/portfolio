import React from "react";
import Link from "next/link";

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
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#skills">Skills</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
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
