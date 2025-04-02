/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'motion/react';
import { Button, Carousel, Panel } from 'rsuite';
import ProductCarousel from './components/newHome/ProductCarousel';
import AstroGem from './components/newHome/AstroGem';
import Testimonials from './components/newHome/Testimonials';
import HomeBlog from './components/newHome/HomeBlog';
import AnimatedText from './components/AnimatedText';
import Contact from './contact/page';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useWebStatus } from './context/status.context';
import { MainDisplayCarousel } from './components/newHome/MainDisplayCarousol';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollY } = useScroll(); // Framer Motion scroll tracking
  const [direction, setDirection] = useState('Idle');
  const [lastScroll, setLastScroll] = useState(0);

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > lastScroll) {
      setDirection('Down');
    } else if (latest < lastScroll) {
      setDirection('Up');
    }
    setLastScroll(latest);
  });

  // console.log({ direction, lastScroll });

  const { isWebsiteOnUpdate } = useWebStatus();

  if (!mounted) return null; // Prevent rendering on the server

  return isWebsiteOnUpdate ? (
    <div>
      <Contact />
    </div>
  ) : (
    <div>
      <div
        className={`h-sec1-header-container ${direction == 'Up' || direction == 'Idle' ? 'head-dir-up' : 'head-dir-down'}`}
      >
        <div className=" h-sec1-logo-container dis-flex ">
          <a href="/" className="dis-block">
            <div className="imageWrapper">
              <img
                src="/nav-jew-logo.jpg"
                loading="lazy"
                alt="Navratna Jewellers Logo"
              ></img>
            </div>
          </a>
        </div>
        <div className="h-sec1-collection-container dis-flex ">
          <a href="#" className="default-remove-a">
            <AnimatedText text="Collections" />
          </a>
          <a href="mmtc-pamp" className="default-remove-a">
            <AnimatedText text="Shop Now" />
          </a>
          <a href="#" className="default-remove-a">
            <AnimatedText text="Blog" />
          </a>
          <a href="#" className="default-remove-a">
            <AnimatedText text="About Us" />
          </a>
        </div>
        <div className="h-sec1-contact-container dis-flex ">
          <a href="#" className="default-remove-a">
            Contact Us
          </a>
        </div>
      </div>
      <div className="home-section1-container">
        <MainDisplayCarousel />
      </div>
      <div className="home-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1>Timeless Elegance, Crafted for You</h1>
            <div className="hero-buttons">
              <Button appearance="primary">Shop Now</Button>
              <Button appearance="ghost">Explore Collections</Button>
            </div>
          </div>
        </div>

        {/* Featured Collections */}
        <section className="collections">
          <h2>Our Collections</h2>
          <div className="collection-grid">
            {['Gold', 'Silver', 'MMTC-PAMP'].map((category, index) => (
              <Panel
                key={index}
                shaded
                bordered
                bodyFill
                className="collection-card"
              >
                <img
                  src={`/images/home-page-assests/collection/${category.toLowerCase()}.jpg`}
                  alt={category}
                  className="collection-image"
                />
                <h3>{category} Collection</h3>
                <Button appearance="primary">View More</Button>
              </Panel>
            ))}
          </div>
        </section>

        <section>
          <div>
            <ProductCarousel title="New Arrivals" />
          </div>
        </section>

        {/* Astrological Gems Section */}
        <AstroGem />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* Blog */}
        <HomeBlog />

        {/* Contact & Store Info */}
        <footer className="footer">
          <h2>Visit Us</h2>
          <div className="contact-info">
            <div>
              <FaMapMarkerAlt />
              <span>Beside Gurudwara, Main Road, Ranchi, India, Jharkhand</span>
            </div>
            <div>
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>
            <div>
              <FaEnvelope />
              <span>contact@navratnajewellers.com</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
