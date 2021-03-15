import { article } from '../data/guide';
import { ReactionIcons } from './ReactionIcons';
import parseEpochDate from '../utils/dateUtils';

const ArticleHeader = () => {
  const { mainImage, title, publishedAt } = article;
  return (
    <div
      style={{
        maxWidth: '1000px',
        paddingTop: '32px',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto 48px auto',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>{title}</h1>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '16px'
        }}
      >
        <div>
          <span>{Date(publishedAt).substring(0, 15)}</span>
        </div>
        <ReactionIcons />
      </div>

      <img src={mainImage} />
    </div>
  );
};

export default ArticleHeader;
