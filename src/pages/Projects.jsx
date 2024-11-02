import ProjectCard from "../components/ProjectCard";
import WorkWith from "../components/WorkWith";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    gsap.to("#projectCard", {
      scrollTrigger: {
        x: 10,
        trigger: "#projectCard",
        start: "bottom, bottom",
        end: " top 20%",
      },
    });
  }, []);
  return (
    <section className=" mb-[4rem]">
      <WorkWith />

      <div id="projects" className="p-4">
        <h1 className="xs:text-[1rem] font-semibold sm:text-[1.2rem] lg:text-[1.6rem] mt-[4rem] mb-[2rem] text-white text-[1.6rem]">
          <span className="xs:text-[0.8rem] sm:text-[.8rem] xl:text-[1.2rem]">
            04.{" "}
          </span>
          Here are some of my{" "}
          <span className="xs:text-[1.6rem] lg:text-[2rem] text-[#3ecf8e] uppercase text-[2.6rem] ">
            projects
          </span>
        </h1>
      </div>

      <div id="projectCard" className="container mx-auto p-4 rounded-md">
        <div className="w-full h-full">
          {/* The container start */}
          <div className="w-full flex flex-col gap-6 items-center">
            <ProjectCard
              image1="/projects/wild-next/wild-next-1.png"
              image2="/projects/wild-next/wild-next-2.png"
              title="The Wild Oasis"
              intro="it's a user interface to do a reservation"
            >
              Where nature&apos;s beauty and comfortable living blend
              seamlessly. Hidden away in the heart of the Italian Dolomites,
              this is your paradise away from home. But it&apos;s not just about
              the luxury cabins. It&apos;s about the experience of reconnecting
              with nature and enjoying simple pleasures with family.
            </ProjectCard>
          </div>

          {/* end from here  */}
        </div>
        {/* The container end */}
      </div>
    </section>
  );
}

export default Projects;
