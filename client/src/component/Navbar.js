import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/navbar.css'


function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Activity Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Activities</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add Activity</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        <ul className="navbar-nav ">
        <li className="navbar-item">
        <Link className="nav-link" to='/about'>About</Link>
        </li>
        </ul>
        </div>
      </nav>
      
    )
}

export default Navbar
