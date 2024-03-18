import React, { useEffect, useRef, useState } from "react";

export default function FadeInSection({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If target element is visible
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once element is visible
          observer.unobserve(domRef.current);
        }
      });
    });

    observer.observe(domRef.current);

    // Clean up: disconnect observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
