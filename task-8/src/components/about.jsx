import Kids from "../assets/kids.jpg";
import { TbCircleArrowRightFilled } from "react-icons/tb";

function About() {
  return (
    <div>
      <div className="relative p-4 md:p-20">
        <img
          src={Kids}
          alt="Orphan Kids"
          className="rounded-3xl w-full shadow-2xl shadow-emerald-900 opacity-80"
        />
        <div className="absolute inset-0 flex flex-col gap-4 md:gap-10 items-center justify-center">
          <h1 className="text-2xl md:text-5xl font-bold text-white text-center">
            Every Child Deserves a Chance: Support Their Journey!
          </h1>
          <button className="btn btn-ghost border border-white w-40 md:w-80 text-lg md:text-xl text-white">
            DONATE
            <TbCircleArrowRightFilled />
          </button>
        </div>
        <hr className="mt-10 md:mt-20" />
      </div>
    </div>
  );
}

export default About;
