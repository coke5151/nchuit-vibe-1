import React from 'react';

export function About({ summary }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About</h2>
        <p className="summary">{summary}</p>
      </div>
    </section>
  );
}


