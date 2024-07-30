import Footer from "../components/footer";
import Header from "../components/header";
import Ronaldo from "../assets/ronaldo.png";
import Messi from "../assets/messi.png";

function home() {
  return (
    <div>
      <Header />
      <div>
        <div className="min-h-[calc(100vh-160px)] flex justify-center items-center ">
          <div className="">
            <img
              src={Ronaldo}
              alt="picture of ronaldo "
              className=" inline w-[600px] h-[600px] rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg "
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/sandeeb-adhikari-2129a0236/")
              }
            />
            <img
              src={Messi}
              alt="picture of ronaldo"
              className="inline ml-20 w-[600px] h-[600px] rounded-full duration-300 ease-in-out hover:scale-110 "
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/sandeeb-adhikari-2129a0236/")
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default home;
