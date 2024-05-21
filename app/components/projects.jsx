"use client";
import React from "react";
import { FaNewspaper, FaCartShopping } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";

const projects = () => {
  return (
    <>
      <section
        id="projects"
        className="projects-wrapper flex flex-col justify-center items-center px-16 pt-36 text-stone-500 h-fit overflow-hidden"
      >
        <div className="projects-heading text-3xl tracking-wider pb-16 ">
          <h1>{`<Projects/>`}</h1>
        </div>
        <div className="projects flex flex-col gap-20 w-full text-xl tracking-wider">
          <div
            id="news-card"
            className={`projects-card news-card sm:max-md:w-full`}
          >
            <FaNewspaper size={120} className="projects-icon" />
            <div className="project-tech flex flex-col w-6/12 gap-4">
              <h4>News App</h4>
              <p className=" text-sm max-sm:text-xs">
                Javascript, HTML, CSS, React JS, API's, React-hooks, JSON,
                Fetch/Async-await etc.
              </p>
              <div className="project-links max-sm:text-xs">
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
            className={`projects-card portfolio-card sm:max-md:w-full`}
          >
            <BsPersonWorkspace size={120} className="projects-icon" />
            <div className="project-tech flex flex-col w-6/12 gap-4">
              <h4>Portfolio</h4>
              <p className=" text-sm max-sm:text-xs">
                Javascript, HTML, CSS, Next JS, Tailwind-CSS, UI/UX etc.
              </p>
              <div className="project-links max-sm:text-xs">
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
            className={`projects-card ecommerce-card sm:max-md:w-full`}
          >
            <FaCartShopping size={120} className="projects-icon" />
            <div className="project-tech flex flex-col w-6/12 gap-4">
              <h4>Ecommerce</h4>
              <p className=" text-sm max-sm:text-xs">Arriving shortly !</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default projects;
