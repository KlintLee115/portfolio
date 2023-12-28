import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './App.css';

import { ProjectsFragment } from './ProjectsFragment/ProjectFragment';

function App() {

  return (

    <>
      <div id="App">

        <header>
          <p id='logo'>K.L</p>
          <div>
            <p style={{ fontSize: "1.5rem" }}>Klint Lee</p>
            <p className='header-desc'>Software Developer</p>
            <a href='https://github.com/KlintLee115/'><FontAwesomeIcon style={{ marginRight: "2rem" }} icon={faGithub} size="2xl" /></a>
            <a href='https://www.linkedin.com/in/klint-lee-12573a199/'><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
            <p className='header-desc'>I am very self driven.</p>
            <p className='header-desc'>Lifes short, keep coding</p>
            <p className='header-desc'>programmerder@gmail.com</p>

          </div>
        </header>
       
       <ProjectsFragment />


      </div>

    </>
  );
}

export default App;

