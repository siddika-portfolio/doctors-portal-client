import React from 'react';

const Testimonial = (props) => {
    const { quote, img, name, from } = props.testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex align-items-center">
                <img className="mx-3" src={img} alt="" width="60px"/>
                <div className="">
                    <h6 className="text-brand">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;