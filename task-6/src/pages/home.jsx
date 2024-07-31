import Footer from "../components/footer";
import Header from "../components/header";
import Ronaldo from "../assets/ronaldo.png";
import Messi from "../assets/messi.png";

function home() {
  return (
    <div>
      <Header />
      <div>
        <div className="m-5 min-h-[calc(100vh-160px)] flex justify-center items-center p-5 bg-lime-400 rounded-lg">
          <div className="">
            <img
              src={Ronaldo}
              alt="picture of ronaldo "
              className=" inline w-[600px] h-[600px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 border border-black"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/sandeeb-adhikari-2129a0236/")
              }
            />
            <div className="pt-6 mr-14 text-center text-6xl">
              <button className="bg-yellow-300 rounded-3xl p-2 border border-black hover:animate-bounce">
                Ronaldo
              </button>
            </div>
          </div>
          <div>
            <img
              src={Messi}
              alt="picture of ronaldo"
              className="inline ml-20 w-[600px] h-[600px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 border border-black"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/sandeeb-adhikari-2129a0236/")
              }
            />
            <div className="ml-2 pt-6 pl-14 text-center text-6xl ">
              <button className="bg-yellow-300 rounded-3xl p-2 border border-black hover:animate-bounce ">
                {" "}
                Messi
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default home;
