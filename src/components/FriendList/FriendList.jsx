import React from "react";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  const { avatar, name, isOnline, id } = friends;
  return (
    <ul class="friend-list" className={id}>
      <li class="item">
        <span class="status">{isOnline}</span>
        <img class="avatar" src={avatar} alt="User avatar" width="48" />
        <p class="name">{name}</p>
      </li>
    </ul>
  );
};

Profile.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
  }).isRequired,
};