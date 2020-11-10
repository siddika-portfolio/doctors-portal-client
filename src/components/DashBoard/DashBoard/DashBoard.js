import React from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = { 
    backgroundColor: "#F4FDFB",
    height: "100%",
}

const DashBoard = () => {
    return (
       <section>
            <div style={containerStyle} className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5">
                <h1>Calender</h1>
            </div>
            <div className="col-md-5">
                <AppointmentsByDate></AppointmentsByDate>
            </div>
        </div>
       </section>
    );
};

export default DashBoard;