'use client';

// Navbar.tsx
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activePath, setActivePath] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = useRef<Array<HTMLElement | null>>([]);

  const toggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
    if (event.target.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.pageYOffset;
      const sections = ['#about', '#education', '#work', '#projects', '#contact'];
      let foundActive = false;

      sections.forEach(section => {
        const element = document.querySelector(section);
        if (element && !foundActive) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActivePath(section);
            foundActive = true;
          }
        }
      });

      if (!foundActive) {
        setActivePath('');
      }

      if (scrollOffset > 500) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section on load
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (href: string) => {
    setActivePath(href); // Update active path when NavLink is clicked
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className={`navbar ${scrolling ? 'colored' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link href="#home">A.</Link>
        </div>
        <div className={`links ${menuOpen ? 'open' : ''}`}>
          <NavLink href="#about" activePath={activePath} onClick={handleNavLinkClick}>About</NavLink>
          <NavLink href="#education" activePath={activePath} onClick={handleNavLinkClick}>Education</NavLink>
          <NavLink href="#work" activePath={activePath} onClick={handleNavLinkClick}>Work</NavLink>
          <NavLink href="#projects" activePath={activePath} onClick={handleNavLinkClick}>Projects</NavLink>
          <NavLink href="#contact" activePath={activePath} onClick={handleNavLinkClick}>Contact</NavLink>
        </div>
        <div className="toggle-wrapper">
          {/* <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

type NavLinkProps = {
  href: string;
  activePath: string;
  children: React.ReactNode;
  onClick: (href: string) => void; // Add onClick prop to handle click events
};

const NavLink = ({ href, activePath, children, onClick }: NavLinkProps) => (
  <Link href={href} passHref legacyBehavior>
    <a className={`nav-link ${activePath === href ? 'active' : ''}`} onClick={() => onClick(href)}>
      {children}
    </a>
  </Link>
);

export default Navbar;
