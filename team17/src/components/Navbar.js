import React from 'react';
import './Navbar.css';
import { useState } from 'react';

function Navbar() {
    const [active, setActive] = useState("Alumni Tools");

    const handleSetActive = (page) => {
      setActive(page);
    }

    return(
        <nav className = "navbar">
            <div className="logo">
                <a href= "/"> Logo </a>
            </div>

            <ul className="navLinks">
                <li
                className={active === "Alumni Tools" ? "active" : ""}
                onClick={() => handleSetActive("Alumni Tools")}
                >
                <a href="/tools">Alumni Tools</a>
                </li>
                <li
                className={active === "Resources" ? "active" : ""}
                onClick={() => handleSetActive("Resources")}
                >
                <a href="/resources">Resources</a>
                </li>
                <li
                className={active === "Alumni Directory" ? "active" : ""}
                onClick={() => handleSetActive("Alumni Directory")}
                >
                <a href="/">Alumni Directory</a>
                </li>
                <button className = "SignIn"> Sign In </button>
                <button className = "SignOut"> Sign Out </button>
            </ul>

        </nav>
    );
}
export default Navbar;