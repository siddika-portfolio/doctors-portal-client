import React from 'react';
import doctor from '../../../images/doctor-sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
console.log(doctor)
    return (
        <div className="col-md-4 text-center" >
            <img style={{height: '200px'}} className="img-fluid" src={`data:image/png;base64,${doctor.image.img}`}alt=""/>
            <h5 className="mt-3">{doctor.name}</h5>
            <p> <FontAwesomeIcon className="text-brand" icon={faPhoneAlt}/> +880-188-934789</p>            
        </div>
    );
};

export default Doctor;