import React from 'react';

export function About({ summary }) {
  return (
    <section id="about" className="section section--bleed section--hero">
      <div className="container">
        <div>
          <h2>About</h2>
          <p className="summary">{summary}</p>
        </div>
        <div>
          {/* reserved for illustration or stats */}
        </div>
      </div>
    </section>
  );
}


