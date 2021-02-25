import React from 'react';
import PropTypes from 'prop-types';

import {useStyles} from './FriendsList.style';


const Friend = ({ avatar, name, status }) => {
  const classes = useStyles();
  return (
    <li className={classes.item}>
      <span className={classes.status} style={{ backgroundColor: status ? "green" : "red" }}></span>
      <img className={classes.avatar} src={avatar} alt={`Avatar ${name}`} width="48" />
      <p className={classes.name}>{name}</p>
    </li>
  );
};

Friend.defaultProps = {
  avatar: "",
};

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
};

export default Friend;