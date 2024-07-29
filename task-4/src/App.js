import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigator">
          <div className="logo-container">
            <div className="logo-text">Sandeeb Adhikari</div>
          </div>
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
                <a className="nav-a" href="#blog">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="main">
        <section id="home" className="about-me">
          <h1 className="heading1">Welcome!!</h1>
          <p className="paragraph1">
            Hi, My name is Sandeeb Adhikari. I am web developer and designer.
          </p>
        </section>
        <section id="about" className="experience">
          <h1 className="heading2"> Experience </h1>
          <div className="article-container">
            <article>
              <h3>CSS</h3>
              <p>Experienced</p>
            </article>
            <article>
              <h3>HTML</h3>
              <p>Experienced</p>
            </article>
            <article>
              <h3>Javascript</h3>
              <p>Intermediate</p>
            </article>
            <aside className="sidebar">
              <h3 className="heading3">Python</h3>
              <p className="paragraph2">Intermediate</p>
            </aside>
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
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>
        </nav>
        <p className="paragraph2">
          Copyright &#169; 2023 Sandeeb Adhikari. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
