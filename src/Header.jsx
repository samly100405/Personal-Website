import icon from "./resources/Icon.png"
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src={icon} alt="icon" height="50px"/>
            </div>

            <div className="header-right">
                <ul>
                    <li>Education</li>
                    <li>Involvment</li>
                    <li>Projects</li>
                    <li>Interest</li>
                </ul>


            </div>
        </header>
    )
}

function HeaderSectionLinks() {
    return (
        <ul>
            
        </ul>
    )
}

export default Header;