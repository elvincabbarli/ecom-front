import React from 'react'

const BlogItem = () => {
    return (
        <li className="blog-item">
            <a href="d/" className="blog-image">
                <img src="/img/blogs/blog1.jpg" alt="" />
            </a>
            <div className="blog-info">
                <div className="blog-info-top">
                    <span>25 Feb, 2021 </span>
                    -
                    <span>0 Comments</span>
                </div>
                <div className="blog-info-center">
                    <a href="d/">Aliquam hendrerit mi metus</a>
                </div>
                <div className="blog-info-bottom">
                    <a href="d/">Read More</a>
                </div>
            </div>
        </li>
    )
}

export default BlogItem