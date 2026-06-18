import React, { useState } from 'react';
import './Testimonials.css';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import CountUp from './ui/CountUp';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "David Chen",
      role: "Patient",
      image: "https://placehold.co/100x100/EFF6FF/3B82F6?text=DC",
      rating: 5,
      quote: "Dr. Khan is the first doctor who truly listened to me. She took the time to understand my full medical history and helped me build a plan that actually works for my lifestyle."
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      role: "Patient",
      image: "https://placehold.co/100x100/EFF6FF/3B82F6?text=ER",
      rating: 5,
      quote: "I've never felt so supported by a medical professional. The comprehensive evaluation was eye-opening, and the ongoing care has been phenomenal."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>What patients often say after their first visit.</h2>
          <div className="testimonials-stats">
            <div className="t-stat">
              <span className="t-stat-num"><CountUp end={4.9} decimals={1} /><span className="t-stat-star">★</span></span>
              <span className="t-stat-label">PATIENT RATING</span>
            </div>
            <div className="t-stat-divider"></div>
            <div className="t-stat">
              <span className="t-stat-num"><CountUp end={4800} />+</span>
              <span className="t-stat-label">PATIENTS TREATED</span>
            </div>
          </div>
        </div>

        <div className="testimonial-carousel">
          <div className="testimonial-card">
            <div className="testimonial-image-col">
              <img src={current.image} alt={current.name} className="testimonial-avatar" />
            </div>
            <div className="testimonial-content-col">
              <Quote className="quote-icon" size={48} />
              <div className="stars">
                {[...Array(current.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="quote-text">"{current.quote}"</p>
              <div className="author">
                <span className="author-name">{current.name}</span>
                <span className="author-role">{current.role}</span>
              </div>
            </div>
          </div>
          
          <div className="carousel-controls">
            <button onClick={prevTestimonial} className="carousel-btn" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextTestimonial} className="carousel-btn active" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
