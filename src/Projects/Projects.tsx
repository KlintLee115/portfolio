import Project from './Project';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';

function Projects() {
    return <div id="Projects">
        <div className='ShowCase'>
            <Project techUsed={[faReact, faHtml5, faCss3]} websiteLink='https://bright-cheesecake-af7cb3.netlify.app/' githubLink='https://github.com/KlintLee115/SepakatLK' name="SepakatLK, a company website" imgSrc="./pics/SepakatLK.png" />
            <Project techUsed={[faHtml5, faCss3 ]} websiteLink='https://sunny-puppy-204102.netlify.app/' githubLink='https://github.com/KlintLee115/mathRateOfChange' name="School Math Project" imgSrc="./pics/SchoolProject.png" />
        </div>

    </div>
}

export default Projects;