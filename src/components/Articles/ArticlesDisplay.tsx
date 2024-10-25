import React from 'react';
import '../DisplayItem.css'
import ArticlesList from '../../Data/Articles';
import ContentDisplay from '../ContentDisplay';

export default function ArticlesDisplay() {

    return <div>
        {Object.entries(ArticlesList).map(([articleId, article]) => {


            const { url, description, displayedName } = article

            return (
                <ContentDisplay
                    key={articleId}
                    description={description}
                    url={url}
                    displayedName={displayedName}
                    image={article.image}
                />
            )
        })
        }
    </div>
}