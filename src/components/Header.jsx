import React from 'react';

export function Header({ resume, routes = [], currentRoute }) {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-main">
          <div>
            <h1 className="name">{resume.name}</h1>
            <p className="role">{resume.role}</p>
          </div>
          <nav className="top-nav" aria-label="Main">
            <ul className="top-menu">
              {routes.map((r) => (
                <li key={r.key} className={currentRoute === r.key ? 'active' : ''}>
                  <a href={`#/${r.key}`}>{r.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="header-links" aria-label="Profile links">
            {resume.website && (
              <a href={resume.website} target="_blank" rel="noreferrer">Website</a>
            )}
            {resume.linkedin && (
              <a href={resume.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            )}
            {resume.github && (
              <a href={resume.github} target="_blank" rel="noreferrer">GitHub</a>
            )}
          </nav>
        </div>
        <p className="location-email">
          <span>{resume.location}</span>
          <span> · </span>
          <a href={`mailto:${resume.email}`}>{resume.email}</a>
        </p>
      </div>
    </header>
  );
}


