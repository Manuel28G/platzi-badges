import React, { Children } from 'react'
import Navbar from './Navbar.js'

function Layout(props){
    const children = props.children;
    return (
        <React.Fragment>
            <Navbar/>
            {children}
        </React.Fragment>
    );
}

export default Layout;