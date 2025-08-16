
import React from 'react';
import styled from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navvbar = (props) => {
    return (
        <div className={styled.headerWrapper}>
            <div className="container">
                <div className={styled.header}>
                    <h3>{props.title}</h3>
                    <ul>
                        <li>
                            <Link to="/">Article List</Link>
                        </li>
                        <li>
                            <Link to="/About">About Us</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navvbar;
