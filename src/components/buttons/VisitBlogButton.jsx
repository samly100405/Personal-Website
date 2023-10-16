/* eslint-disable react/prop-types */
import './Buttons.css'

function VisitBlogButton() {
    return (
        <a href={"/blog"} >
            <button className='important-button visit-blog' >
                Vist Blog
            </button>
        </a>
    )
}

export default VisitBlogButton;