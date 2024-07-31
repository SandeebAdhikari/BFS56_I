import LinkedInImg from "../assets/linkedin.png";
import GitHubImg from "../assets/github.png";

//<Button resume="Resume" linkedin="LinkedIn" github="GitHub" />
function Button() {
  return (
    <div className="gap-2">
      <img
        src={LinkedInImg}
        alt="Linkedin Profile"
        className="icon"
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/sandeeb-adhikari-2129a0236/")
        }
      />
      <img
        src={GitHubImg}
        alt="GitHub Profile"
        className="icon"
        onClick={() =>
          (window.location.href = "https://github.com/SandeebAdhikari")
        }
      />
    </div>
  );
}

export default Button;
