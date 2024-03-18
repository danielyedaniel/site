import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

export const appStyle = {
  minHeight: '100vh',
  color: 'white',
  fontFamily: 'monospace',
  textAlign: 'center',
  backgroundColor: '#120A2F',
  padding: '20px',
};

export const linkStyle = {
  color: '#007BFF',
  textDecoration: 'none',
  margin: '0 10px',
};

export const linksContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  listStyleType: 'none',
  padding: 0,
  marginTop: '20px',
};


function Homepage() {
  return (
    <div style={appStyle}>
      <header>
        <h1>Daniel Ye</h1>
      </header>
      <main>
        <section>
          <p>This is my website :)</p>
              <h2>Resources</h2>
              <ul style={linksContainerStyle}>
                <li><Link to="/about" style={linkStyle}>About Me</Link></li>
                <li><Link to="/blackjack" style={linkStyle}>Bj</Link></li>
                <li><a href="/Daniel_Ye_Resume.pdf" style={linkStyle} target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><a href="https://linkedin.com/in/danielyedaniel" style={linkStyle} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/danielyedaniel" style={linkStyle} target="_blank" rel="noopener noreferrer">Github</a></li>
              </ul>
          </section>
      </main>
    </div>
  );
}

export default Homepage;
