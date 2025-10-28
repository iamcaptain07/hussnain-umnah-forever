import React, { useEffect, useRef } from "react";

/**
 * Simple canvas confetti. Pass active={true} to trigger burst.
 */
export default function Confetti({ active }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const piecesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const createPiece = (x) => {
      return {
        x,
        y: canvas.height * 0.6 + Math.random() * 80,
        size: 6 + Math.random() * 10,
        wobble: Math.random() * 8,
        wobbleSpeed: 0.1 + Math.random() * 0.12,
        tilt: Math.random() * Math.PI,
        speed: 2 + Math.random() * 4,
        color: ["#ff6b9a", "#ffd2e0", "#b28cff", "#b8f0ff", "#ffe59e"][Math.floor(Math.random() * 5)]
      };
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pieces = piecesRef.current;
      for (let i = 0; i < pieces.length; i++) {
        const p = pieces[i];
        p.y -= p.speed;
        p.x += Math.sin(p.wobble) * 1.6;
        p.wobble += p.wobbleSpeed;
        p.tilt += 0.03;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.tilt);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
        // fade out & remove
        if (p.y < -40) {
          pieces.splice(i, 1);
          i--;
        }
      }
      rafRef.current = requestAnimationFrame(update);
    };

    // start loop
    rafRef.current = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // spawn burst
    const count = 90;
    const pieces = piecesRef.current;
    for (let i = 0; i < count; i++) {
      const x = (window.innerWidth / 4) + Math.random() * (window.innerWidth / 2);
      pieces.push({
        x,
        y: canvas.height + 20,
        size: 6 + Math.random() * 12,
        wobble: Math.random() * 8,
        wobbleSpeed: 0.1 + Math.random() * 0.12,
        tilt: Math.random() * Math.PI,
        speed: 2 + Math.random() * 5,
        color: ["#ff6b9a", "#ffd2e0", "#b28cff", "#b8f0ff", "#ffe59e"][Math.floor(Math.random() * 5)]
      });
    }

    // auto stop after a bit (pieces clear themselves)
    const t = setTimeout(() => {
      // nothing special needed; pieces will exit viewport
    }, 3500);

    return () => clearTimeout(t);
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 4
      }}
    />
  );
}