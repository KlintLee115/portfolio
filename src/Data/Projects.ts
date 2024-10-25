import { ContentType } from "@/types/types"

export type ProjectType = ContentType & {
    techUsed: string[]
}
    & ({
        githubLink: string,
        extraLinks?: never
    }
        | {
            extraLinks: { href: string; text: string }[]
            githubLink?: never
        })

const ProjectsList: { [key: string]: ProjectType } = {
    'Reversed_Tetris': {
        image: "/ProjectsPics/Reversed_Tetris.png",
        displayedName: 'Reversed Tetris',
        description: "Created using HTML, CSS, and JS to strengthen my foundation of front end. Inspired by the popular Tetris game, this is a reversed version, where pieces move from bottom to top.\nBackend is written in .Net to enable multiplayer mode.",
        url: "https://reversed-tetris.netlify.app/",
        techUsed: ['HTML', '.NET', 'TypeScript', 'CSS'],
        extraLinks: [
            {
                href: 'https://github.com/KlintLee115/ReversedTetris',
                text: 'Frontend code'
            },
            {
                href: 'https://github.com/KlintLee115/ReversedTetrisApi',
                text: 'Backend code'
            },
        ]
    },
    'KSports': { image: "/ProjectsPics/KSports.png", displayedName: "K Sports", techUsed: ['NextJS', 'Azure Blob', 'PostgresDB', 'Tailwind CSS', 'Stripe', '.NET'], url: 'https://k-sports.vercel.app/', githubLink: 'https://github.com/KlintLee115/ksports', description: "A simple full stack e commerce website" },
    'Sepakat_lk': { image: "/ProjectsPics/Sepakat_lk.png", displayedName: 'Sepakat Lk', techUsed: ['React'], url: 'https://sepakatlk.netlify.app/', githubLink: 'https://github.com/KlintLee115/sepakatLK', description: "The landing page of a website for a Malaysia construction company called Sepakat LK." },
}


export default ProjectsList