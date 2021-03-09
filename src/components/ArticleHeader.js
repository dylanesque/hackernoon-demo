import { article } from "../data/guide";
import parseEpochDate from '../utils/dateUtils';

const ArticleHeader = () => {
    const { mainImage, title, publishedAt } = article;
    return (
      <div>
            <h1>{title}</h1>
            <div>
                <span>{Date(publishedAt)}</span>
                <img src={mainImage} />
            </div>
      </div>
    );
}
 
export default ArticleHeader;