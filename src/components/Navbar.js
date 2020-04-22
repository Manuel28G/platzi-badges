import React from 'react';
import logo from '../images/android_logo.svg'
import "./styles/Navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">

                <a className="Navbar__brand" href="/">
                    <img className="Navbar__brand-logo" src={logo} height="50px" alt="logo" />
                    <span className="font-weight-light">Android</span>
                    <span className="font-weight-bold">Developer</span>
                </a>
                </div>
            </div>
        );
    }
}

export default Navbar;