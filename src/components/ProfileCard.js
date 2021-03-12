import { article } from '../data/guide';

const ProfileCard = () => {
    const { profile } = article;
    return (
      <aside>
        <a href="#">
          <img src={profile.avatar} />
        </a>
            <a>@{profile.handle}</a>
            <p>{profile.displayName}</p>
            <p>{profile.bio}</p>
      </aside>
    );
}
 
export default ProfileCard;