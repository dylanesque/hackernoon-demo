

import React from 'react';
import { article } from '../data/guide';
import ProfileCard from '../components/ProfileCard'

const ArticleBody = () => {
  const { markup } = article;
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ProfileCard />
      <div className="article-body">
        <main dangerouslySetInnerHTML={{ __html: markup }}></main>
      </div>
    </div>
  );
};

export default ArticleBody;
