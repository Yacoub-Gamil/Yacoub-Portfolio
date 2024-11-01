/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function ButtonLink({ children, to }) {
  return (
    <Link
      to={to}
      onClick={() => {
        const link = to.replace("#", "")
        const element = document.getElementById(link);
        window.scrollTo({
          behavior: "smooth",
          top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        });
      }}
      className=" cursor-pointer text-[#b4b4b4] xs:text-[.7rem] sm:text-[.8rem] xl:text-[1rem] hover:text-[#fff] font-bold duration-200"
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
