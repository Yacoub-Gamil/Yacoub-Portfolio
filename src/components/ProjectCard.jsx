import { useState } from "react";
import { HiMiniBolt } from "react-icons/hi2";
import { PiEyeClosedFill, PiEyeFill } from "react-icons/pi";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
function ProjectCard({ children, image1, image2, title, intro, to }) {
  const [show, setShow] = useState(false);

  return (
    <div className=" xs:w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[55rem] xl:w-[68rem] p-4 h-[30rem] relative shadow-[0px_0px_10px_0px_#3ecf8e] rounded-xl border-[#373636]">
      <div className="xs:w-[15rem] sm:w-[20rem] md:w-[22rem] lg:w-[30rem] xl:w-[40rem] border hover:scale-110 duration-500 hover:z-[60] overflow-hidden rounded-xl absolute">
        <img className=" object-cover" src={image1} alt="" />
      </div>
      <div className="xs:w-[10rem] md:w-[12rem] lg:w-[20rem] xl:w-[25rem] sm:w-[12rem] border hover:scale-110 duration-500 absolute overflow-hidden rounded-xl z-50 lg:left-[25%] lg:top-[30%] xl:left-[30%] xl:top-[30%] xs:top-[14%] xs:left-[40%] sm:left-[50%] ">
        <img className=" object-cover" src={image2} alt="" />
      </div>
      {/* start */}
      <div className=" xs:mt-[10rem] sm:mt-[12rem] lg:mt-[0rem] w-full flex flex-col xs:items-center lg:items-end">
        <h1 className=" xs:w-[6rem] lg:w-[14rem] sm:text-[1.2rem] sm:w-[10rem] text-center lg:mx-[10rem] xl:mx-[12rem] xs:text-[.8rem] lg:text-[1.6rem] text-white font-bold">
          {title}
        </h1>

        <div className=" text-[#b4b4b4] lg:w-[20rem] p-4 text-center">
          <span className=" sm:text-[1rem] xs:mb-[.4rem] block xs:text-[.8rem] lg:text-[1.4rem] font-semibold text-white">
            {intro}
          </span>
          <p className="xs:text-[.8rem]  lg:text-[1rem]">{children}</p>
        </div>
        <div className=" flex flex-col items-center gap-4 text-white  mx-[7rem]">
          <div className=" xs:text-[1.2rem] sm:text-[1.6rem] sm:mb-[.8rem] flex gap-4 xs:mt-[.2rem] mt-[2rem] lg:text-[2rem] ">
            <div>
              <RiReactjsFill />
            </div>
            <div>
              <RiTailwindCssFill />
            </div>
            <div>
              <HiMiniBolt />
            </div>
          </div>

          <NavLink
            target="blank"
            to={to}
            className={`flex xs:w-[9rem] lg:w-[12rem] lg:mt-[-.7rem] sm:py-[.6rem] justify-center items-center lg:py-[.4rem] gap-4 xs:py-1 xs:text-[.8rem] xs:px-[.5rem] lg:text-[1.2rem] rounded-lg  shadow-[0px_0px_10px_0px_#3ecf8e] `}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <span className="uppercase text-white">view project</span>

            <span
              className={`border rounded-full ${show && "border-[#3ecf8e]"}`}
            >
              {" "}
              {!show ? <PiEyeClosedFill /> : <PiEyeFill />}
            </span>
          </NavLink>
        </div>
      </div>
      {/* end */}
    </div>
  );
}

export default ProjectCard;
