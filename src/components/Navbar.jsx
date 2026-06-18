import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Button from './ui/Button';

const Navbar = ({ onBookClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <span>Dr. </span><span className="logo-text">Sarah Khan</span>
        </div>

        {/* Desktop nav */}
        <nav className="navbar-links">
          <a href="#services">Services</a>
          <a href="#process">Your Visit</a>
          <a href="#testimonials">Patients</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-action">
          <Button onClick={onBookClick}>Book Appointment</Button>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <div className={`mobile-menu ${menuOpen ? 'visible' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#process" onClick={closeMenu}>Your Visit</a>
          <a href="#testimonials" onClick={closeMenu}>Patients</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
        </nav>
        <div className="mobile-menu-cta">
          <Button onClick={() => { closeMenu(); onBookClick(); }}>Book Appointment</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
