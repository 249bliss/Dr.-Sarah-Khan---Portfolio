import React, { useState, useEffect, useRef } from 'react';
import './Process.css';

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);
  const steps = [
    {
      title: "Book your initial visit",
      description: "Schedule online or call our office. We'll send you intake forms to complete beforehand."
    },
    {
      title: "Comprehensive evaluation",
      description: "A 60-minute deep dive into your medical history, current concerns, and lifestyle."
    },
    {
      title: "Personalized care plan",
      description: "Together, we'll build an actionable roadmap for your immediate and long-term health."
    },
    {
      title: "Follow-up & coordination",
      description: "Regular check-ins, lab reviews, and specialist referrals as needed."
    },
    {
      title: "Ongoing wellness support",
      description: "Continuous care through annual visits and prompt attention to new issues."
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="process" className="section section-alt process">
      <div className="container process-container">
        <div className="process-content">
          <span className="eyebrow">What to Expect</span>
          <h2>What working together looks like.</h2>
          <p>We believe in transparent, collaborative care. Here's our step-by-step approach to supporting your health.</p>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div 
              key={index} 
              ref={(el) => (stepRefs.current[index] = el)}
              className={`process-step ${index === activeIndex ? 'active' : ''}`}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
