/* eslint-disable react/prop-types */
import './MediumButtons.css'

function ViewMoreButton({ url }) {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <button className='medium-button view-more'>
                Learn More
            </button>
        </a>)
}

export default ViewMoreButton;