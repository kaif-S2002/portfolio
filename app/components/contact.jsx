import React from "react";

const contact = () => {
  return (
    <>
      <section
        id="contact"
        className="contact-wrapper flex flex-col justify-between items-center h-screen text-white px-20 pt-28 pb-2"
      >
        <div className="contact-heading text-3xl text-stone-500 font-bold tracking-wider pb-10">
          <h2>{`<Contact/>`}</h2>
        </div>
        <div className="greet-text text-lg text-stone-500 font-bold tracking-wider pb-1 pl-1 w-full border-b-2 border-stone-500">
          <h1>Thanks for visiting.</h1>
        </div>
      </section>
    </>
  );
};

export default contact;
