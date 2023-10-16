import "./Header.css"
import VisitBlogButton from "./buttons/VisitBlogButton"

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                Sam Ly
            </div>

            <div className="header-right">
                <HeaderSectionLinks />
                <VisitBlogButton />
            </div>
        </div>
    )
}

function HeaderSectionLinks() {
    return (
        <ul>
            <li><a href="#education-section">Education</a></li>
            <li><a href="#clubs-section">Involvment</a></li>
            <li><a href="#projects-section">Projects</a></li>
            <li><a href="#footer">Contact</a></li>
        </ul>
    )
}

export default Header;