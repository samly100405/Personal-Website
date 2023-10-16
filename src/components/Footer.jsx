import "./Footer.css";
import GithubIconButton from "./buttons/GithubIconButton";
import LinkedinIconButton from "./buttons/LinkedInIconButton";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-left">
        <h1>Contact</h1>
      </div>

      <GithubIconButton />
      <LinkedinIconButton />

      <div className="footer-right">
        <p>contact@samly.me</p>
      </div>
    </div>
  );
}

export default Footer;
