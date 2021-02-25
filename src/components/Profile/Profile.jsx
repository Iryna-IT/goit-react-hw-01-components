import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import {useStyles} from './Profile.style';



const Profile = ({ name, tag, location, avatar, stats }) => {
  const classes = useStyles();
  return (
    <div className={classes.profile}>

      <div className={classes.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={classes.avatar}
        />
        <p className={classes.name}>{name}</p>
        <p className={classes.tag}>@{tag}</p>
        <p className={classes.location}>{location}</p>
      </div>
      
      <Stats {...stats} />
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};



export default Profile;