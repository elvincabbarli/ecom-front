import React from 'react'
import './Reviews.css'
import RivewItem from './RivewItem'
import ReviewForm from './ReviewForm'

const Reviews = ({activeTab}) => {
    return (
        <div className={`tab-panel-reviews ${activeTab}`}>
            <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
            <div className="comments">
                <ol className="comment-list">
                   <RivewItem />
                </ol>
            </div>
            {/* <!-- comment form start --> */}
            <div className="review-form-wrapper">
                <h2>Add a review</h2>
                <ReviewForm />
            </div>
            {/* <!-- comment form end --> */}
        </div>
    )
}

export default Reviews