import "./App.css";
import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import Button from "./components/Button.jsx";

function App() {
  return (
    <>
      <Header title="Sandeeb Adhikari" />
      <Profile name="Sandeeb Adhikari" bio="Software Development" />
      <Button label="Resume" />
    </>
  );
}

export default App;
