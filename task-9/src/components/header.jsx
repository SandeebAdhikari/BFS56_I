import { LuListTodo } from "react-icons/lu";

function header() {
  return (
    <div className="navbar bg-base-100">
      <LuListTodo size={30} />
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">To-DO List</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <button
            className="btn btn-ghost size"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Sign Up
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box  border border-inherit">
              <div className="p-5 flex flex-col  items-center gap-5">
                <h3 className="font-bold text-3xl te">Sign Up</h3>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-primary input-bordered w-72"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-primary input-bordered w-72"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-primary input-bordered w-72"
                />
                <input
                  type="Password"
                  placeholder="Re-enter Password"
                  className="input input-primary input-bordered w-72"
                />
                <button className="btn btn-outline"> Sign Up </button>
              </div>
            </div>
          </dialog>
          <button
            className="btn btn-active size"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box  border border-inherit">
              <div className="p-5 flex flex-col  items-center gap-5">
                <h3 className="font-bold text-3xl te">Login</h3>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-72"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-primary input-bordered w-72"
                />
                <button className="btn btn-outline"> Login </button>
              </div>
            </div>
          </dialog>
        </ul>
      </div>
    </div>
  );
}

export default header;
