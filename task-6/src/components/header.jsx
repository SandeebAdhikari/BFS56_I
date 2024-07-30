import { IoFootballOutline } from "react-icons/io5";
function Header() {
  return (
    <div>
      <div className=" m-10 h-20 ">
        <h1 className="pt-6 text-center text-6xl">
          <IoFootballOutline className="inline animate-bounce " />
          Who is the best footballer in the world?
        </h1>
      </div>
    </div>
  );
}

export default Header;
