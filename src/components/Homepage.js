import React from 'react';
import { Box, Heading, Text, Image, Button } from 'daisyui';

function Homepage() {
    return (
        <Box className="h-screen bg-neutral-content text-neutral-content">
            <nav className="navbar bg-neutral-content text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost   
 btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>

                                <span className="badge badge-sm indicator-item">0</span>
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3">
                            <li><a href="#">Item 1</a></li>
                            <li><a href="#">Item 2</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl">Chumbi Valley</a>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary">BUY CHMB</a>
                </div>
            </nav>

            <div className="hero min-h-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Chumbi
                            Valley</h1>
                        <p className="py-6">Your description of Chumbi Valley goes here.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="btn btn-primary">Game Info</a>
                            <a href="#" className="btn btn-primary">Token</a>
                            <a href="#" className="btn btn-primary">About</a>
                            <a href="#" className="btn btn-primary">Lore</a>
                        </div>
                    </div>
                    <div className="hero-content-center">
                        <Image src="/gtps-hero-logo.png" alt="Chumbi Valley Hero Image" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>

            <footer className="footer footer-center p-4 bg-neutral-content text-neutral-content">
                <div className="flex space-x-4">
                    <a href="#" className="btn btn-primary">Game Info</a>
                    <a href="#" className="btn btn-primary">Token</a>
                    <a href="#" className="btn btn-primary">About</a>
                    <a href="#" className="btn btn-primary">Lore</a>
                </div>
                <div className="flex space-x-4 mt-4">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-discord"></i></a>
                    <a href="#"><i className="fab fa-telegram"></i></a>
                </div>
                <div className="text-center mt-4">
                    <p>Copyright © 2023 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </Box>
    );
}

export default Homepage;