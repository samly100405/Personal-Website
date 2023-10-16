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
            <li><a href="">Education</a></li>
            <li><a href="">Involvment</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Interest</a></li>
        </ul>
    )
}



export default Header;