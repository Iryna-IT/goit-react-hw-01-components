import React from 'react';
import PropTypes from 'prop-types';

import {useStyles} from './FriendsList.style';

import Friend from './Friend';

const FriendsList = ({friends}) => {
  const classes = useStyles();
  return (
    <ul className={classes.friendsList} >
      {friends.map((friend) => (
        <Friend key={friend.id} avatar={friend.avatar} name={friend.name} status={friend.isOnline} />
      ))}
    </ul>
  )
};
  
FriendsList.defaultProps = {
  friends: [],
  avatar: "",
};
  
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
    }),
  ),
};

export default FriendsList