import React from "react";
import { FaNewspaper, FaCartShopping } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";

const projects = () => {
  return (
    <>
      <section
        id="projects"
        className="projects-wrapper flex flex-col justify-center items-center px-16 pt-36 h-fit"
      >
        <div className="projects-heading text-3xl text-stone-500 font-semibold tracking-wider pb-16 ">
          <h1>{`<Projects/>`}</h1>
        </div>
        <div className="projects flex flex-col gap-20 text-stone-500 w-full">
          <div
            id="news-card"
            className={`projects-card news-card flex flex-col justify-between items-center h-64 w-7/12 text-lg p-2 rounded-xl bg-zinc-950 `}
          >
            <h4>News App</h4>
            <FaNewspaper
              size={120}
              className="projects-icon mb-9 text-stone-600"
            />
          </div>

          <div
            id="portfolio-card"
            className={`projects-card portfolio-card flex flex-col justify-between items-center h-64 w-7/12 text-lg p-2 rounded-xl bg-zinc-950`}
          >
            <h4>Portfolio</h4>
            <BsPersonWorkspace
              size={120}
              className="projects-icon mb-9 text-stone-600"
            />
          </div>
          <div
            id="ecommerce-card"
            className={`projects-card ecommerce-card flex flex-col justify-between items-center h-64 w-7/12 text-lg p-2 rounded-xl bg-zinc-950 `}
          >
            <h4>Ecommerce</h4>
            <FaCartShopping
              size={120}
              className="projects-icon mb-9 text-stone-600"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default projects;
