import React, { useEffect, useRef, useState } from 'react';
import './Reveal.css';

const Reveal = ({ children, delay = 0, threshold = 0.1, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const style = {
    animationDelay: `${delay}ms`,
  };

  const animationClass = isVisible ? `reveal-active` : '';

  return (
    <div ref={ref} className={`reveal-wrapper reveal-${direction} ${animationClass}`} style={style}>
      {children}
    </div>
  );
};

export default Reveal;
