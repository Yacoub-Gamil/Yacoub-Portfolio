import ProjectCard from "../components/ProjectCard";
import WorkWith from "../components/WorkWith";

function Projects() {
  return (
    <section className="">
      <WorkWith />
      <div id="projects">
        <h1 className="xs:text-[1rem] sm:text-[1.2rem] lg:text-[1.6rem] text-center mt-[4rem] mb-[2rem] text-white text-[1.6rem]">
          Here are some of my{" "}
          <span className="xs:text-[1.6rem] lg:text-[2rem] text-[#3ecf8e] uppercase text-[2.6rem] ">
            projects
          </span>
        </h1>
      </div>

      <div
        id="porjectCard"
        className="container h-[100vh] mx-auto p-4 rounded-md"
      >
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
