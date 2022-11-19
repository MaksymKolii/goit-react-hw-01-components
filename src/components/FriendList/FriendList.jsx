import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <li className="item" key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      //* Можно не указывать
      // avatar: PropTypes.string.isRequired,
      // name: PropTypes.string.isRequired,
      // isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
