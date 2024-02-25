import React from 'react';

function App() {
  const appStyle = {
    minHeight: '100vh',
    color: 'white',
    fontFamily: 'monospace',
    textAlign: 'center',
    backgroundColor: '#120A2F',
    padding: '20px',
  };

  const linkStyle = {
    color: '#007BFF',
    textDecoration: 'none',
    margin: '0 10px',
  };

  const linksContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: 0,
    marginTop: '20px',
  };

  return (
    <div style={appStyle}>
      <header>
        <h1>Daniel Ye</h1>
      </header>
      <main>
        <p>This is my website :)</p>
        <section>
          <h2>Resources</h2>
          <ul style={linksContainerStyle}>
            <li><a href="/Daniel_Ye_Resume_EA.pdf" style={linkStyle} target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li><a href="https://linkedin.com/in/danielyedaniel" style={linkStyle} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/danielyedaniel" style={linkStyle} target="_blank" rel="noopener noreferrer">Github</a></li>
            {/* <li><a href="/about" style={linkStyle}>About Me</a></li> */}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
