import React from 'react';
import './CTA.css';
import Button from './ui/Button';

const CTA = ({ onBookClick }) => {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-banner">
          <h2>You deserve healthcare that feels human.</h2>
          <p>We are currently accepting new patients. Book an appointment to get started.</p>
          <div className="cta-actions">
            <Button onClick={onBookClick}>Book Appointment</Button>
            <Button variant="text" className="cta-text-link">Call the Clinic</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
