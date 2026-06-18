import React from 'react';
import './About.css';
import aboutImage from '../assets/images/about-image.jpg';

const About = () => {
  return (
    <section id="about" className="section section-alt about">
      <div className="container about-container">
        <div className="about-image-column">
          <img 
            src={aboutImage} 
            alt="Dr. Sarah Khan" 
            className="about-image"
          />
        </div>
        <div className="about-content">
          <span className="eyebrow">About Dr. Sarah Khan</span>
          <h2>A partner in your health journey.</h2>
          <div className="about-text">
            <p>
              I believe that the best healthcare is built on trust, active listening, and a deep understanding of each patient as a whole person, not just a set of symptoms.
            </p>
            <p>
              After completing my medical degree at Johns Hopkins University and my residency at Mayo Clinic, I spent over a decade working in busy hospital settings. I realized that the modern medical system often doesn't give doctors the time they need to truly get to know their patients.
            </p>
            <p>
              That's why I started this practice. Here, appointments aren't rushed. We have the time to discuss your concerns, explore preventive measures, and build a sustainable plan for your long-term wellness.
            </p>
            <p>
              When I'm not in the clinic, you can find me hiking local trails with my golden retriever, experimenting with plant-based recipes, or reading up on the latest advancements in lifestyle medicine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
