import { SiNextdotjs } from "react-icons/si";
import WorkCard from "./WorkCard";
import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";

function WorkWith() {
  return (
    <section className="p-4">
      <div className="mb-6">
        <p className=" xs:text-[1rem] md:text-[1.4rem] lg:text-[2rem] uppercase font-semibold text-white">
          <span className=" xs:text-[.8rem] lg:text-[1.2rem] ">03.</span> As i
          work <span className=" text-[#3ecf8e]">smoothly with</span>
        </p>
      </div>

      <div className=" grid xs:grid-cols-2 lg:grid-cols-4  sm:gap-3 xs:gap-2 lg:gap-4">
        <WorkCard icon={<FaHtml5 />}>HTML</WorkCard>
        <WorkCard icon={<FaCss3Alt />}>CSS</WorkCard>
        <WorkCard icon={<RiJavascriptFill />}>JavaScript</WorkCard>
        <WorkCard icon={<FaReact />}>React</WorkCard>
        <WorkCard icon={<SiNextdotjs />}>Next.js</WorkCard>
        <WorkCard icon={<RiTailwindCssFill />}>Tailwind</WorkCard>
        <WorkCard icon={<FaDatabase />}>type ORM</WorkCard>
        <WorkCard icon={<FaGitAlt />}>Git</WorkCard>
      </div>
    </section>
  );
}

export default WorkWith;
