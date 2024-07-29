import Profile from "./Profile";
function Header({ title }) {
  return (
    <div className="header">
      <h1 className="profile_name">{title}</h1>
      <a href="https://www.sandeebadhikari.com/" className="website">
        website
      </a>
    </div>
  );
}

export default Header;
