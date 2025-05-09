"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Line, RiCloseFill } from "react-icons/ri";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className="nav-wrapper flex bg-zinc-950 border-b border-zinc-900 pt-6 pb-4 px-8 justify-between items-center text-slate-100 fixed w-screen overflow-hidden z-10">
      <div className="nav-logo cursor-pointer">
        <span className="flex justify-between items-center text-xl font-semibold pt-0.5 tracking-widest text-stone-500 select-none">
          <a href="/">{"<KS/>"}</a>
        </span>
      </div>
      <div className={`nav-items flex ${open ? "openList" : ""}`}>
        <div className="nav-list">
          <ul className="nav-ul flex text-sm tracking-wider select-none">
            <li>
              <Link href="#home" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={handleClick}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" onClick={handleClick}>
                Skills
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={handleClick}>
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={handleClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-btn">
          <button className=" text-sm bg-stone-600 hover:scale-105 hover:ease-in-out select-none">
            <a href="#" onClick={handleClick}>
              Resume
            </a>
          </button>
        </div>
      </div>
      <div className="menu-btn">
        {open ? (
          <RiCloseFill
            size={30}
            onClick={handleClick}
            className="text-stone-500"
          />
        ) : (
          <RiMenu3Line
            size={30}
            onClick={handleClick}
            className=" text-stone-500"
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;
