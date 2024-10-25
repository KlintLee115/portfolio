import Link from "next/link";
import React from "react";
import { ProjectLinks } from "./Projects/ProjectLinksComponent";
import { ProjectType } from "../Data/Projects";
import Image from 'next/image';
import { ContentType } from "@/types/types";
import { SiHtml5, SiCss3, SiTypescript, SiNextdotjs, SiMicrosoftazure, SiPostgresql, SiTailwindcss, SiStripe, SiReact } from "react-icons/si";

export default function ContentDisplay(props: ProjectType | ContentType) {

    const { displayedName, description, image, url } = props;

    return <div className='flex flex-col md:flex-row mb-20 shadow-projectCardDefault dark:shadow-projectCardLightGray py-6 px-10 gap-x-10 lg:justify-evenly'>
        <div className='rounded-md shadow-projectImgDefault max-w-[60%] min-w-[50%] text-white'>
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
                        <Link href={props.url} className='flex w-fit mx-auto gap-3 items-center shadow-linkLightTheme dark:shadow-linkDarkTheme mt-5 font-bold py-2 px-4'>
                            <div className='bg-cyan-500 rounded-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="black" stroke="cyan" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github">
                                    <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                                </svg>
                            </div>
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