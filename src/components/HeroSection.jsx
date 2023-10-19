import GithubIconButton from "./buttons/GithubIconButton";
import LinkedinIconButton from "./buttons/LinkedInIconButton";
import VisitBlogButton from "./buttons/VisitBlogButton";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>Welcome to my website!</h1>
        <p>I am currently studying computer science at Cal Poly Pomona. While you are here, make sure to check out my blog!</p>
        <SocialsButtons />
      </div>
      <div className="hero-right">
      </div>
    </div>
  );
}
function SocialsButtons() {
  return (
    <div className="socials-buttons">
      <GithubIconButton />
      <LinkedinIconButton />
      <VisitBlogButton />
    </div>
  );
}

export default HeroSection;
