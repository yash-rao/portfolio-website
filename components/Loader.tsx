"use client";

import React, { useEffect, useState } from 'react';
import '../styles/loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--overflow', 'hidden');

    const timer = setTimeout(() => {
      setFadeOut(true);
      const fadeTimer = setTimeout(() => {
        setLoading(false);
        document.documentElement.style.setProperty('--overflow', 'auto');
      }, 500);

      return () => clearTimeout(fadeTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`loading ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-text">
        <span className="loading-text-words">E </span>
        <span className="loading-text-words">X </span>
        <span className="loading-text-words">E </span>
        <span className="loading-text-words">L </span>
        <span className="loading-text-words">S </span>
        <span className="loading-text-words">I </span>
        <span className="loading-text-words">O </span>
        <span className="loading-text-words">R </span>
        <span className="loading-text-words">! </span>
      </div>
    </div>
  );
};

export default Loader;
