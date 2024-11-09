"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faFileAlt, faCommentDots, faPaperPlane, faSpinner, faSpaceShuttle} from '@fortawesome/free-solid-svg-icons';
import Toast from './Toast'; // Import the Toast component
import GalaxyComponent from './GalaxyComponent';
import { faSpaceAwesome } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // State for loading
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch("/api/sendEmail", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setToastMessage('Message sent successfully!');
        setToastType('success');
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorResponse = await response.json();
        setToastMessage(errorResponse.error || 'There was a problem sending your message.');
        setToastType('error');
      }
    } catch (error) {
      console.error(error);
      setToastMessage('Failed to send the message. Please try again later.');
      setToastType('error');
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <section id="contact" className="contact-section">
    <div className="galaxy-background">
        <GalaxyComponent />
      </div>
      <div className="contact-section-heading-wrapper">
        <h2 className="section-heading">Contact</h2>
        <p className="contact-section-subheading">I&apos;d love to hear from you!</p>
        <p className="contact-section-tagline">Like the forge of Nidavellir, your mouse is the key—click, drag, and craft a galaxy of possibilities before sending your message.</p>
      </div>
      <div className="contact-content" style={{ position: 'relative', zIndex: 2 }}>
      
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <span className="contact-icon"><FontAwesomeIcon icon={faUser} /></span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-form-control"
                placeholder=" "
                required
              />
              <label htmlFor="name" className="contact-form-label">What&apos;s your name, commander?</label>
            </div>
            <div className="contact-form-group">
              <span className="contact-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-form-control"
                placeholder=" "
                required
              />
              <label htmlFor="email" className="contact-form-label">What&apos;s the email for your ship?</label>
            </div>
            <div className="contact-form-group">
              <span className="contact-icon"><FontAwesomeIcon icon={faFileAlt} /></span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="contact-form-control"
                placeholder=" "
                required
              />
              <label htmlFor="subject" className="contact-form-label">Show me our subject...</label>
            </div>
            <div className="contact-form-group">
              <span className="contact-icon"><FontAwesomeIcon icon={faCommentDots} /></span>
              <textarea
                className="contact-form-control"
                rows={1} 
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement; 
                  target.style.height = "auto";
                  target.style.height = `${Math.min(target.scrollHeight, 200)}px`; 
                }}
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder=" "
              />
              <label htmlFor="message" className="contact-form-label">Brief me about our next mission...</label>
            </div>
            <button type="submit" className="contact-submit-button" disabled={loading}>
              {loading ? (
                <>
                  Sending Transmission <FontAwesomeIcon icon={faSpinner} spin />
                </>
              ) : (
                <>
                  Send Transmission <FontAwesomeIcon icon={faSpaceAwesome} />
                </>
              )}
            </button>
          </form>
          {isSent && toastType && (
            <Toast 
              message={toastMessage} 
              type={toastType} 
              onClose={() => {
                setToastMessage('');
                setToastType(null);
              }} 
            />
          )}
          {errorMessage && <p className="contact-error-message">{errorMessage}</p>}
        </div>
        
      </div>
    </section>
  );
}
