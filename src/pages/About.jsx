import AboutMeCard from "../components/AboutMeCard";

function About() {
  return (
    <section id="about" className=" p-2 mt-[6rem] mb-[2rem] text-[#b4b4b4]">
      <div>
        {/* 1 */}
        <div className="p-4">
          <h1 className=" xs:text-[1.5rem] sm:text-[1.4rem] xl:text-[2.4rem] font-semibold text-white">
            <span className="xs:text-[0.8rem] sm:text-[.8rem] xl:text-[1.4rem]">
              01.
            </span>{" "}
            ABOUT ME
          </h1>
          <p className=" xs:text-[1rem] sm:text-[1rem] xl:text-[1.4rem] xs:p-2 p-4">
            I&apos;m a budding frontend web developer with a strong passion for
            crafting visually appealing and user-friendly websites. Recently
            diving into HTML, CSS, and JavaScript, React, Next.js, I&apos;m
            excited to learn more about responsive design and modern frameworks.
            I thrive on turning ideas into interactive experiences and enjoy
            solving problems through code. With a keen eye for detail and a
            desire to keep improving, I&apos;m ready to embrace new challenges
            and collaborate on innovative projects in the web development world.
          </p>
        </div>
        {/* 2 */}
        <div className="p-4">
          <h1 className=" xs:text-[1.5rem] sm:text-[1.4rem] xl:text-[2.4rem] font-semibold text-white">
            <span className="xs:text-[0.8rem] sm:text-[.8rem] xl:text-[1.4rem]">
              02.
            </span>{" "}
            EXPERTISE
          </h1>
          <p className=" xs:text-[1rem] sm:text-[1rem] xl:text-[1.4rem] xs:p-2 p-4">
            I am constantly seeking to improve my skills and stay up-to-date
            with the latest technologies. I am eager to take on new challenges
            and use my expertise to contribute to successful projects.
          </p>
        </div>
        {/* 3 */}
        <div className=" p-4 grid sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 xs:grid-cols-1 gap-8 text-black">
          <AboutMeCard icon="/1.svg" title="Software Development">
            I&apos;m interested in software engineering in general, I love
            learning about algorthims, data structures, and design patterns.
            It&apos;s my way to express my creativity. Some people create music,
            movies, paintings or pottery. I create software.
          </AboutMeCard>

          <AboutMeCard icon="/2.webp" title="Frontend Development">
            Proficient in developing modern frontend applications using React,
            and Next.js. Skilled in HTML, CSS, and Tailwind for building
            responsive user interfaces. Committed to delivering high-quality and
            user-friendly web experiences.
          </AboutMeCard>
        </div>
      </div>
    </section>
  );
}

export default About;
