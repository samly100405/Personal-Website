import VisitBlogButton from "./buttons/VisitBlogButton";
import GithubIconButton from "./buttons/GithubIconButton";
import LinkedinIconButton from "./buttons/LinkedInIconButton";
import "./HeroSection.css"

function HeroSection() {
    return (
      <div className="hero">
        <div className="hero-left">
          <h1>Welcome to my website!</h1>
          <p>Currently studying computer science at Cal Poly Pomona.</p>
          <SocialsButtons />
        </div>
        <div className="hero-right">
          <div className="image-slide"></div>
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