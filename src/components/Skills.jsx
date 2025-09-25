import React from 'react';

export function Skills({ items }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <ul className="skills">
          {items.map((s) => (
            <li key={s} className="skill">{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}


