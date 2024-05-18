"use client";
import React from "react";

const footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="footer-wrapper flex justify-between items-end mx-12 mb-8 text-slate-100 text-xs"
      >
        <p>&copy;2024 Kaif Siddiqui. All rights reserved.</p>
        <button className="top-btn pb-12 select-none text-stone-600">
          <a href="#home">&#8593;</a>
        </button>
        <p>Kaif siddiqui &middot; frontend web developer</p>
      </footer>
    </>
  );
};

export default footer;
