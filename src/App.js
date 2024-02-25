import React from 'react';

function App() {
  const appStyle = {
    minHeight: '100vh', // Ensures the div takes at least the full height of the viewport
    color: 'black',
    fontFamily: 'monospace', // Code-like font
    textAlign: 'center',
    backgroundColor: '#FBF9F4', // Solid background color for the entire screen
    padding: '20px',
  };

  const linkStyle = {
    color: '#007BFF', // Darker blue color for links
    textDecoration: 'none', // Removes underline from links
    margin: '0 10px', // Adds horizontal spacing between links
  };

  const linksContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Centers the links horizontally
    listStyleType: 'none', // Removes bullet points
    padding: 0, // Removes default padding
    marginTop: '20px', // Adds some space above the links
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
            {/* New link added here */}
            <li><a href="/about" style={linkStyle}>About Me</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
