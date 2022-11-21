import PropTypes from 'prop-types';
import { Status, FriendName, Avatar } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <Status isOn={isOnline}></Status>
    <Avatar src={avatar} alt={name} width="48" />
    <FriendName>{name}</FriendName>
  </>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
