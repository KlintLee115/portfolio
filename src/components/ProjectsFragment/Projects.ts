type ProjectType = {
    displayedName: string;
    techUsed: string[];
    websiteLink: string;
    githubLink?: string;
    description: string;
    extraLinks?: { href: string; text: string }[];
};

const ProjectsList: { [key: string]: ProjectType } = {
    'Reversed_Tetris': {
        displayedName: 'Reversed Tetris',
        description: "Created using HTML, CSS, and JS to strengthen my foundation of front end. Inspired by the popular Tetris game, this is a reversed version, where pieces move from bottom to top.\nBackend is written in .Net to enable multiplayer mode.",
        websiteLink: "https://reversed-tetris.netlify.app/",
        techUsed: ['Html', '.Net', 'Vanilla TypeScript', 'CSS'],
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
    'KSports': { displayedName: "K Sports", techUsed: ['NextJS', 'Azure Blob', 'PostgresDB', 'Tailwind CSS', 'Stripe', '.Net'], websiteLink: 'https://k-sports.vercel.app/', githubLink: 'https://github.com/KlintLee115/ksports', description: "A simple full stack e commerce website" },
    'Sepakat_lk': { displayedName: 'Sepakat Lk', techUsed: ['React'], websiteLink: 'https://sepakatlk.netlify.app/', githubLink: 'https://github.com/KlintLee115/sepakatLK', description: "The landing page of a website for a Malaysia construction company called Sepakat LK." },
}


export { ProjectsList }
