import { FaHome } from "react-icons/fa";

function Header() {
  return (
    <header className="flex items-center  p-4">
      <div className="flex flex-col items-center">
        <FaHome size={50} className="m-5" />
      </div>
      <div className="flex justify-between w-full">
        <div className=" items-center  ">
          <h1 className="pt-2 text-3xl font-bold">SanoSansar</h1>
        </div>
        <div className="flex space-x-2 ">
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Home
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>

          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Donation
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </header>
  );
}

export default Header;
