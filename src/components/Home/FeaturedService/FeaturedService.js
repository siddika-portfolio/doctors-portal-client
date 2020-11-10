import React from 'react';
import featured from '../../../images/featured.png';


const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <div>
                            <img className="img-fluid" src={featured} alt="" />
                        </div>

                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental <br /> Care, on your Terms  </h1>
                        <p className="text-secondary my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore vero tempora quas voluptatibus porro fugit.</p>
                        <button className="btn btn-brand">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;