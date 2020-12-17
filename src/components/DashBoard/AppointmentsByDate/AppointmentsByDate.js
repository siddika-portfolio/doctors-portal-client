import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments}) => {
    return (
        <div>
            <h1>appointment{appointments.length}</h1>
            {
                appointments.length ? 
                <AppointmentShortList appointments={appointments}></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointment for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;