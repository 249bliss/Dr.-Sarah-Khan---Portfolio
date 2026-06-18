import React, { useState, useRef, useCallback } from 'react';
import './Testimonials.css';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import CountUp from './ui/CountUp';
import davidImage from '../assets/images/david.jpg';
import emilyImage from '../assets/images/emily.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "David Chen",
      role: "Patient",
      image: davidImage,
      rating: 5,
      quote: "Dr. Khan is the first doctor who truly listened to me. She took the time to understand my full medical history and helped me build a plan that actually works for my lifestyle."
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      role: "Patient",
      image: emilyImage,
      rating: 5,
      quote: "I've never felt so supported by a medical professional. The comprehensive evaluation was eye-opening, and the ongoing care has been phenomenal."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);
  const cardRef = useRef(null);

  const slideTo = useCallback((newIndex, dir) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const card = cardRef.current;
    if (!card) return;

    // 1. Exit animation
    const exitAnim = dir === 'next' ? 'slideOutLeft' : 'slideOutRight';
    card.style.animation = `${exitAnim} 0.3s ease forwards`;

    const onExitDone = () => {
      card.removeEventListener('animationend', onExitDone);

      // 2. Swap content (same DOM node — no remount, no layout shift)
      setCurrentIndex(newIndex);

      // 3. Enter animation on next frame
      requestAnimationFrame(() => {
        const enterAnim = dir === 'next' ? 'slideInRight' : 'slideInLeft';
        card.style.animation = `${enterAnim} 0.35s ease forwards`;

        const onEnterDone = () => {
          card.removeEventListener('animationend', onEnterDone);
          card.style.animation = '';
          isAnimating.current = false;
        };
        card.addEventListener('animationend', onEnterDone);
      });
    };

    card.addEventListener('animationend', onExitDone);
  }, []);

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - 1) {
      slideTo(currentIndex + 1, 'next');
    }
  };

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      slideTo(currentIndex - 1, 'prev');
    }
  };

  const current = testimonials[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < testimonials.length - 1;

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>What patients often say after their first visit.</h2>
          <div className="testimonials-stats">
            <div className="t-stat">
              <span className="t-stat-num"><CountUp end={4.9} decimals={1} /><span className="t-stat-star">★</span></span>
              <span className="t-stat-label">Patient Rating</span>
            </div>
            <div className="t-stat">
              <span className="t-stat-num"><CountUp end={4800} />+</span>
              <span className="t-stat-label">Visits Across Long-term Care</span>
            </div>
          </div>
        </div>

        <div className="testimonial-carousel">
          <div className="testimonial-card" ref={cardRef}>
            <div className="testimonial-image-col">
              <img src={current.image} alt={current.name} className="testimonial-avatar" />
            </div>
            <div className="testimonial-content-col">
              <Quote className="quote-icon" size={48} />
              <div className="stars">
                <span className="star-rating-num">{current.rating}.0</span>
                <span className="star">★</span>
              </div>
              <p className="quote-text">"{current.quote}"</p>
              <div className="author">
                <span className="author-name">{current.name}</span>
                <span className="author-role">{current.role}</span>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <button
              onClick={prevTestimonial}
              className={`carousel-btn ${hasPrev ? 'active' : 'btn-inactive'}`}
              aria-label="Previous"
              disabled={!hasPrev}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className={`carousel-btn ${hasNext ? 'active' : 'btn-inactive'}`}
              aria-label="Next"
              disabled={!hasNext}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
