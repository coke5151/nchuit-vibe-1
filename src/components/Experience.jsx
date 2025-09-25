import React from 'react';

export function Experience({ items }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <ul className="timeline" aria-label="Work experience">
          {items.map((job) => (
            <li key={`${job.company}-${job.title}`} className="timeline-item">
              <div className="timeline-header">
                <h3 className="company">{job.company}</h3>
                <div className="meta">
                  <span className="title">{job.title}</span>
                  <span className="dates">{job.start} – {job.end}</span>
                </div>
              </div>
              <ul className="bullets">
                {job.items.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


