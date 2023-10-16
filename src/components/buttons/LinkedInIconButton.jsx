import linkedinIcon from "../../resources/icons/linkedin-icon.svg"
import "./IconButtons.css"

function LinkedinIconButton() {
    return (
        <a
          className="icon-button"
          href="https://www.linkedin.com/in/samly-me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="gh" />
        </a>
    )
}

export default LinkedinIconButton;