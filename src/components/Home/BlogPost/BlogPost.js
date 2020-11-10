import React from 'react';

const BlogPost = (props) => {
    const { authorImg, author, date, title, description } = props.blog;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex align-items-center">
                <img className="mx-3" src={authorImg} alt="" />
                <div>
                    <h6 className="text-brand">{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-secondary">{description}</p>
            </div>
        </div>
    );
};

export default BlogPost;