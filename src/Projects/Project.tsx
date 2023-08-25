import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './Project.css'
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProjectProps {
    name: string;
    imgSrc: string;
    techUsed: Array<IconDefinition>,
    websiteLink: string,
    githubLink: string
}
function Project(props: ProjectProps) {

    const iconsList: JSX.Element[] = props.techUsed.map((item, index) => (
        <FontAwesomeIcon
            key={index}
            style={{ marginRight: '2rem' }}
            icon={item}
            size='lg'
        />
    ));

    return <div id="project">
        <p style={{marginBottom:0}} id="name">
            {props.name}
        </p>
        <div style={{flexWrap:"wrap", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p id='tech-used'>Tech used:{iconsList.map((item) =>
                <li>{item}</li>
            )}
            </p>
            <div style={{ display: "flex", gap: "1em" }}>

                <a href={props.websiteLink}> <FontAwesomeIcon
                    icon={faGoogle}
                    size='lg'
                /></a>
                <a href={props.githubLink}> <FontAwesomeIcon
                    icon={faGithub}
                    size='lg'
                /></a>
            </div>
        </div>
        <img
            src={props.imgSrc}
            alt={props.name}
        />
    </div>
}


export default Project