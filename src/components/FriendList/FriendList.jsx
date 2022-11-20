import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListClass } from './FriendList.styled';
import { FriendListItemClass } from '../FriendListItem/FriendListItem.styled';

export const FriendList = ({ friends }) => (
  <FriendListClass>
    {friends.map(friend => (
      <FriendListItemClass key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </FriendListItemClass>
    ))}
  </FriendListClass>
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
