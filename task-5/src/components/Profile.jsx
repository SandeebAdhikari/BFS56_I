import ProfileImg from "../assets/profile-pic.png";
import Button from "./Button";
//import ResumePDF from "../assets/Sandeeb_Resume.pdf";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-pic">
        <img src={ProfileImg} alt="Profile" className="profile-image" />
      </div>
      <div className="profile-info">
        <h2 className="name">Sandeeb Adhikari</h2>
        <p className="text_p2">Web Development</p>
        <Button />
      </div>
    </div>
  );
}

export default Profile;
