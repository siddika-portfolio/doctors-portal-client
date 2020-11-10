import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'BrookIyn, Ny 10003 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+156978454124',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
      <section className="d-flex justify-content-center mt-5">
         <div className="row w-75">
         {
              infosData.map(info => <InfoCard info={info}></InfoCard>)
          }
         </div>
      </section>
    );
};

export default BusinessInfo;