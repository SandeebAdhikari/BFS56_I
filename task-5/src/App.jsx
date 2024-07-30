import "./App.css";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header title="Sandeeb Adhikari" />
      <Profile name="Sandeeb Adhikari" bio="Software Development" />
      <Footer />
    </>
  );
}

export default App;
