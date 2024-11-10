import React from 'react';
import '../DisplayItem.css'
import ArticlesList from '../../Data/Articles';
import ContentDisplay from '@/components/ContentDisplay';

export default function () {

    return <div>
        {Object.entries(ArticlesList).map(([articleId, article]) => {


            const { url, description, displayedName } = article

            return (
                <ContentDisplay
                    key={articleId}
                    description={description}
                    url={url}
                    displayedName={displayedName}
                    image={getImgPath(articleId)}
                />
            )
        })
        }
    </div>
}

function getImgPath(imgName: string) {
    return `/ArticlePics/${imgName}.png`
}