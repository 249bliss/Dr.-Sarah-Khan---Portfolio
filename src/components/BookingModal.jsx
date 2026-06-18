import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Video, User, CheckCircle } from 'lucide-react';
import './BookingModal.css';
import Button from './ui/Button';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [visitType, setVisitType] = useState('virtual');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  
  // Close on ESC key & lock background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    
    // Prevent default scroll behavior on body/html when modal is open
    const preventDefault = (e) => {
      // If the scroll event happens on the overlay background or outside the modal-card, prevent it
      if (e.target.classList.contains('booking-overlay')) {
        e.preventDefault();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Add non-passive event listeners to ensure preventDefault() works
      window.addEventListener('wheel', preventDefault, { passive: false });
      window.addEventListener('touchmove', preventDefault, { passive: false });
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', preventDefault);
      window.removeEventListener('touchmove', preventDefault);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Generate available days depending on visit type
  const getAvailableDays = () => {
    const days = [];
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    let current = new Date();
    
    // Add 1 day if it's already late in the day
    if (current.getHours() >= 17) {
      current.setDate(current.getDate() + 1);
    }

    while (days.length < 6) {
      const dayOfWeek = current.getDay();
      
      // Virtual visits: Mon-Fri (1 to 5)
      // Clinic visits: Mon-Thu (1 to 4) (as Friday clinic is short-hours / administrative, let's say Clinic visits are Mon-Thu)
      const isValidDay = visitType === 'virtual' 
        ? (dayOfWeek >= 1 && dayOfWeek <= 5) 
        : (dayOfWeek >= 1 && dayOfWeek <= 4);

      if (isValidDay) {
        days.push({
          formatted: current.toLocaleDateString('en-US', options),
          value: current.toISOString().split('T')[0],
          dayName: current.toLocaleDateString('en-US', { weekday: 'short' }),
          dayNum: current.getDate()
        });
      }
      current.setDate(current.getDate() + 1);
    }
    return days;
  };

  // Virtual slots vs In-clinic slots
  const virtualSlots = [
    { time: '09:00 AM' },
    { time: '10:30 AM' },
    { time: '11:15 AM' },
    { time: '02:00 PM' },
    { time: '03:30 PM' },
    { time: '04:15 PM' }
  ];

  const clinicSlots = [
    { time: '08:30 AM' },
    { time: '10:00 AM' },
    { time: '11:30 AM' },
    { time: '01:30 PM' },
    { time: '03:00 PM' },
    { time: '04:30 PM' }
  ];

  const timeSlots = visitType === 'virtual' ? virtualSlots : clinicSlots;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    
    // Switch to step 1.5 (loading screen)
    setStep('loading');
    
    // Simulate API request/submission
    setTimeout(() => {
      setStep(3);
    }, 1500);
  };

  const handleClose = () => {
    setStep(1);
    setDate('');
    setTimeSlot('');
    setVisitType('virtual');
    setFormData({ name: '', email: '', phone: '', notes: '' });
    onClose();
  };

  const days = getAvailableDays();

  return (
    <div 
      className="booking-overlay" 
      onClick={handleClose}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <div className="booking-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="booking-close-btn" onClick={handleClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {step === 1 && (
          <div className="booking-step">
            <span className="eyebrow">Step 1 of 2</span>
            <h2>Select Date & Time</h2>
            
            <div className="booking-type-toggle">
              <button 
                type="button" 
                className={`type-btn ${visitType === 'virtual' ? 'active' : ''}`}
                onClick={() => setVisitType('virtual')}
              >
                <Video size={18} />
                <span>Virtual Consultation</span>
              </button>
              <button 
                type="button" 
                className={`type-btn ${visitType === 'clinic' ? 'active' : ''}`}
                onClick={() => setVisitType('clinic')}
              >
                <User size={18} />
                <span>Clinic Visit</span>
              </button>
            </div>

            <div className="booking-section-label">Available Days</div>
            <div className="booking-days-grid">
              {days.map((d) => (
                <button
                  key={d.value}
                  type="button"
                  className={`day-select-btn ${date === d.value ? 'selected' : ''}`}
                  onClick={() => setDate(d.value)}
                >
                  <span className="day-select-name">{d.dayName}</span>
                  <span className="day-select-num">{d.dayNum}</span>
                </button>
              ))}
            </div>

            <div className="booking-section-label">Available Time Slots</div>
            <div className="booking-time-grid">
              {timeSlots.map((slot) => (
                <button
                  key={slot.time}
                  type="button"
                  className={`time-select-btn ${timeSlot === slot.time ? 'selected' : ''}`}
                  onClick={() => setTimeSlot(slot.time)}
                >
                  <Clock size={14} />
                  <span>{slot.time}</span>
                </button>
              ))}
            </div>

            <div className="booking-actions">
              <Button 
                onClick={() => setStep(2)} 
                disabled={!date || !timeSlot}
                className="booking-next-btn"
              >
                Continue to Details
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="booking-step">
            <span className="eyebrow">Step 2 of 2</span>
            <h2>Your Contact Information</h2>
            
            <div className="booking-summary-badge">
              <Calendar size={16} />
              <span>
                {days.find(d => d.value === date)?.formatted} at {timeSlot} ({visitType === 'virtual' ? 'Virtual' : 'In-Clinic'})
              </span>
            </div>

            <div className="booking-info-banner">
              <p><strong>Please complete all required fields below.</strong> This information is necessary for Dr. Khan's clinic to verify your slot and send your consultation details.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Symptoms or reason for visit (optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Brief description of what you'd like to discuss..."
                />
              </div>

              <div className="booking-actions">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button type="submit">
                  Confirm Booking
                </Button>
              </div>
            </form>
          </div>
        )}

        {step === 'loading' && (
          <div className="booking-step booking-loading-step">
            <div className="booking-spinner"></div>
            <h2>Booking your appointment...</h2>
            <p className="loading-subtext">Please wait while we reserve your consultation slot.</p>
          </div>
        )}

        {step === 3 && (
          <div className="booking-step booking-success-step">
            <CheckCircle size={64} className="success-icon" />
            <h2>Appointment Requested!</h2>
            <p className="success-text">
              Thank you, <strong>{formData.name}</strong>. Your request for a{' '}
              <strong>{visitType === 'virtual' ? 'Virtual Consultation' : 'Clinic Visit'}</strong> on{' '}
              <strong>{days.find(d => d.value === date)?.formatted}</strong> at{' '}
              <strong>{timeSlot}</strong> has been received.
            </p>
            <p className="success-subtext">
              We have sent a confirmation email to <strong>{formData.email}</strong>. Our clinic staff will review the slot and reach out if any adjustments are needed.
            </p>
            <Button onClick={handleClose}>Close Window</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
