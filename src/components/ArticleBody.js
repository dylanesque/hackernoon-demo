

import React from 'react';
import { article } from '../data/guide';
import ProfileCard from '../components/ProfileCard'

const ArticleBody = () => {
  const { markup } = article;
  return (
      <div className="article-body">
        <ProfileCard />
        <main dangerouslySetInnerHTML={{ __html: markup }}></main>
      </div>
  );
};

export default ArticleBody;
