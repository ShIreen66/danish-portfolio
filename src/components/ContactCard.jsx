// pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="py-5" id="contact">
      <h1 className="mb-4">Contact Me</h1>
      <div className="contact-flex">
        <button className='contact-btn'><a href="mailto:dk88628@gmail.com"><span>Email:</span> dk88628@gmail.com</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg> </button>
        <button className='contact-btn'><a href="tel:+919340333890"><span>Phone:</span> +91 9340333890</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg></button>
        <button className='contact-btn'><a href="https://linkedin.com/in/danish-khan-b167851a9" target="_blank" rel="noopener noreferrer"><span>LinkedIn:</span> @danish-khan-b167851a9</a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg></button>
      </div>
    </div>
  );
}