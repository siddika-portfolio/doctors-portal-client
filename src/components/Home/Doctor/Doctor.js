import React from 'react';
import doctor from '../../../images/doctor-sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
    return (
        <div className="col-md-4 text-center" >
            <img className="img-fluid" src={doctor} alt=""/>
            <h5 className="mt-3">Dr.Coudi</h5>
            <p> <FontAwesomeIcon className="text-brand" icon={faPhoneAlt}/> +880-188-934789</p>            
        </div>
    );
};

export default Doctor;