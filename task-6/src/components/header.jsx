import { IoFootballOutline } from "react-icons/io5";
function Header() {
  return (
    <div>
      <div className="m-5 h-20  ">
        <div className="bg-lime-400 rounded-lg">
          <h1 className="pt-6 pd-6 text-center text-6xl">
            <IoFootballOutline className="inline animate-bounce" />
            Who is the best footballer?
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
