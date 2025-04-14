"use client";
import React from "react";

function contact() {
  return (
    <section
      id="contact"
      className="contact-wrapper flex flex-col justify-evenly items-center text-2xl text-stone-500 px-16 tracking-wider overflow-hidden"
    >
      <div className=" text-3xl">
        <h1>{`<Contact />`}</h1>
      </div>
      <div className="contact-links flex justify-evenly items-center w-full select-none">
        <a
          href="mailto:kaifs8998@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-mail
        </a>
        <a
          href="http://www.linkedin.com/in/kaifsiddiqui02"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/kaif-S2002"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://twitter.com/kaifsiddiqui__"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </section>
  );
}

export default contact;
