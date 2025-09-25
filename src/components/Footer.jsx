import React from 'react';

export function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {year} {name}. All rights reserved.</p>
      </div>
    </footer>
  );
}


