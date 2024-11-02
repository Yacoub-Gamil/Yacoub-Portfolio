import { FaHtml5, FaJsSquare, FaReact, FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaSquareGithub } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Logos() {
  useGSAP(() => {
    gsap.fromTo(
      "#work",
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 2.5,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      ".icon",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.2,
        delay: 3,
        yoyo: true,
        stagger: {
          amount: 1,
          grid: [3, 1],
          from: "center",
        },
      }
    );
  }, []);

  return (
    <>
      <h1
        id="work"
        className=" xs:text-[0.5rem] lg:text-[.7rem] xl:text-[1rem] text-center mt-[5.4rem] text-[#d5d5d8]"
      >
        WORK SMOOTHLY WITH
      </h1>
      <div className="  text-[#d5d5d8] xxl:text-[3rem] mt-[1rem] xl:mb-[5.5rem] xl:mt-[1rem] lg:text-[2rem] flex justify-center items-center xs:gap-2 xl:gap-7 xs:text-[1.6rem] sm:text-[1.6rem] xl:text-[2rem]">
        <div className="icon ">
          <FaHtml5 />
        </div>
        <div className="icon ">
          <FaCss3Alt />
        </div>
        <div className="icon ">
          <FaJsSquare />
        </div>
        <div className="icon ">
          <FaReact />
        </div>
        <div className="icon ">
          <RiNextjsFill />
        </div>
        <div className="icon ">
          <RiTailwindCssFill />
        </div>
        <div className="icon ">
          <FaSquareGithub />
        </div>
      </div>
    </>
  );
}

export default Logos;
