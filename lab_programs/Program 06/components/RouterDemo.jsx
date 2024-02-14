import React from 'react';
import { NavLink } from 'react-router-dom';

const RouterDemo = () => {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contacts">Contact Me</NavLink></li>
                <li><NavLink to="/details">Details</NavLink></li>
            </ul>
        </nav>
    );
};

export default RouterDemo;