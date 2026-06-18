import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">Dr. Sarah Khan <span className="md">MD</span></h3>
            <p className="footer-bio">
              Board-certified primary care physician dedicated to comprehensive, compassionate healthcare tailored to your unique needs.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Navigate</h4>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#visit">Your Visit</a></li>
              <li><a href="#patients">Patients</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Office Hours</h4>
            <ul className="footer-text-list">
              <li>Mon-Thu: 8:00am - 5:00pm</li>
              <li>Fri: 8:00am - 3:00pm</li>
              <li>Sat-Sun: Closed</li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-text-list">
              <li>123 Healthway Blvd, Suite 200<br/>San Francisco, CA 94103</li>
              <li>(555) 123-4567</li>
              <li>hello@drsarahkhan.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Dr. Sarah Khan. All rights reserved.
          </div>
          <div className="footer-disclaimer">
            If you are experiencing a medical emergency, please call 911 or visit the nearest emergency room.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
