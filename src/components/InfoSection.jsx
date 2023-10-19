/* eslint-disable react/prop-types */
import "./InfoSection.css";
import CppLogo from "../resources/pictures/cpp-logo.png";
import AlgsLogo from "../resources/pictures/algs4partI-logo.png";
import ScrimbaLogo from "../resources/pictures/scrimba-logo.png";
import OdinProjectLogo from "../resources/pictures/odin-project-logo.png";
import GDSCLogo from "../resources/pictures/gdsc-logo.png"
import SEALogo from "../resources/pictures/sea-logo.png"
import VSALogo from "../resources/pictures/vsa-logo.webp"
import IcebreakLogo from "../resources/pictures/icebreak-logo.png"
import GithubLogo from "../resources/pictures/github-logo.png"

function InfoSection() {
  return (
    <div className="info-section">
      <div className="info-title" id="education-section">
        <h1>Education</h1>
      </div>
      <div className="info-item-container" >
        <InfoItem
          title="Cal Poly Pomona - B.S. Computer Science 2026"
          url="https://www.cpp.edu/index.shtml"
          image={CppLogo}
        />
        <InfoItem
          title="Princeton University (Coursera) - Alorgithms, Parth I"
          url="https://www.coursera.org/learn/algorithms-part1"
          image={AlgsLogo}
        />
        <InfoItem
          title="Scrimba - Learn React"
          url="https://scrimba.com/learn/learnreact"
          image={ScrimbaLogo}
        />
        <InfoItem
          title="The Odin Project - Foundations"
          url="https://www.theodinproject.com/about"
          image={OdinProjectLogo}
        />
      </div>
      <div className="info-title" id="clubs-section">
        <h1>Clubs and Activities</h1>
      </div>
      <div className="info-item-container">
        <InfoItem
          title="Google Student Developer Club"
          url="https://gdsc.community.dev/california-state-polytechnic-university/"
          image={GDSCLogo}
        />  
        <InfoItem
          title="Software Engineering Association"
          url="https://www.cppsea.com/"
          image={SEALogo}
        /> 
        <InfoItem
          title="Vietnamese Student Association"
          url="https://www.instagram.com/cpp.vsa/"
          image={VSALogo}
        /> 
      </div>
      <div className="info-title" id="projects-section">
        <h1>Projects</h1>
      </div>
      <div className="info-item-container">
        <InfoItem
          title="SEA Icebreak (Group, Ongoing)"
          desc="Student organization management app"
          url="https://github.com/cppsea/icebreak"
          image={IcebreakLogo}
        />  
        <InfoItem
          title="GDSC AI Calc Tutor (Group, Ongoing)"
          desc="Calculus Tutoring solution"
          url="https://github.com/GdscCpp/AI-Calc-Tutor"
          image={GDSCLogo}
        /> 
        <InfoItem
          title="Computer Science Blog"
          url="https://blog.samly.me/"
          desc="Blog where I discuss computer science topics that interest me."
          image={GithubLogo}
        /> 
      </div>  
    </div>
  );
}

function InfoItem({ title, desc, image, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="info-item">
        <img src={image} alt="image" />
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </a>
  );
}
export default InfoSection;
