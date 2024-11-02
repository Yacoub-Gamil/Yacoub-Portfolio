import Logo from "../components/Logo";
import NaviLinks from "../components/NaviLinks";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Header() {
  useGSAP(() => {
    gsap.fromTo(
      "#header",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <header
      id="header"
      className=" sticky w-full top-0 bg-[#121212] z-[100] flex justify-between p-4 items-center text-[#fafafa] border-b-[0.5px] border-[#2e2e2e]"
    >
      <Logo />
      <NaviLinks />
    </header>
  );
}

export default Header;
