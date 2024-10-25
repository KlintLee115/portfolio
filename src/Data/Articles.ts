import { ContentType } from "@/types/types";

function getImgPath(imgName: string) {
    return `/ArticlePics/${imgName}.png`
}

const ArticlesList: { [key: string]: ContentType } = {
    'Reversed_Tetris': {
        displayedName: 'Reversed Tetris',
        description: "This article is about how I planned my Reversed Tetris game, including the multiplayer mode and game mechanism.",
        url: "https://www.linkedin.com/pulse/reversed-tetris-project-klint-lee-7bfrc/?trackingId=f7AYbfFKQxuCuzkBPCWtiw%3D%3D",
        image: getImgPath('Reversed_Tetris')
    },
    'Database_Fts': {
        displayedName: 'Improving text search in relational databases',
        description: "This article goes through the basics of database indexes, and why common text searching methods like %{searchterm}% may be suboptimal. \n And finally, it talks about the solution to these problems with a benchmark result.",
        url: "https://www.linkedin.com/pulse/speeding-up-database-text-searches-klint-lee-gyk2c/?trackingId=Iurdu%2FgSS3SgcSqwicy1yQ%3D%3D",
        image: getImgPath('Database_Fts')
    },
}


export default ArticlesList