import { ProjectsList } from './Projects';
import './Projects.css'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface ProjectProps {
    displayedName: string,
    techUsed: IconDefinition[]
    imagesNum: number
    projectId: string
}

function Project(props: ProjectProps) {

    let techUsed: JSX.Element[] = []
    let images = []

    for (let i=0; i< props.imagesNum; i++) {
        images.push(<img src={"ProjectsPics/"+props.projectId + "/pic" + i + ".png"}/>)
    }

    props.techUsed.forEach((icon) => {
        techUsed.push(<FontAwesomeIcon icon={icon}/>)
    })
    
    return <div style={{position:"relative"}} className='projectCard'>
        <p>{props.displayedName}</p>
        <p>Tech used: {techUsed}</p>
        <div className='images-container'>{images}</div>
        <div style={ {border:"3px solid blue", borderBottom:0, borderRight:0, width:"1.5rem", height:"1.5rem" ,top:"-3%", left:"-5%",position:"absolute"}}></div>
        <div style={ {border:"3px solid blue", borderTop:0, borderRight:0, width:"1.5rem", height:"1.5rem" ,bottom:"-3%", left:"-5%",position:"absolute"}}></div>

    </div>
}

function ProjectsFragment() {
    let projectCardsList: JSX.Element[] = []

    Object.entries(ProjectsList).forEach((item) => {
        projectCardsList.push(<><Project projectId={item[0]} displayedName={item[1].displayedName} techUsed={item[1].techUsed} imagesNum={item[1].imgNum} /></>)
    })

    return <>{projectCardsList}</>
}

export { ProjectsFragment };