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
        <div className="projects flex flex-col gap-20 text-stone-500 w-full text-xl">
          <div
            id="news-card"
            className={`projects-card news-card flex justify-around items-center gap-6  h-64 w-7/12 p-2 rounded-xl bg-zinc-950`}
          >
            <FaNewspaper size={120} className="projects-icon text-stone-600" />
            <div className=" flex flex-col w-6/12 gap-4">
              <h4>News App</h4>
              <p className=" text-sm">
                Javascript, HTML, CSS, React JS, API's, JSON etc.
              </p>
            </div>
          </div>

          <div
            id="portfolio-card"
            className={`projects-card portfolio-card flex justify-around items-center gap-6 h-64 w-7/12 p-2 rounded-xl bg-zinc-950`}
          >
            <BsPersonWorkspace
              size={120}
              className="projects-icon text-stone-600"
            />
            <div className=" flex flex-col w-6/12 gap-4">
              <h4>Portfolio</h4>
              <p className=" text-sm">
                Javascript, HTML, CSS, Next JS, Tailwind CSS etc.
              </p>
            </div>
          </div>
          <div
            id="ecommerce-card"
            className={`projects-card ecommerce-card flex justify-around items-center gap-6  h-64 w-7/12 p-2 rounded-xl bg-zinc-950`}
          >
            <FaCartShopping
              size={120}
              className="projects-icon text-stone-600"
            />
            <div className=" flex flex-col w-6/12 gap-4">
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
