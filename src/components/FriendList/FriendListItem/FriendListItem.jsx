import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnLine }) => {
  return (
    <li className={styles.item}>
      <span className={styles.status}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};