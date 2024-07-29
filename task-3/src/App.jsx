import React from "react";
import ImgRest from "./assets/restaurantImg.png";
function App() {
  return (
    <div>
      <header>
        <div className="menu">
          <nav className="nav">
            <h2 className="logo-text">Chimeki Restaurant</h2>
            <div>
              <ul className="nav_links">
                <li>
                  <a className="nav-a" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-a" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-a" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main className="main-section">
        <section className="restaurant_image">
          <img
            src={ImgRest}
            alt="Image of restaurant with chairs"
            className="restaurant-image"
          />
          <div className="text-over-image">
            <h1>Chimeki Restaurant and Bar</h1>
            <p>Reservation Here!!</p>
            <button className="btn">RESERVATION</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <nav className="foot-navigator">
          <div className="nav-links-container">
            <ul className="nav_links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About </a>
              </li>
              <li>
                <a href="#blog">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <p className="paragraph2">
          Copyright &#169; 2024 Chimeki Restaurant and Bar. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
