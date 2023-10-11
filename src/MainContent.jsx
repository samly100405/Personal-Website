import "./MainContent.css"
import VisitBlogButton from "./components/VisitBlogButton"
import githubIcon from "./resources/icons/github-icon.svg"
import linkedinIcon from "./resources/icons/linkedin-icon.svg"



function MainContent() {
    return (
        <div className="main-content">
            <Hero />
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

export default MainContent;