/* eslint-disable react/prop-types */
import './MediumButtons.css'

function VisitBlogButton() {
    return (
        <a href="/blog" target="_blank" >
            <button className='medium-button visit-blog' >
                Vist Blog
            </button>
        </a>
    )
}

export default VisitBlogButton;