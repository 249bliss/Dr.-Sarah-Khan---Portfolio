import React from 'react';
import './Services.css';
import { Stethoscope, Activity, Heart, Video, ClipboardList, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Stethoscope size={24} />,
      title: "Annual Wellness Visits",
      description: "Comprehensive check-ups to review your overall health, update screenings, and set wellness goals."
    },
    {
      icon: <Activity size={24} />,
      title: "Preventive Health Screenings",
      description: "Proactive testing and evaluations to catch potential health issues early when they are most treatable."
    },
    {
      icon: <Heart size={24} />,
      title: "Chronic Condition Management",
      description: "Ongoing support and treatment plans for conditions like diabetes, hypertension, and asthma."
    },
    {
      icon: <Video size={24} />,
      title: "Virtual Consultations",
      description: "Convenient telehealth appointments for follow-ups, minor illnesses, and reviewing test results."
    },
    {
      icon: <ClipboardList size={24} />,
      title: "Diagnostic Evaluations",
      description: "In-depth assessments to identify the root causes of complex or unexplained symptoms."
    },
    {
      icon: <Users size={24} />,
      title: "Specialist Coordination",
      description: "Seamless referrals and communication with trusted specialists when advanced care is needed."
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services-header">
          <h2>How I help patients feel supported.</h2>
          <p>Comprehensive primary care tailored to your unique needs and lifestyle.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
