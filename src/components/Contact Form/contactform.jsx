import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactform.css';

const ContactForm = () => {
  const form = useRef();

  const SERVICE_ID = 'service_wfn7gy7'
  const TEMPLATE_ID = 'template_qlfsney'
  const PUBLIC_KEY = '0Yx-q6E5eFOAYxjpa'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    story: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm( SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert('Thank you for your story! It has been sent.');
          setFormData({ name: '', email: '', story: '' });
      }, (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message, please try again.');
      });
  };

  return (
    // Add the ref to your form element
    <form ref={form} className="contact-form" id= "ourcontact" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            id="name"
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="story">TELL US YOUR STORY</label>
        <textarea
          id="story"
          name="story"
          value={formData.story}
          onChange={handleChange}
          rows="8"
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default ContactForm;