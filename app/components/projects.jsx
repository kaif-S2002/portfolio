import React from "react";
import { FaNewspaper, FaCartShopping } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";

const projects = () => {
  return (
    <>
      <section
        id="projects"
        className="projects-wrapper flex flex-col justify-center items-center px-16 pt-24 h-screen"
      >
        <div className="projects-heading text-3xl text-stone-500 font-semibold tracking-wider pb-16 ">
          <h1>{`<Projects/>`}</h1>
        </div>
        <div className="projects flex justify-center gap-3 text-stone-500 w-full">
          <div
            className={`projects-card news-card flex flex-col justify-between items-center h-64 w-64 text-lg p-2 rounded-xl bg-zinc-950 hover:w-6/12 `}
          >
            <div className=" ">
              <h4>News App</h4>
            </div>
            <div className=" pb-10 text-stone-600">
              <FaNewspaper size={120} />
            </div>
          </div>
          <div className="projects-card ecommerce-card h-64 w-64 flex flex-col justify-between items-center text-lg p-2 rounded-xl bg-zinc-950 hover:w-6/12">
            <div className="">
              <h4>Portfolio</h4>
            </div>
            <div className=" pb-10 text-stone-600">
              <BsPersonWorkspace size={120} />
            </div>
          </div>
          <div className="projects-card portfolio-card h-64 w-64 flex flex-col justify-between items-center text-lg p-2 rounded-xl bg-zinc-950 hover:w-6/12 ">
            <div className="">
              <h4>Ecommerce</h4>
            </div>
            <div className=" pb-10 text-stone-600">
              <FaCartShopping size={120} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default projects;
