import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-top">
        <div className="footer-social-links">
          <a href="https://www.linkedin.com/in/aniketahir/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/ahiraniket/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:aaahir@asu.edu">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </section>

      <section className="footer-middle">
        <p>
        From concept to code, ignited in the fires of Next.js, designed with Figma, and crafted with precision in Visual Studio Code. Aniket&apos;s digital fortress, built with the precision of Stark tech.
        </p>
      </section>

      <section className="footer-bottom">
        <p>© 2024 All rights reserved.</p>
        <p>Aniket Ahir <span>🇮🇳</span></p>
      </section>
    </footer>
  );
};

export default Footer;
