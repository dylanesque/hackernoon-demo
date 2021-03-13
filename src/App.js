import ArticleBody from './components/ArticleBody';
import ArticleHeader from './components/ArticleHeader';
import HRHeading from './components/HRHeading';
import RelatedStory from './components/RelatedStory';
import SocialShareIcons from './components/SocialShareIcons';
import { article } from './data/guide';


function App() {
  const { relatedStories } = article;
  return (
    <div>
      <ArticleHeader />
      <ArticleBody />
      <SocialShareIcons />
      <HRHeading heading="RELATED" />
      {relatedStories.map((story) => {
        return <RelatedStory companyName={story.title} />;
      })}
      <HRHeading heading="TAGS" />
    </div>
  );
}

export default App;
