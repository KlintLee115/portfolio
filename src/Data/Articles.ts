import { ContentType } from "@/types/types";

function getImgPath(imgName: string) {
    return `/ArticlePics/${imgName}.png`
}

const ArticlesList: { [key: string]: ContentType } = {
    'Reversed_Tetris': {
        displayedName: 'Reversed Tetris',
        description: "This article is about how I planned my Reversed Tetris game, including the multiplayer mode and game mechanism.",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7249086073828487169/",
        image: getImgPath('Reversed_Tetris')
    },
    'Database_Fts': {
        displayedName: 'Reversed Tetris',
        description: "This article is about how I planned my Reversed Tetris game, including the multiplayer mode and game mechanism.",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7249086073828487169/",
        image: getImgPath('Database_Fts')
    },
}


export default ArticlesList