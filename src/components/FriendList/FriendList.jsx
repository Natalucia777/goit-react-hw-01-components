import React from "react";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  const { id, avatar, name, isOnline, } = friends;
  return (
    <ul className="friend-list" rey={id}>
      <li className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id:PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};