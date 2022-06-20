import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({ user }) {
    const logout = () => {
        window.open("http://localhost:8000/auth/logout", "_self");
    };

    return (
        <div className='navbar'>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <span className='logo'>JEDolce</span>
            </Link>
            {user ? (
                <ul className='list'>
                    <li className='listItem'>
                        <img
                            src={user.photos[0].value}
                            alt=""
                            className='profile'
                        />
                    </li>
                    <li className='listItem'>{user.displayName}</li>
                    <li className='listItem' onClick={logout}>Logout</li>
                </ul>
            ) : (<Link className='link' to="/login">Login</Link>)}
        </div>
    )
}
