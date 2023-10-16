import "./MainContent.css";
import EducationSection from "./EducationSection";
import HeroSection from "./HeroSection";

function MainContent() {
  return (
    <div className="main-content">
      <HeroSection />
      <EducationSection />
    </div>
  );
}

export default MainContent;
