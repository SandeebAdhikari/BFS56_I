import Footer from "../components/footer";
import Header from "../components/header";
import KidImg from "../assets/nepali_kids.png";

function Home() {
  return (
    <div>
      <Header />
      <div className="rounded-lg">
        <img
          src={KidImg}
          alt="Kids with books in had "
          className="p-5 max-h-screen w-full rounded-lg"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
