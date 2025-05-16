"use client";

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faAt, faCrosshairs, faMessage,
  faSpinner, faTowerCell
} from '@fortawesome/free-solid-svg-icons';
import Toast from './Toast'; // ✅ Make sure Toast has "use client" at top
import GalaxyComponent from './GalaxyComponent'; // ✅ Make sure GalaxyComponent has "use client"

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error' | null>(null);
  const [hydrated, setHydrated] = useState(false);

  // Ensures animations & DOM manipulation only happen on client
  useEffect(() => {
    setHydrated(true);

    // Auto resize textarea on mount (if it has value)
    const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement | null;
    if (textarea && textarea.value) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      setLoading(false);
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
        <p className="contact-section-tagline">
          Like the forge of Nidavellir, your mouse is the key—click, drag, and craft a galaxy of possibilities before sending your message.
        </p>
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
              <label htmlFor="name" className="contact-form-label">Commander, your name?</label>
            </div>

            <div className="contact-form-group">
              <span className="contact-icon"><FontAwesomeIcon icon={faAt} /></span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-form-control"
                placeholder=" "
                required
              />
              <label htmlFor="email" className="contact-form-label">Drop Your Signal</label>
            </div>

            <div className="contact-form-group">
              <span className="contact-icon"><FontAwesomeIcon icon={faCrosshairs} /></span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="contact-form-control"
                placeholder=" "
                required
              />
              <label htmlFor="subject" className="contact-form-label">Today&apos;s Topic</label>
            </div>

            <div className="contact-form-group">
              <span className="contact-icon"><FontAwesomeIcon icon={faMessage} /></span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact-form-control"
                placeholder=" "
                rows={1}
              />
              <label htmlFor="message" className="contact-form-label">Send Your Intel...</label>
            </div>

            <button type="submit" className="contact-submit-button" disabled={loading}>
              {hydrated && (
                loading ? (
                  <>Sending Transmission <FontAwesomeIcon icon={faSpinner} spin /></>
                ) : (
                  <>Send Transmission <FontAwesomeIcon icon={faTowerCell} /></>
                )
              )}
            </button>
          </form>

          {hydrated && isSent && toastType && (
            <Toast
              message={toastMessage}
              type={toastType}
              onClose={() => {
                setToastMessage('');
                setToastType(null);
              }}
            />
          )}

          {hydrated && errorMessage && <p className="contact-error-message">{errorMessage}</p>}
        </div>
      </div>
    </section>
  );
}
