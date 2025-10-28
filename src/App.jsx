import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Confetti from "./components/Confetti";

// Messages to type
const MESSAGES = [
  "✨ Hey Doctor 👩‍⚕️💻",
  "💝 Your favorite developer made something special for you",
  "🎉 Happy Birthday to my amazing fiancé — Dr. Umnah!",
  "💖 You heal hearts professionally, but you own mine forever"
];

export default function App() {
  const [revealed, setRevealed] = useState(false);
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [finished, setFinished] = useState(false);
  const [hearts, setHearts] = useState([]);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // Typing effect
  useEffect(() => {
    if (!revealed || finished) return;

    let mounted = true;
    const fullText = MESSAGES[currentMsgIndex];
    const tick = () => {
      if (!mounted) return;
      if (!isDeleting) {
        setDisplayText(fullText.slice(0, displayText.length + 1));
        if (displayText.length + 1 === fullText.length) {
          // Pause then delete or move to next
          if (currentMsgIndex === MESSAGES.length - 1) {
            setFinished(true);
            return; // Stop typing when finished
          }
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        setDisplayText(fullText.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentMsgIndex((i) => (i + 1) % MESSAGES.length);
        }
      }
    };

    const timer = setTimeout(tick, typingSpeed);
    return () => {
      mounted = false;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isDeleting, revealed, currentMsgIndex, typingSpeed, finished]);

  // When finished (final message completed) trigger hearts/confetti
  useEffect(() => {
    if (finished) {
      spawnHearts(30);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  // spawn floating hearts
  const spawnHearts = (count = 20) => {
    const newHearts = Array.from({ length: count }).map(() => ({
      id: Math.random().toString(36).slice(2, 9),
      left: Math.random() * 90 + 5, // percentage
      size: Math.random() * 18 + 14, // px
      delay: Math.random() * 1 // s
    }));
    setHearts((h) => [...h, ...newHearts]);
    // cleanup hearts after animation
    setTimeout(() => setHearts((h) => h.slice(count)), 7000);
  };

  const handleReveal = () => {
    setRevealed(true);
    setTimeout(() => {
      setDisplayText("");
      setCurrentMsgIndex(0);
      setIsDeleting(false);
      setFinished(false);
    }, 50);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch((err) => {
          console.error("Audio playback failed:", err);
          alert("Please interact with the page first to enable audio playback.");
        });
    }
  };

  return (
    <div className="app-root">
      <div className="overlay-code">
        <span className="code-line">const love = {'{ name: "Umnah", role: "Doctor" }'}</span>
        <span className="code-line">/* compiled with ❤️ by Hussnain */</span>
      </div>

      <header className="title">
        <h1 className="glow">Happy Birthday Dr. Umnah 💖</h1>
        <p className="subtitle">✨ A little techy love for my favorite healer ✨</p>
      </header>

      <main className="card">
        {!revealed ? (
          <button className="reveal-btn" onClick={handleReveal}>
            ✨ Click to Reveal Surprise ✨
          </button>
        ) : (
          <div className="message-area">
            <div className="typing-wrap">
              <span className="typing-text">{displayText}</span>
              <span className="cursor" />
            </div>

            {finished && (
              <>
                <div className="final-message">
                  <h2>🎉 Happy Birthday, Dr. Umnah! 💖</h2>
                  <p className="soft">✨ You're my inspiration — health, wisdom & love ✨</p>
                </div>
                <div className="surprise-controls">
                  <button className="surprise-btn" onClick={() => spawnHearts(20)}>
                    💕 Shower Hearts
                  </button>
                  <button className="music-btn" onClick={toggleMusic}>
                    {playing ? "⏸️ Pause Music" : "🎵 Play Music"}
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </main>

      {/* confetti (canvas) */}
      <Confetti active={finished} />

      {/* floating hearts */}
      <div className="hearts-container" aria-hidden>
        {hearts.map((h) => (
          <span
            className="heart"
            key={h.id}
            style={{
              left: `${h.left}%`,
              width: `${h.size}px`,
              height: `${h.size}px`,
              animationDelay: `${h.delay}s`
            }}
          />
        ))}
      </div>

      <footer className="signature">
        💝 From Hussnain 💻
      </footer>

      {/* Background music */}
      <audio ref={audioRef} src="/src/assets/audio.mp3" loop preload="auto" />
    </div>
  );
}