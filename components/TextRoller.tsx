'use client';
'use client';
import React, { useState, useEffect } from 'react';
import '../styles/text-roller.css';

const greetings = [
  { text: 'नमस्ते 🙏', color: '#fa8231' },    // Pastel Orange
  { text: 'Hello! 👋', color: '#82b1ff' },    // Pastel Yellow
  { text: 'Hola! 🤙', color: '#c678dd' },     // Pastel Purple
  { text: 'Salut! 🙋', color: '#82b1ff' }      // Pastel Blue
];

const TextRoller = () => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentGreetingIndex = 0;
    let currentTextIndex = 0;
    let eraseMode = false;
    let timeout: NodeJS.Timeout | null = null;

    const animateText = () => {
      timeout = setTimeout(() => {
        if (!eraseMode) {
          setDisplayText((prevText) => greetings[currentGreetingIndex].text.slice(0, currentTextIndex + 1));
          currentTextIndex++;

          if (currentTextIndex === greetings[currentGreetingIndex].text.length) {
            eraseMode = true;
            setTimeout(animateText, 1500); // Delay before erasing
          } else {
            animateText();
          }
        } else {
          setDisplayText((prevText) => greetings[currentGreetingIndex].text.slice(0, currentTextIndex));
          currentTextIndex--;

          if (currentTextIndex === 0) {
            eraseMode = false;
            currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
            setTimeout(animateText, 2500); // Delay before next greeting
          } else {
            animateText();
          }
        }
      }, eraseMode ? 50 : 50); // Typing speed and erasing speed
    };

    animateText();

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <div className='textRoller'>
      <div className='codeLine'>
        <span className='codeText'>
          <span className='systemText'>System</span>
          <span className='outText'>.out</span>
          <span className='printlnText'>.println</span>
          (&quot;
        </span>
      </div>
      <div className='string'>
        <h1 className='text' style={{ color: greetings[0].color }}>
          {displayText}
        </h1>
      </div>
      <div className='codeLine'>
        <span className='codeText'>&quot;);</span>
      </div>
    </div>
  );
};

export default TextRoller;
