import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes'; // Changed from AppRoutes import
import './App.css';

// Remove components that aren't created yet or add their implementations
const Header: React.FC = () => <header>Header</header>;
const Footer: React.FC = () => <footer>Footer</footer>;
const AnimatedBackground: React.FC = () => <div className="animated-bg"></div>;
const Confetti: React.FC = () => <div className="confetti"></div>;
const MessageForm: React.FC = () => <div className="message-form"></div>;

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <AnimatedBackground />
        <Header />
        <main>
          <Routes /> {/* Changed from AppRoutes to Routes */}
          <MessageForm />
        </main>
        <Confetti />
        <Footer />
      </div>
    </Router>
  );
};

export default App;




