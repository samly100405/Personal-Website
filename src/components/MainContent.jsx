import "./MainContent.css";
import ViewMoreButton from "./buttons/ViewMoreButton";
import HeroSection from "./HeroSection";

function MainContent() {
  return (
    <div className="main-content">
      <HeroSection />
      <EducationSection />
    </div>
  );
}

function EducationSection() {
  return (
    <div className="education-section">
      <div className="education-title">
        <h1>Education</h1>
      </div>

      <ul className="education-items">
        <li className="education-item">
          <div className="education-item-left">
            <h2>Cal Poly Pomona - Sophomore</h2>
            <p>Studying towards a B.S. in Computer Science.</p>
          </div>
          <div className="education-item-right">
            <ViewMoreButton />
          </div>
        </li>
        <li className="education-item">
          <div className="education-item-left">
            <h2>Algorithms, Part I - Princeton University</h2>
            <p>
              Online course hosted on Coursera. Focused on intermediate data
              structures and algorithms
            </p>
          </div>
          <div className="education-item-right">
            <ViewMoreButton />
          </div>
        </li>
      </ul>

      <div className="education-title">
        <h1>Clubs and Activities</h1>
      </div>

      <ul className="education-items">
        <li className="education-item">
          <div className="education-item-left">
            <h2>CPP Google Student Developer Club</h2>
            <p>GDSC is a project oriented club intended to bridge the gap between education and industry.</p>
            <h3>Projects I am involved with:</h3>
            
          </div>
          <div className="education-item-right">
            <ViewMoreButton />
          </div>
        </li>
        <li className="education-item">
          <div className="education-item-left">
            <h2>CPP Vietnamese Study Association</h2>
            <p>
              Cultural club focused on mentorship and inclusion. Although
              primarily a Vietnamese organization, everyone is welcome.
            </p>
          </div>
          <div className="education-item-right">
            <ViewMoreButton />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MainContent;
