import './navbar.css';
import React, { useState, useEffect } from 'react';

function NavBar() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header id="header" class={scrollPosition > 260 ? 'visible' : ''}>
                <div class="container d-flex align-items-center justify-content-center">

                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><a class="nav-link scrollto" href="#hero">Home</a></li>
                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </>
    )
}
export default NavBar;