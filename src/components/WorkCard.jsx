/* eslint-disable react/prop-types */
function WorkCard({ children, icon, arrow }) {
  return (
    <div
      className={`${
        arrow ? "bg-slate-100 xs:text-[#030712]" : ""
      } xs:text-[1rem] cursor-pointer hover:bg-slate-50  hover:border-[#3ecf8e] font-bold hover:text-black duration-500 text-white border rounded-md flex justify-center items-center gap-2 xs:py-2 xs:px-3 border-[#373636] lg:py-4 lg:px-6 lg:text-[1.2rem] text-center`}
    >
      <span>{children}</span>
      <span className=" xs:text-[1.6rem] lg:text-[2rem]">{icon}</span>
    </div>
  );
}

export default WorkCard;
