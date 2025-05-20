import React from 'react';
import TextRoller from './TextRoller'; // Adjust the path based on your project structure
import '../styles/rays.css';
import '../styles/social-icons.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className='hero-wrapper'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      <div className='rays' />
      <div className='hero-content'>
        <div className="hero-left">
          <TextRoller />
          <h1 className="hero-title">I&apos;m <strong>Yash Barot</strong>.</h1>
          <h2 className="hero-subtitle">Software Engineer | Full Stack Developer| Cyber Security Enthusiast</h2>
          <a href="https://docs.google.com/document/d/1AQjSHL8nA0rojW6mN4V-qrVhA3Gq53pz/edit?usp=sharing&ouid=101192173555009014020&rtpof=true&sd=true" target="_blank" className="resume-button">
            <div className="text-container">
              <span className="text">Resume</span>
              <span className="text">Open</span>
            </div>
          </a>
          <div className="social-media-icons">
            <a href="https://www.linkedin.com/in/1-yash-barot/" target="_blank" className="social-icon linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/yash-rao/" target="_blank" className="social-icon github"><i className="fa-brands fa-github"></i></a>
            <a href="mailto:ybarot1s@semo.edu" target="_blank" className="social-icon gmail"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-photo-wrapper">
          <Image 
            src="/images/avatar.jpg" 
            alt="Yash Barot" 
            className="hero-photo" 
            width={200} 
            height={200}
          />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
