import { useEffect, useState } from "react";

const HeartCursor = () => {
  const [isCursor, setIsCursor] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = () => {
      setIsCursor(window.matchMedia("(pointer: fine)").matches);
    };

    updateCursor();
    window.addEventListener("resize", updateCursor);
    return () => window.removeEventListener("resize", updateCursor);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!isCursor) return null;

  return (
    <div
      className="heart-cursor"
      style={{
        transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="#8B0000"
        className="w-6 h-6"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </div>
  );
};

export default HeartCursor;