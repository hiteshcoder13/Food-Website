import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

  return (
    <footer className="footer">
      <h2>Contact Us</h2>
      <form className="contact-form"  action="https://formspree.io/f/mpwaakwd"
  method="POST">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
        //   value={formData.name}
        //   onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
        //   value={formData.email}
        //   onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
        //   value={formData.message}
        //   onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="footer-text">2024 All rights reserved</div>
    </footer>
  );
};

export default Footer;
