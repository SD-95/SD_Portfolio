import { useEffect } from "react";

const BubbleBackground: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById("bubble-container");
    if (!container) return;

    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement("div");
      const size = Math.random() * 60 + 20;

      bubble.className = "bubble";
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${10 + Math.random() * 10}s`;
      bubble.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(bubble);
    }

    // Optional: Cleanup if you want to remove the bubbles on unmount
    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div className="bubble-background" id="bubble-container"></div>;
};

export default BubbleBackground;
