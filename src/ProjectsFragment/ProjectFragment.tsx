import React, { useState } from 'react';
import { ProjectsList } from './Projects';
import './Projects.css'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ProjectProps {
    displayedName: string,
    techUsed: IconDefinition[]
    imagesNum: number
    projectId: string
    githubLink: string, 
    url: string
}

function Project(props: ProjectProps) {

    const [currDisplayImgIdx, setCurrDisplayImgIdx] = useState(0)

    let techUsed: JSX.Element[] = []
    let images: JSX.Element[] = []

    for (let i = 0; i < props.imagesNum; i++) {
        images.push(<img src={"ProjectsPics/" + props.projectId + "/pic" + i + ".png"} />)
    }

    techUsed = props.techUsed.reduce((techList: JSX.Element[], val) =>
        techList.concat(<FontAwesomeIcon icon={val} />), techUsed)

    return <div className='projectCard'>
        <div id='header'>
            <div>
                <p style={{ fontSize: "1.5rem" }}>{props.displayedName}</p>
                <p style={{ fontSize: "1.2rem" }}>Tech used: {techUsed}</p>
            </div>
            <div id='icons'>
                <a href={props.githubLink}><img src="github-sign.png" alt=""/></a>
                <a href={props.url}>
                    <img src="browserIcon.png" alt="" />
                </a>
            </div>
        </div>

        <div className='project-container'>

            <i className='arrow left' onClick={() =>
                setCurrDisplayImgIdx(currDisplayImgIdx == 0 ? props.imagesNum - 1 : currDisplayImgIdx - 1)
            }></i>
            {images[currDisplayImgIdx]}
            <i className='arrow right' onClick={() =>
                setCurrDisplayImgIdx(currDisplayImgIdx == props.imagesNum - 1 ? 0 : currDisplayImgIdx + 1)
            }></i>
        </div>
        <div style={{ border: "3px solid blue", borderBottom: 0, borderRight: 0, width: "1.5rem", height: "1.5rem", top: "-3%", left: "-5%", position: "absolute" }}></div>
        <div style={{ border: "3px solid blue", borderTop: 0, borderRight: 0, width: "1.5rem", height: "1.5rem", bottom: "-3%", left: "-5%", position: "absolute" }}></div>

    </div>
}

function ProjectsFragment() {
    let projectCardsList: JSX.Element[] = []

    Object.entries(ProjectsList).forEach((item) => {
        projectCardsList.push(<><Project githubLink={item[1].githubLink} url={item[1].websiteLink} projectId={item[0]} displayedName={item[1].displayedName} techUsed={item[1].techUsed} imagesNum={item[1].imgNum} /></>)
    })

    return <>{projectCardsList}</>
}

export { ProjectsFragment };