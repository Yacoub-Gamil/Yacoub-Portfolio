import { PiBookOpenText } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import Logos from "../components/Logos";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";

function Home() {
  useGSAP(() => {
    gsap.fromTo(
      "#hero",
      { opacity: 0, y: -10 },
      {
        opacity: 1,
        delay: 1,
        y: 0,
        duration: 2,
      }
    );
  }, []);

  return (
    <section id="home" className=" text-white container flex justify-center">
      <div id="hero">
        <div className=" text-center xs:mt-[4rem] mt-[8rem]">
          <h1 className=" xs:text-[3rem]  xxl:text-[7rem] sm:text-[4rem] xl:text-[5rem]  xs:mt-[1.8rem] xl:mt-[3rem]">
            Yacoub Gamil
          </h1>
          <h2 className=" text-[#3ecf8e] xxl:text-[4rem] xxl:mt-[-2rem] sm:text-[2.4rem] xs:text-[1.4rem] xl:text-[3rem]">
            Frontend web development
          </h2>
        </div>
        <div>
          <h1 className=" xs:text-[1rem] sm:text-[1.4rem] xl:text-[2rem] text-center text-[#b4b4b4]">
            A programmer who is constantly seeking
            <br /> new learning opportunities.
          </h1>
        </div>
        <div className="mt-[3.5rem] justify-center flex xs:gap-4 sm:gap-6">
          <Link
            to="#projects"
            onClick={() => {
              const element = document.getElementById("projects");
              window.scrollTo({
                behavior: "smooth",
                top:
                  element.getBoundingClientRect().top + window.pageYOffset - 80,
              });
            }}
            className=" cursor-pointer flex xs:text-[.8rem] sm:text-[1rem] xl:text-[1.4rem] items-center gap-2 hover:bg-[#3c9872] duration-300 border-[#138253] py-[4px] px-4 bg-[#006239] rounded-md"
          >
            <span>Projects</span> <GrProjects />
          </Link>
          <Link
            href=""
            className=" flex xs:text-[.8rem] sm:text-[1rem] xl:text-[1.4rem] items-center gap-2 border border-[#373636] hover:border-[#585656] duration-300  py-[4px] px-4 bg-[#242424] rounded-md"
            to=""
          >
            <span>Resume</span> <PiBookOpenText />
          </Link>
        </div>

        <Logos />

        <p className=" text-center xl:text-[1.2rem] xs:text-[.8rem] mt-[3rem] xxl:mt-[6rem] text-[#999898] ">
          “Be the change that you want to see in the world”
        </p>
      </div>
    </section>
  );
}

export default Home;
