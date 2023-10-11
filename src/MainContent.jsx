import "./MainContent.css"
import VisitBlogButton from "./components/VisitBlogButton"
import githubIcon from "./resources/icons/github-icon.svg"
import linkedinIcon from "./resources/icons/linkedin-icon.svg"



function MainContent() {
    return (
        <div className="main-content">
            <Hero />
            <EducationSection />
        </div>
    )
}

function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>Welcome to my website!</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cupiditate culpa alias, tempore porro eos id vero rerum ex et repellat molestiae velit perspiciatis voluptate, inventore magni error sit explicabo?</p>
                <SocialsButtons />
            </div>
            <div className="hero-right">
                <div className="image-slide"></div>
            </div>
        </div>
    )
}

function SocialsButtons() {
    return (
        <div className="socials-buttons">
            <a className="socials-button" href="google.com" target="_blank" rel="noopener noreferrer" >
                <img src={githubIcon} alt="gh"/>
            </a>
            <a className="socials-button" href="google.com" target="_blank" rel="noopener noreferrer" >
                <img src={linkedinIcon} alt="gh"/>
            </a>

            <VisitBlogButton />
        </div>
    )
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
                        <h2>Cal Poly Pomona - 2027</h2>
                        <p>Studying towards a B.S. in Computer Science.</p>
                    </div>
                    <div className="education-item-right">
                        
                    </div>
                </li>
                <li className="education-item">
                    <div className="education-item-left">
                        <h2>Algorithms, Part I - Princeton University</h2>
                        <p>Online course hosted on Coursera. Focused on intermediate data structures and algorithms</p>
                    </div>
                    <div className="education-item-right">
                        
                    </div>
                </li>
            </ul>
            
        </div>
    )
}

export default MainContent;