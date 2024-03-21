import React from "react";

const projects = () => {
  return (
    <>
      <section className="projects-wrapper flex flex-col justify-start items-start px-16 py-32 h-screen">
        <div className="projects-heading text-3xl text-stone-500 font-semibold tracking-wider pb-10 ">
          <h1>{`<Projects/>`}</h1>
        </div>
        <div className="projects flex justify-evenly w-full">
          <div className="projects-card h-60 w-60 flex justify-center text-white text-lg p-2 rounded-xl bg-zinc-900">
            News App
          </div>
          <div className="projects-card h-60 w-60 flex justify-center text-white text-lg p-2 rounded-xl bg-zinc-900">
            Ecommerce
          </div>
          <div className="projects-card h-60 w-60 flex justify-center text-white text-lg p-2 rounded-xl bg-zinc-900">
            Portfolio
          </div>
        </div>
      </section>
    </>
  );
};

export default projects;
