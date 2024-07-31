import { FaHome } from "react-icons/fa";
//import LogoImg from "../assets/logo.png";

function NavBar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <FaHome className="hover:animate-bounce" />
        <div className="flex-1">
          <a className="btn btn-ghost text-xl ">SanoSansar</a>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
