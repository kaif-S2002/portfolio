import React from "react";

const projects = () => {
  return (
    <>
      <section
        id="projects"
        className="projects-wrapper flex flex-col justify-center items-center px-16 pt-56 pb-36 h-screen"
      >
        <div className="projects-heading text-3xl text-stone-500 font-semibold tracking-wider pb-16 ">
          <h1>{`<Projects/>`}</h1>
        </div>
        <div className="projects flex justify-center gap-2 text-stone-500 w-full">
          <div
            className={`projects-card news-card h-64 w-64 flex justify-center text-lg p-2 rounded-xl bg-zinc-950 hover:w-6/12 hover:scale-105 hover:shadow-lg`}
          >
            <h4>News App</h4>
          </div>
          <div className="projects-card ecommerce-card h-64 w-64 flex justify-center text-lg p-2 rounded-xl bg-zinc-950 hover:w-6/12 hover:scale-105 hover:shadow-lg">
            <h4>Ecommerce</h4>
          </div>
          <div className="projects-card portfolio-card h-64 w-64 flex justify-center text-lg p-2 rounded-xl bg-zinc-950 hover:w-6/12 hover:scale-105 hover:shadow-lg">
            <h4>Portfolio</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default projects;
