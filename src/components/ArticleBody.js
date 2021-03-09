import React from 'react';
import { article } from '../data/guide';

const ArticleBody = () => {
    const { markup } = article;
    return (
      <React.Fragment>
           
        <main dangerouslySetInnerHTML={{ __html: markup }}></main>
      </React.Fragment>
    );
}
 
export default ArticleBody;