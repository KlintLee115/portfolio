import { ProjectsList } from './Projects';
import './Projects.css'

interface ProjectProps {
    displayedName: string,
    techUsed: string[],
    projectId: string
    githubLink: string,
    url: string,
    description: string
}

function Project(props: ProjectProps) {

    let techUsed: JSX.Element[] = []

    techUsed = props.techUsed.reduce((techList: JSX.Element[], techName) =>
        techList.concat(<p key={techName} style={{ marginTop:"0.5vh", fontWeight: "bold", boxShadow: "0 0 10px rgba(0,0,0,.1)", padding: "0.5rem 1rem" }}>{techName}</p>), techUsed)

    return <div className='projectCard' style={{ display: "flex"}}>
        <img key={props.projectId} src={"/ProjectsPics/" + props.projectId + ".png"} style={{ borderRadius: "5%", boxShadow: '0 0 10px rgba(0,0,0,.1)', maxHeight:"70vh", objectFit:"contain" }} />
        <div id='projectTexts' style={{ fontSize: "1.1rem", textAlign: "center" }}>
            <p style={{ fontWeight: "bold", marginTop: "30px" }}>{props.displayedName.toUpperCase()}</p>
            <p style={{ textAlign: "center", color: "#767676", fontWeight: 500 }}>{props.description}</p>
            <div style={{ display: "flex", width: "100%", justifyContent: "space-evenly", flexWrap:"wrap" }}>{techUsed}</div>

            <div id='links' style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "40px" }}>
                <a href={props.githubLink} style={{ display: "flex", alignItems: "center", gap: "4px" }}>Code
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>                </a>
                <a href={props.url} style={{ display: "flex", alignItems: "center", gap: "4px" }}>Website
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>                </a>
            </div>
        </div>

    </div>
}

function ProjectsFragment() {
    let projectCardsList: JSX.Element[] = []

    Object.entries(ProjectsList).forEach((item) => {
        projectCardsList.push(<Project key={item[1].githubLink} description={item[1].description} githubLink={item[1].githubLink} url={item[1].websiteLink} projectId={item[0]} displayedName={item[1].displayedName} techUsed={item[1].techUsed} />)
    })

    return <section style={{width:"60%", margin:"0 auto"}}>
        <h1 style={{fontSize:"2rem"}}>Projects</h1>
        {projectCardsList}
    </section>
}

export { ProjectsFragment };