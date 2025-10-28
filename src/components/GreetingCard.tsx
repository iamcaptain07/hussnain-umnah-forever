import React from 'react';
import './GreetingCard.css';

const GreetingCard: React.FC = () => {
    const messages = [
        "Happy Birthday Dr. Umnah! 🎉",
        "Wishing you a day filled with love and joy! 💖",
        "May all your dreams come true this year! 🌟",
        "Here's to another year of amazing adventures! 🎂"
    ];

    return (
        <div className="greeting-card">
            <h2 className="greeting-title">Birthday Wishes</h2>
            <div className="message-container">
                {messages.map((message, index) => (
                    <p key={index} className="greeting-message">
                        {message}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default GreetingCard;