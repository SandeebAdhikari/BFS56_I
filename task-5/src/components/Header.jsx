import logoImg from "../assets/logo.png";
function Header({ title }) {
  return (
    <div className="header">
      <img src={logoImg} alt="SA logo" className="logo-pic" />
      <h1 className="profile_name">{title}</h1>
    </div>
  );
}

export default Header;
