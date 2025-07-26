import React, { useState, useEffect, useRef } from "react";

interface TypewriterEffectProps {
  texts: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  typingSpeed = 100,
  pauseDuration = 2000,
  className = "",
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (texts.length === 0) return;

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!isDeleting && currentText === texts[currentTextIndex]) {
      // Finished typing current text, pause then start deleting
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && currentText === "") {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    } else if (isDeleting) {
      // Currently deleting
      timeoutRef.current = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, typingSpeed / 2);
    } else {
      // Currently typing
      timeoutRef.current = setTimeout(() => {
        setCurrentText(
          texts[currentTextIndex].slice(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    texts,
    typingSpeed,
    pauseDuration,
  ]);

  return (
    <span className={className}>
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypewriterEffect;
