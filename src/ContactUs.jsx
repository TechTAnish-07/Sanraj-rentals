import React, { useState } from 'react';
import './ContactUs.css'; // Import the CSS

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus('Please fill out all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
    setStatus('Your message has been "sent"! (UI only)');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
      setStatus('');
    }, 4000);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="contact-textarea"
        />
        <button
          type="submit"
          className={`contact-button ${submitted ? 'submitted' : ''}`}
        >
          {submitted ? 'Sent!' : 'Send Message'}
        </button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
