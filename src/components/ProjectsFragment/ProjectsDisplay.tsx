import React from 'react';
import { ProjectsList } from './Projects';
import './Projects.css';
import { ProjectLinks, ProjectLinksProps } from './ProjectLinks';
import Image from 'next/image';

export default function ProjectsDisplay() {

    return (
        <section className='mt-20 mx-auto w-[60%]'>
            <h1 className='text-4xl mb-10'>Projects</h1>
            {
                Object.entries(ProjectsList).map(async ([projectId, project]) => {

                    const image = await import(`../../../public/ProjectsPics/${projectId}.png`)

                    return (
                        <Project
                            key={projectId}
                            description={project.description}
                            githubLink={project.githubLink}
                            url={project.websiteLink}
                            projectId={projectId}
                            displayedName={project.displayedName}
                            techUsed={project.techUsed}
                            extraLinks={project.extraLinks}
                            image={image}
                        />
                    )
                })
            }
        </section>
    )
}

type ProjectProps = {
    displayedName: string;
    techUsed: string[];
    projectId: string;
    description: string;
    image: string
} & ProjectLinksProps

const Project: React.FC<ProjectProps> = ({ displayedName, techUsed, projectId, githubLink, url, description, extraLinks, image }) => (
    <div className='flex flex-col md:flex-row mb-20 items-center shadow-projectCardDefault dark:shadow-projectCardLightGray py-6 px-10 gap-x-10 lg:justify-evenly'>
        <Image alt={displayedName} className='rounded-md shadow-projectImgDefault max-w-[60%] min-w-[30%] text-white' key={projectId} src={image} />
        <div className='text-center text-lg'>
            <p className='font-bold mt-7'>{displayedName.toUpperCase()}</p>
            <p className='text-center mt-3 font-medium text-gray-700 dark:text-white dark:font-extralight text-lg'>
                {description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                        <br />
                    </React.Fragment>
                ))}
            </p>
            <div className='flex w-full justify-evenly flex-wrap'>
                {techUsed.map(techName => (
                    <p className='shadow-projectTechUsedDefault dark:shadow-projectCardLightGray mt-5 font-bold py-2 px-4' key={techName}>
                        {techName}
                    </p>
                ))}
            </div>
            <ProjectLinks url={url} extraLinks={extraLinks} githubLink={githubLink} />
        </div>
    </div>
);