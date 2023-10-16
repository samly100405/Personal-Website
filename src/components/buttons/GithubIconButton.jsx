import githubIcon from "../../resources/icons/github-icon.svg"
import "./IconButtons.css"

function GithubIconButton() {
    return (
        <a
          className="icon-button"
          href="https://github.com/samly100405"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="gh" />
        </a>
    )
}

export default GithubIconButton;