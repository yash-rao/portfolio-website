import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-top">
        <div className="footer-social-links">
          <a href="https://www.linkedin.com/in/1-yash-barot/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/yash-rao/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:ybarot1s@semo.edu">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </section>

      

      <section className="footer-bottom">
        <p>© 2025 All rights reserved.</p>
        <p>Yash Barot</p>
      </section>
    </footer>
  );
};

export default Footer;
