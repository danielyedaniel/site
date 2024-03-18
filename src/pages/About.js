// About.js
import React from 'react';
import {appStyle, linksContainerStyle} from './Homepage'
function About() {
  return (
    <div style={appStyle}>
      <header>
        <h1>About me</h1>
      </header>
      <main>
        <section>
          <p>I haven't filled this section out yet :(</p>
              {/* <h2>Resources</h2> */}
              <ul style={linksContainerStyle}>
                {/* <li><a href="/Daniel_Ye_Resume.pdf" style={linkStyle} target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><a href="https://linkedin.com/in/danielyedaniel" style={linkStyle} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/danielyedaniel" style={linkStyle} target="_blank" rel="noopener noreferrer">Github</a></li> */}
              </ul>
          </section>
      </main>
    </div>
  );
}

export default About;
