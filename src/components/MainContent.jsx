import "./MainContent.css";
import InfoSection from "./InfoSection";
import HeroSection from "./HeroSection";

function MainContent() {
  return (
    <div className="main-content">
      <HeroSection />
      <InfoSection />
    </div>
  );
}

export default MainContent;
