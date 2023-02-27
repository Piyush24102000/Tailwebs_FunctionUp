import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid trial">
                <Link className="navbar-brand" to="/">Home</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/view">View</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/add">Add</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link active " to="/update">Update</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/delete">Delete</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar