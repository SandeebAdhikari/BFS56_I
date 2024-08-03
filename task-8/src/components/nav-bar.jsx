import { FaHome } from "react-icons/fa";
import { TbCircleArrowRightFilled } from "react-icons/tb";

function NavBar() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-inner shadow-emerald-900 px-4 md:px-20">
        <FaHome className="hover:animate-bounce" size={47} />
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl md:text-5xl">SanoSansar</a>
        </div>
        <div className="hidden md:block h-10 border-l-2 border-black mr-10"></div>
        <div className="form-control w-full md:w-96">
          <input
            type="text"
            placeholder="EMAIL"
            className="input input-bordered w-full md:w-96"
            style={{ textAlign: "center" }}
          />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-3">
            <li>
              <a className="p-3 text-lg md:text-xl">
                JOIN US <TbCircleArrowRightFilled />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
