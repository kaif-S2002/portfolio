import React from "react";

const footer = () => {
  return (
    <>
      <footer className="footer-wrapper flex flex-col justify-center items-center gap-4 p-4 text-2xl text-white ">
        <h2 className=" text-stone-500 tracking-wide">
          Kaif Siddiqui &middot; Frontend Web Developer
        </h2>
        <h3 className=" text-xl tracking-wide">
          Linkedin &middot; Twitter &middot; Github
        </h3>
        <p className=" text-sm pt-6">
          <small>&copy;2024 Kaif Siddiqui. All rights reserved.</small>
        </p>
      </footer>
    </>
  );
};

export default footer;
