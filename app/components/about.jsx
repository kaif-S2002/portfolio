import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <>
      <section
        id="about"
        className="about-wrapper flex flex-col text-white px-16 pt-36 m-auto h-fit"
      >
        <div className="about-heading flex justify-center items-center text-3xl text-stone-500 font-bold tracking-wider pb-5">
          <h1>{`<About />`}</h1>
        </div>
        <div className="about-text flex text-lg font-light w-full tracking-widest pl-1 pt-16 pb-12">
          <p>
            Hi, I’m Kaif Siddiqui a{" "}
            <span>self-taught frontend web developer</span> based out of{" "}
            <span>Greater Noida</span>, <span>India</span>. I have completed my
            graduation with Political Science Honors from DU (Delhi University-
            2023). I have also completed some courses in frontend web
            development from online resources (<span>Frontend Masters</span>,{" "}
            <span>Scaler</span>, <span>Codedamn</span>, etc.). Currently, I’m
            hunting for an opportunity for a frontend web developer role as my
            professional career.
          </p>
          <div className="sign-image pl-8 shrink-0">
            <Image
              src={"/assets/logo6.png"}
              alt="sign"
              width={200}
              height={200}
            />
          </div>
        </div>
        {/* <div className="greet-text text-lg text-stone-500 font-bold tracking-wider pb-1 pl-1 w-full border-b-2 border-stone-500">
          <h1>Thanks for visiting.</h1>
        </div> */}
      </section>
    </>
  );
};
export default about;
