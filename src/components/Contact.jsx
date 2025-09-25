import React from 'react';

export function Contact({ email, location }) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p className="contact-line"><strong>Location:</strong> {location}</p>
        <p className="contact-line"><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      </div>
    </section>
  );
}


