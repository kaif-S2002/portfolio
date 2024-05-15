"use client";
import React from "react";
import { FaNewspaper, FaCartShopping } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";

const projects = () => {
  return (
    <>
      <section
        id="projects"
        className="projects-wrapper flex flex-col justify-center items-center px-16 pt-36 h-fit overflow-hidden"
      >
        <div className="projects-heading text-3xl text-stone-500 font-semibold tracking-wider pb-16 ">
          <h1>{`<Projects/>`}</h1>
        </div>
        <div className="projects flex flex-col gap-20 text-stone-500 w-full text-xl tracking-wider">
          <div
            id="news-card"
            className={`projects-card news-card flex justify-around items-center gap-6 p-2 rounded-xl bg-zinc-950`}
          >
            <FaNewspaper size={120} className="projects-icon text-stone-600" />
            <div className="project-tech flex flex-col w-6/12 gap-4">
              <h4>News App</h4>
              <p className=" text-sm">
                Javascript, HTML, CSS, React JS, API's, React-hooks, JSON,
                Fetch/Async-await etc.
              </p>
              <div className="project-links flex justify-start items-center gap-20 text-sm mt-4 tracking-widest">
                <a
                  className=" text-white hover:text-stone-500"
                  href="https://github.com/kaif-S2002/news-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github <span className=" ml-1"> &#8594; </span>
                </a>
                <a
                  className=" text-white hover:text-stone-500"
                  href="https://kaif-s2002.github.io/news-app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to site <span className=" ml-1"> &#8594; </span>
                </a>
              </div>
            </div>
          </div>

          <div
            id="portfolio-card"
            className={`projects-card portfolio-card flex justify-around items-center gap-6 p-2 rounded-xl bg-zinc-950`}
          >
            <BsPersonWorkspace
              size={120}
              className="projects-icon text-stone-600"
            />
            <div className="project-tech flex flex-col w-6/12 gap-4">
              <h4>Portfolio</h4>
              <p className=" text-sm">
                Javascript, HTML, CSS, Next JS, Tailwind-CSS, UI/UX etc.
              </p>
              <div className="project-links flex justify-between items-center pr-10 text-sm mt-4 tracking-widest">
                <a
                  className=" text-white hover:text-stone-500"
                  href="https://github.com/kaif-S2002/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github <span className=" ml-1">&#8594;</span>
                </a>
              </div>
            </div>
          </div>
          <div
            id="ecommerce-card"
            className={`projects-card ecommerce-card flex justify-around items-center gap-6 p-2 rounded-xl bg-zinc-950`}
          >
            <FaCartShopping
              size={120}
              className="projects-icon text-stone-600"
            />
            <div className="project-tech flex flex-col w-6/12 gap-4">
              <h4>Ecommerce</h4>
              <p className=" text-sm">Arriving shortly !</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default projects;
