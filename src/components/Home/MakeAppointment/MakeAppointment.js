import React from 'react';
import doctor from '../../../images/doctor.png'
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className='make-appointment mt-4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <div>
                            <img src={doctor} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-7 py-5 text-white">
                        <h5 className="text-brand text-uppercase">appointment</h5>
                        <h1>Make An Appointment <br /> today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, debitis!</p>
                        <button className="btn btn-brand">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;