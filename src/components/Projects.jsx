import React from 'react';

export function Projects({ items, wide = false }) {
  return (
    <section id="projects" className={`section${wide ? ' section--wide' : ''}`}>
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {items.map((p) => (
            <article key={p.name} className="card project">
              <header>
                <h3>{p.name}</h3>
              </header>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags?.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="links">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer">Live</a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer">Code</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


