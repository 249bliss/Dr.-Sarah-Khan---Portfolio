import React, { useState } from 'react';
import './FAQ.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "Do you take insurance, what?",
      answer: "We accept most major insurance plans. Please contact our office to verify if we are in-network with your specific provider."
    },
    {
      question: "Are virtual appointments available?",
      answer: "Yes, we offer secure telehealth consultations for established patients for follow-ups and minor health concerns."
    },
    {
      question: "What should I bring to my first visit?",
      answer: "Please bring a valid ID, your insurance card, a list of current medications, and any relevant past medical records."
    },
    {
      question: "What are your group sizes like if I look for a clinic?",
      answer: "We intentionally limit our daily patient load to ensure everyone gets the unhurried attention they deserve."
    },
    {
      question: "Can I book online?",
      answer: "Absolutely. You can schedule appointments anytime through our secure online patient portal."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq-section section-alt">
      <div className="container faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <span className="eyebrow">ABOUT DR. SARAH KHAN</span>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <button className="faq-toggle" aria-label="Toggle answer">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
