import React from "react";
import Link from "next/link";

const footer = () => {
  return (
    <>
      <footer
        id="contact"
        className="footer-wrapper flex flex-col justify-center items-center gap-4 p-4 h-fit text-3xl text-white "
      >
        <h2 className=" text-stone-500 tracking-wide pt-4">
          Kaif Siddiqui &middot; Frontend Web Developer
        </h2>
        <p className=" text-sm text-stone-500 ">
          Phone No: +91-9310****** | Email: kaifs8998@gmail.com
        </p>
        <div className=" text-xl tracking-wider select-none">
          <Link
            className="footer-links "
            href="http://www.linkedin.com/in/kaifsiddiqui02"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </Link>{" "}
          &middot;{" "}
          <Link
            className="footer-links "
            href="https://twitter.com/kaifsiddiqui__"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>{" "}
          &middot;{" "}
          <Link
            className="footer-links "
            href="https://github.com/kaif-S2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </Link>
        </div>
        <p className="copyright text-xs pt-6">
          <small>&copy;2024 Kaif Siddiqui. All rights reserved.</small>
        </p>
      </footer>
    </>
  );
};

export default footer;
