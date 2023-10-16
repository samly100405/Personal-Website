/* eslint-disable react/prop-types */
import './Buttons.css'

function ViewMoreButton({ url }) {
    return (
        <a href={url}>
            <button className='important-button view-more'>
                Learn More
            </button>
        </a>)
}

export default ViewMoreButton;