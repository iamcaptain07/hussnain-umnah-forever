const confetti = require('canvas-confetti');

export const triggerConfetti = (duration = 3000, particleCount = 100) => {
    const end = Date.now() + duration;

    const interval = setInterval(() => {
        const timeLeft = end - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        confetti({
            particleCount,
            startVelocity: 30,
            spread: 360,
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2,
            },
        });
    }, 250);
};