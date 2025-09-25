import React from 'react';

export function Education({ items }) {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        <ul className="education">
          {items.map((e) => (
            <li key={`${e.school}-${e.degree}`} className="education-item">
              <div className="education-header">
                <h3 className="school">{e.school}</h3>
                <span className="year">{e.year}</span>
              </div>
              <p className="degree">{e.degree}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


