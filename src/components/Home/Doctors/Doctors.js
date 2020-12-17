import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    // console.log(doctors);
    useEffect( () => {
        fetch('https://mysterious-mesa-12822.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center text-brand mb-5">Our Doctors</h5>
                <div className="row">
                {
                     doctors.map(doctor =><Doctor key={doctor._id} doctor={doctor} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default Doctors;