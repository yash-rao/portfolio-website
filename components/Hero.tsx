import React from 'react';
import TextRoller from './TextRoller'; // Adjust the path based on your project structure
import '../styles/rays.css';
import '../styles/social-icons.css';

const Hero = () => {
  return (
    <section id="home" className='hero-wrapper'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      <div className='rays' />
      <div className='hero-content'>
        <div className="hero-left">
          <TextRoller />
          <h1 className="hero-title">I&apos;m <strong>Aniket Ahir</strong>.</h1>
          <h2 className="hero-subtitle">Software Engineer | Full Stack Developer | Cinephile | Gamer</h2>
          <a href="https://drive.google.com/file/d/1aL1mLH19l3POSWoJX-VQ2RDhVhRzC-pS/view?usp=sharing" target="_blank" className="resume-button">
            <div className="text-container">
              <span className="text">Resume</span>
              <span className="text">Open</span>
            </div>
          </a>
          <div className="social-media-icons">
            <a href="https://www.linkedin.com/in/aniketahir/" target="_blank" className="social-icon linkedin"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/ahiraniket/" target="_blank" className="social-icon github"><i className="fa-brands fa-github"></i></a>
            <a href="mailto:aaahir@asu.edu" target="_blank" className="social-icon gmail"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-photo-wrapper">
            <img src="../images/avatar.jpg" alt="Aniket Ahir" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
