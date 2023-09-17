import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import { ProjectsFragment } from './ProjectsFragment/ProjectFragment';
import NotesFragment from './NotesFragment/NotesFragment';
import NoteShowOff from './NoteShowOff';
import React from 'react';

function AppEventListener(e: React.MouseEvent<HTMLDivElement, MouseEvent>, setCurrNote: React.Dispatch<React.SetStateAction<currNoteType>>, currNote: currNoteType) {
  e.currentTarget === document.getElementById('App') && currNote && setCurrNote(undefined)
}

type currNoteType = undefined | string

enum TabOptions {
  Projects, Notes
}

function App() {

  const [selectedTab, setSelectedTab] = useState(TabOptions.Projects)
  const [currNote, setCurrNote] = useState<currNoteType>(undefined)

  return (
    <>
      <div id="App" onClick={(e) => AppEventListener(e, setCurrNote, currNote)}>
        <header>
          <p id='logo'>K.L</p>
          <div>
            <p style={{ fontSize: "1.5rem" }}>Klint Lee</p>
            <p className='header-desc'>Software Developer</p>
            <a href='https://github.com/KlintLee115/mathRateOfChange'><FontAwesomeIcon style={{ marginRight: "2rem" }} icon={faGithub} size="2xl" /></a>
            <a href='https://www.linkedin.com/in/klint-lee-12573a199/'><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
            <p className='header-desc'>Lifes short, keep coding</p>
            <p className='header-desc'>programmerder@gmail.com</p>

          </div>
        </header>
        <nav>
          <p onClick={() => {
            setSelectedTab(TabOptions.Projects)
          }} style={selectedTab === TabOptions.Projects ? { borderTop: "2px solid black" } : {}}>Projects</p>
          <p onClick={() => setSelectedTab(TabOptions.Notes)} style={selectedTab === TabOptions.Notes ? { borderTop: "2px solid black" } : {}}>Notes</p>
        </nav>

        {selectedTab === TabOptions.Projects ? <ProjectsFragment /> : <NotesFragment setNote={setCurrNote} />}


      </div>


      <NoteShowOff id={currNote}/>

      <footer style={selectedTab == TabOptions.Notes? {position:'fixed', bottom:"0"} : {position:"relative"}}>
        <a href="https://www.flaticon.com/free-icons/browser" title="browser icons">Browser icons created by alkhalifi design - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/github" title="github icons" style={{ display: "block"}}>Github icons created by Dave Gandy - Flaticon</a>
      </footer>
    </>
  );
}

export default App;

