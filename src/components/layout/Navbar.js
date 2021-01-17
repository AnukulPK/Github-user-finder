import React from 'react';
import {string} from 'prop-types'


function Navbar(props) {
    return (
        <nav className="navbar bg-primary">
            <h1><i className={props.icon}/>{props.title}</h1>
        </nav>
    )
}

Navbar.prototypes={
    title:string,
    icon:string
}

export default Navbar
