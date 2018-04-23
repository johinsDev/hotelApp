// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import logo from '../../images/logo-almundo.svg';
import './index.scss';

// COMPONENT

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} />
            </div>
        );
    }
}

export default Header;
