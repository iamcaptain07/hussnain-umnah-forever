import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground: React.FC = () => {
    return (
        <div className="animated-background">
            <div className="gradient-overlay"></div>
        </div>
    );
};

export default AnimatedBackground;