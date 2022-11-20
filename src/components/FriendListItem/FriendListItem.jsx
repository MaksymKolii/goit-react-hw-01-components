import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Status, FriendName, Avatar } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <Fragment>
    <Status on={isOnline.toString()}></Status>
    <Avatar src={avatar} alt={name} width="48" />
    <FriendName>{name}</FriendName>
  </Fragment>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
