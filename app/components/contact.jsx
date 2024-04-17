import React from "react";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function contact() {
  return (
    <>
      <section
        id="contact"
        className="contact-wrapper flex flex-col text-white px-16 pt-28 m-auto h-fit"
      >
        <div className="contact-heading flex justify-center items-center text-3xl text-stone-500 font-bold tracking-wider">
          <h1>{`<Contact />`}</h1>
        </div>

        <div className="contact-items flex flex-col justify-center items-center text-stone-500 tracking-wider py-24">
          <div className=" flex gap-20 pb-10">
            <div className="contact-num flex justify-center items-center gap-4 p-4 bg-zinc-950 rounded-xl">
              <i className="num-icon">
                <FaPhone size={20} />
              </i>
              <span>+91-9310******</span>
            </div>
            <div className="contact-email flex justify-center items-center gap-4 p-4 bg-zinc-950 rounded-xl">
              <i className="email-icon">
                <MdEmail size={25} />
              </i>
              <span>kaifs8998@gmail.com</span>
            </div>
          </div>

          <div className="location-detail flex justify-center items-center gap-4 p-4 bg-zinc-950 rounded-xl">
            <i className="location-icon">
              <FaLocationDot size={20} />
            </i>
            <span>Greater Noida, UP, INDIA.</span>
          </div>
        </div>
        <div className="greet-text text-lg text-stone-500 font-bold tracking-wider pb-1 pl-1 w-full border-b-2 border-stone-500">
          <h1>Thanks for visiting.</h1>
        </div>
      </section>
    </>
  );
}

export default contact;
