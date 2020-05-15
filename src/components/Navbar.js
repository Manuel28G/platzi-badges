import React from 'react';
import logo from '../images/android_logo.svg'
import "./styles/Navbar.css";
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">

                <Link className="Navbar__brand" to="/">
                    <img className="Navbar__brand-logo" src={logo} height="50px" alt="logo" />
                    <span className="font-weight-light">Android</span>
                    <span className="font-weight-bold">Developer</span>
                </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;