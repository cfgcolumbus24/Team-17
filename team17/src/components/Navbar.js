import React from 'react';
//import './Navbar.css';

function Navbar() {
    return(
        <nav className = "navbar">
            <div className="logo">
                <a href= "/"> Logo </a>
            </div>

            <ul className='navLinks'>
                <li>
                    <a href = "/alumnitools">Alumni Tools</a>
                </li>
                <li>
                    <a href = "/resources">Resources</a>
                </li>
                <li>
                    <a href = "/alumnidirectory">Alumni Directory</a>
                </li>

                <button className = "signIn"> Sign In</button>
                <button className = "signOut"> Sign Out</button>
            </ul>
        </nav>
    );
}
export default Navbar;