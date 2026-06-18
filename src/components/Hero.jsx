import React from 'react';
import './Hero.css';
import Button from './ui/Button';
import CountUp from './ui/CountUp';
import heroImage from '../assets/images/hero-image.png';

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const Hero = ({ onBookClick }) => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Good healthcare<br/>starts with listening.</h1>
          <p>
            <strong>Hi, I'm Dr. Sarah Khan</strong> for over 18 years, I've helped patients feel more 
            informed, supported, and confident about their health through thoughtful care and honest conversations.
          </p>
          <div className="hero-actions">
            <Button icon={<CalendarIcon />} onClick={onBookClick}>Book Appointment</Button>
            <a href="#about" className="btn btn-outline">About Dr. Sarah</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-bg-stripes">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
          </div>
          <img 
            src={heroImage} 
            alt="Dr. Sarah Khan" 
            className="hero-image"
          />
        </div>
      </div>
      <div className="hero-stats-wrapper">
        <div className="container">
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number"><CountUp end={18} /><span className="stat-blue">+yrs</span></div>
              <div className="stat-label">Caring for patients</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number"><CountUp end={4.9} decimals={1} /><span className="stat-blue">★</span></div>
              <div className="stat-label">From verified patients</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number"><CountUp end={4800} /><span className="stat-blue">+</span></div>
              <div className="stat-label">Visits Across long-term care</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
