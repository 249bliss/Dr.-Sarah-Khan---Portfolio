import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Reveal from './components/ui/Reveal';
import CustomCursor from './components/ui/CustomCursor';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  const lenisRef = React.useRef(null);

  useEffect(() => {
    if (lenisRef.current) {
      if (isBookingOpen) {
        lenisRef.current.stop();
      } else {
        lenisRef.current.start();
      }
    }
  }, [isBookingOpen]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleAnchorClick = (e) => {
      const target = e.currentTarget;
      const id = target.getAttribute('href');
      if (id && id.startsWith('#')) {
        e.preventDefault();
        lenis.scrollTo(id, { offset: -56 }); // Offset for navbar
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <CustomCursor />
      <Navbar onBookClick={openBooking} />
      <main>
        <Hero onBookClick={openBooking} />
        <Reveal><About /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><CTA onBookClick={openBooking} /></Reveal>
      </main>
      <Footer />
      
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
}

export default App;
