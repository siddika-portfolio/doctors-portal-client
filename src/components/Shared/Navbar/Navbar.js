import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mr-5 pr-5">
          <li className="nav-item active">
            <Link className="nav-link mr-5" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="/appointment">Appointment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="/dashboard">Admin</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mr-5 text-white" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;