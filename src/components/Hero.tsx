import React from 'react';
import './Hero.css'; // Assuming you will create a CSS file for styling

const Hero: React.FC = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">Happy Birthday Dr. Umnah 💖</h1>
                <p className="hero-subtitle">Wishing you a day filled with love, joy, and endless possibilities!</p>
            </div>
            <div className="hero-background"></div>
        </div>
    );
};

export default Hero;