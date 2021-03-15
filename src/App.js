import ArticleBody from './components/ArticleBody';
import ArticleHeader from './components/ArticleHeader';
import FlexContainer from './components/FlexContainer';
import HRHeading from './components/HRHeading';
import RelatedStory from './components/RelatedStory';
import SocialShareIcons from './components/SocialShareIcons';
import Tag from './components/Tag';
import { article } from './data/guide';

function App() {
  const { relatedStories, tags } = article;
  return (
    <div>
      <ArticleHeader />
      <ArticleBody />
      <SocialShareIcons />
      <HRHeading heading="RELATED" />
      <FlexContainer>
        {relatedStories.map((story) => {
          return (
            <RelatedStory
              key={story.id}
              title={story.title}
              mainImage={story.mainImage}
            />
          );
        })}
      </FlexContainer>

      <HRHeading heading="TAGS" />
      <FlexContainer>
        {tags.map((tag) => {
          return (
            <Tag key={tag} tag={tag}/>
          )
        })}
      </FlexContainer>
    </div>
  );
}

export default App;
