import Link from "next/link";
import React from "react";
import { ProjectLinks } from "./Projects/ProjectLinksComponent";
import { ProjectType } from "../app/projects/Projects";
import Image from 'next/image';
import { ContentType } from "@/types/types";
import { SiHtml5, SiCss3, SiTypescript, SiNextdotjs, SiMicrosoftazure, SiPostgresql, SiTailwindcss, SiStripe, SiReact } from "react-icons/si";
import { LinkedInIcon } from "./LinkedIn";

export default function ContentDisplay(props: ProjectType | ContentType) {

    const { displayedName, description, image, url } = props;

    return <div className='flex flex-col lg:flex-row mb-20 shadow-projectCardDefault dark:shadow-projectCardLightGray py-6 px-10 gap-x-10 lg:justify-evenly'>
        <div className='rounded-md max-w-[70%] min-w-[50%] text-white'>
            <Link className="relative w-full h-full block" href={url} target='_blank'>
                <Image alt={displayedName} className="object-contain" fill src={image} />
            </Link>
        </div>
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

            {
                isProjectType(props) ?

                    // Project 
                    (
                        <>
                            <div className="flex w-full justify-evenly gap-5 items-center flex-wrap">
                                {props.techUsed.map(techName => (
                                    <span key={techName} className='flex gap-2 items-center'>
                                        <p>{techName}</p>
                                        {getTechIcon(techName)}
                                    </span>
                                ))}
                            </div>

                            <ProjectLinks {...props} />
                        </>
                    ) :

                    // Article

                    (
                        <Link href={props.url} target="_blank" className='flex w-fit mx-auto gap-3 items-center shadow-linkLightTheme dark:shadow-linkDarkTheme mt-5 font-bold py-2 px-4'>
                            <LinkedInIcon/>
                            View article
                        </Link>
                    )
            }

        </div>
    </div>
}

function isProjectType(props: ProjectType | ContentType): props is ProjectType {
    return 'techUsed' in props
}

const techIcons: { [key: string]: JSX.Element } = {
    "HTML": <SiHtml5 size={30} />,
    "CSS": <SiCss3 size={30} />,
    "TYPESCRIPT": <SiTypescript size={30} />,
    "NEXTJS": <SiNextdotjs size={30} />,
    "AZURE BLOB": <SiMicrosoftazure size={30} />,
    "POSTGRESDB": <SiPostgresql size={30} />,
    "TAILWIND CSS": <SiTailwindcss size={30} />,
    "STRIPE": <SiStripe size={30} />,
    "REACT": <SiReact size={30} />
};

function getTechIcon(techName: string) {
    return techIcons[techName.toUpperCase()] || null;
}