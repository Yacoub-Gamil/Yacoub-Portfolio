/* eslint-disable react/prop-types */
function AboutMeCard({ children, title, icon }) {
  return (
    <div className=" p-4 flex items-center shadow-[0px_0px_10px_0px_#3ecf8e] flex-col  justify-center rounded-md hover:scale-105 duration-300">
      <img
        className=" xs:h-[10rem] lg:h-[12rem] sm:h-[11rem] xl:h-[16rem]"
        src={icon}
        alt="svg"
      />
      <h1 className="xs:text-[1.4rem] text-white sm:text-[1.6rem] xl:text-[2rem] font-black">
        {title}
      </h1>
      <p className="xs:text-[1rem] text-[#b4b4b4] sm:text-[1.2rem] xl:text-[1.4rem] text-center">
        {children}
      </p>
    </div>
  );
}

export default AboutMeCard;
