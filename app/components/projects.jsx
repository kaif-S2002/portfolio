import React from "react";

const projects = () => {
  return (
    <>
      <section className="projects-wrapper flex flex-col justify-start items-start px-16 py-32 h-screen">
        <div className="projects-heading text-3xl text-stone-500 font-semibold tracking-wider pb-10 ">
          <h1>{`<Projects/>`}</h1>
        </div>
        <div className="projects flex justify-center gap-2 w-full">
          <div
            className={`projects-card news-card h-60 w-60 flex justify-center text-white text-lg p-2 rounded-xl bg-zinc-900 hover:w-6/12`}
          >
            <h4>News App</h4>
          </div>
          <div className="projects-card ecommerce-card h-60 w-60 flex justify-center text-white text-lg p-2 rounded-xl bg-zinc-900 hover:w-6/12">
            <h4>Ecommerce</h4>
          </div>
          <div className="projects-card portfolio-card h-60 w-60 flex justify-center text-white text-lg p-2 rounded-xl bg-zinc-900 hover:w-6/12">
            <h4>Portfolio</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default projects;
