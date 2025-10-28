import React, { useState } from 'react';

const MessageForm: React.FC = () => {
    const [message, setMessage] = useState('');
    const [isMusicOn, setIsMusicOn] = useState(false);

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const toggleMusic = () => {
        setIsMusicOn(!isMusicOn);
        // Logic to play or pause background music can be added here
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Logic to handle the submitted message can be added here
        alert(`Your message: ${message}`);
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit} className="message-form">
            <textarea
                value={message}
                onChange={handleMessageChange}
                placeholder="Type your birthday wish here..."
                rows={4}
                className="message-input"
            />
            <div className="music-toggle">
                <label>
                    <input
                        type="checkbox"
                        checked={isMusicOn}
                        onChange={toggleMusic}
                    />
                    Play Background Music
                </label>
            </div>
            <button type="submit" className="submit-button">Send Wish</button>
        </form>
    );
};

export default MessageForm;