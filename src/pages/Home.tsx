import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GreetingCard from '../components/GreetingCard';
import MessageForm from '../components/MessageForm';
import Confetti from '../components/Confetti';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const Home: React.FC = () => {
    return (
        <div>
            <AnimatedBackground />
            <Header />
            <Hero />
            <GreetingCard />
            <MessageForm />
            <Confetti />
            <Footer />
        </div>
    );
};

export default Home;