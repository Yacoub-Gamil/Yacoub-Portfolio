import { Link, NavLink } from "react-router-dom";
import { FaSquareGithub } from "react-icons/fa6";
import ButtonLink from "./ButtonLink";

function NaviLinks() {
  return (
    <div className="flex justify-between items-center sm:w-[58%] w-[55%]">
      <div className="flex xs:gap-3 sm:gap-4 xl:gap-6">
        <ButtonLink to="#home">Home</ButtonLink>
        <ButtonLink to="#about">About</ButtonLink>
        <ButtonLink to="#projects">Projects</ButtonLink>
      </div>

      <div className="flex items-center gap-2">
        <NavLink
          className="cursor-pointer border rounded-md xl:text-[1.8rem] border-[#373636] hover:border-[#585656] xs:text-[1rem] sm:text-[1.4rem] text-[#b4b4b4] duration-300"
          target="blank"
          to="https://github.com/Yacoub-Gamil"
        >
          <FaSquareGithub />
        </NavLink>
        <Link
          to="#contact"
          onClick={() => {
            const element = document.getElementById("contact");
            window.scrollTo({
              behavior: "smooth",
              top:
                element.getBoundingClientRect().top + window.pageYOffset - 80,
            });
          }}
          className="border border-[#373636] sm:text-[.7rem] xl:text-[.9rem] xs:text-[1rem] sm:block hover:border-[#585656] duration-300 font-semibold xs:hidden md:block sm:py-[3px] sm:px-4 bg-[#242424] rounded-md"
        >
          <span>Contact</span>
        </Link>
      </div>
    </div>
  );
}

export default NaviLinks;
