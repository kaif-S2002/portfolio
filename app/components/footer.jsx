import React from "react";
import Link from "next/link";

const footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="footer-wrapper flex justify-between items-end mx-12 mb-8 text-stone-600 text-xs"
      >
        <p>&copy;2024 Kaif Siddiqui. All rights reserved.</p>
        <button className="top-btn pb-12">
          <a href="#home">&#8593;</a>
        </button>
        <p>Kaif siddiqui &middot; frontend web developer</p>
      </footer>
    </>
  );
};

export default footer;
