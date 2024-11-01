import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      onClick={() => {
        const element = document.getElementById("home");
        window.scrollTo({
          behavior: "smooth",
          top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        });
      }}
      to="#home"
      className="flex items-center"
    >
      <img
        className=" xl:w-[3rem] sm:w-[2rem] xs:w-[1.4rem] "
        src="yacoub-logo.png"
      />
      <h1 className=" md:text-[1.2rem] xs:text-[0.8rem] font-semibold mx-[-5px]">
        ACOUB<span className=" xs:text-[8px] xl:text-[.8rem]">.me</span>
      </h1>
    </Link>
  );
}

export default Logo;
