import PropTypes from 'prop-types';
// import s from './Profile.module.css';
import { ProfileCl, Description, Avatar, Name, Tag } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    // <div className="profile">
    <ProfileCl>
      <Description>
        <Avatar img src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <p className="location">{location}</p>
      </Description>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </ProfileCl>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
