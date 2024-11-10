"use client"

import { useState } from "react";
import Tabs from "./Tabs"
import ProjectsDisplay from "./Projects/ProjectsDisplay";
import ArticlesDisplay from "./Articles/ArticlesDisplay";

export type TabOptions = 'projects' | 'articles'

export default function () {

    const [tab, setTab] = useState<TabOptions>('projects')

    return (
        <section className='mt-20 mx-auto w-5/6'>

            <Tabs  tab={tab} setTab={setTab}/>

            {
                tab === "projects" ? <ProjectsDisplay/> : <ArticlesDisplay/>
            }
            
        </section>
    )
}