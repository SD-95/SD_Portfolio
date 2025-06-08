import { useEffect } from "react";

const BubbleBackground: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("bubble-container");
    if (!container) return;

    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement("div");
      const size = Math.random() * 60 + 20;

      // Generate a random RGBA color (rainbow-ish)
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const alpha = (Math.random() * 0.5 + 0.3).toFixed(2); // opacity between 0.3 – 0.8
      bubble.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;

      bubble.className = "bubble";
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${10 + Math.random() * 10}s`;
      bubble.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(bubble);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div className="bubble-background" id="bubble-container"></div>;
};

export default BubbleBackground;
