import React from 'react';
import ProjectsList from '../../Data/Projects';
import '../DisplayItem.css'
import ContentDisplay from '@/components/ContentDisplay';

export default function Projects() {

    return <div>
        {Object.entries(ProjectsList).map(([projectId, project]) => {

            return (
                <ContentDisplay
                    key={projectId}
                    description={project.description}
                    url={project.url}
                    displayedName={project.displayedName}
                    techUsed={project.techUsed}
                    image={project.image}
                    {...(project.githubLink ? { githubLink: project.githubLink } : { extraLinks: project.extraLinks! })}
                />
            )
        })
        }
    </div>
}