import { article } from '../data/guide';

const ProfileCard = () => {
  const { profile } = article;
  return (
    <div style={{ maxWidth: '80px', fontSize: '14px', marginLeft: '-8px' }}>
      <aside>
        <a href="#">
          <img style={{ width: '50px', height: '50px' }} src={profile.avatar} />
        </a>
        <a>@{profile.handle}</a>
        <p>{profile.displayName}</p>
        <p>{profile.bio}</p>
      </aside>
    </div>
  );
};

export default ProfileCard;
