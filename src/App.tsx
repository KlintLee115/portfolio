import React, { useState } from 'react';
import Projects from './Projects/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faAndroid } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { Page, PageOptions } from './Pages/Page';

function App() {

  const [selectedPage, setSelectedPage] = useState(PageOptions.Projects)

  return (
    <div className="App">
      <header>
        <p id='logo'>K.L</p>
        <div>
          <p style={{ fontSize: "1.5rem" }}>Klint Lee</p>
          <p className='header-desc'>Software Engineer</p>
          <FontAwesomeIcon style={{ marginRight: "2rem" }} icon={faGithub} size="2xl" />
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          <p className='header-desc'>Specializing in Android  <FontAwesomeIcon icon={faAndroid} size="xl" /></p>

          <p className='header-desc'>Lifes short, keep coding</p>          
          <p className='header-desc'>programmerder@gmail.com</p>

        </div>
      </header>

      <section>
        <nav>
          <p onClick={() => setSelectedPage(PageOptions.Projects)} style={selectedPage === PageOptions.Projects ? { borderTop: "2px solid black" } : {}}>Projects</p>
          <p onClick={() => setSelectedPage(PageOptions.Blogs)} style={selectedPage === PageOptions.Blogs ? { borderTop: "2px solid black" } : {}}>Blogs</p>
        </nav>
        <Page pageChoice={selectedPage} />
      </section>
    </div>
  );
}

export default App;
