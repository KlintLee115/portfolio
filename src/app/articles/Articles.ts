import { ContentType } from "@/types/types";

const ArticlesList: { [key: string]: Omit<ContentType, 'image'> } = {
    
    'Database_Fts': {
        displayedName: 'Improving text search in relational databases',
        description: "This article goes through the basics of database indexes, and why common text searching methods like %{searchterm}% may be suboptimal. \n And finally, it talks about the solution to these problems with a benchmark result.",
        url: "https://www.linkedin.com/pulse/speeding-up-database-text-searches-klint-lee-gyk2c/?trackingId=Iurdu%2FgSS3SgcSqwicy1yQ%3D%3D",
    },
    'Locks_To_MVcc': {
        displayedName: 'From Locks to MVCC: Enhancing Performance in ACID-Compliant Databases',
        description: "This article talks about ACID in databases, and how locks and MVCC differ in performance and other aspects with a benchmark result.",
        url: "https://www.linkedin.com/pulse/speeding-up-database-text-searches-klint-lee-gyk2c/?trackingId=Iurdu%2FgSS3SgcSqwicy1yQ%3D%3D",
    },
    'Reversed_Tetris': {
        displayedName: 'Reversed Tetris',
        description: "This article is about how I planned my Reversed Tetris game, including the multiplayer mode and game mechanism.",
        url: "https://www.linkedin.com/pulse/reversed-tetris-project-klint-lee-7bfrc/?trackingId=f7AYbfFKQxuCuzkBPCWtiw%3D%3D",
    },
    'GQL_Caching': {
        displayedName: 'What I learned about GQL caching ( GraphQL )',
        description: "This article talks about my experience with GraphQL caching, discussing its complexities and weaknesses and why they are important to the brilliance of this technology.",
        url: "https://www.linkedin.com/pulse/what-i-learned-gql-caching-graphql-klint-lee-lx4sc/?trackingId=ysJ7GpWPT%2BOiZhDG7%2B0xjg%3D%3D",
    },
}


export default ArticlesList