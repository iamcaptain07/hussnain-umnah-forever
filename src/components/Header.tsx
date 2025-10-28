import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ textAlign: 'center', padding: '20px', background: 'linear-gradient(to right, #ff7e5f, #feb47b)', color: '#fff' }}>
            <h1>Happy Birthday Dr. Umnah 💖</h1>
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li style={{ display: 'inline', margin: '0 15px' }}><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
                    <li style={{ display: 'inline', margin: '0 15px' }}><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
                    <li style={{ display: 'inline', margin: '0 15px' }}><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;