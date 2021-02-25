import React from 'react';

import {useStyles} from './Profile.style';

const Stats = ({ followers, views, likes }) => {
  const classes = useStyles();
  return (
    <ul className={classes.stats}>
      <li className={classes.statsItem}>
        <span className={classes.label}>Followers</span>
        <span className={classes.quantity}>{followers}</span>
      </li>
      <li className={classes.statsItem}>
        <span className={classes.label}>Views</span>
        <span className={classes.quantity}>{views}</span>
      </li>
      <li className={classes.statsItem}>
        <span className={classes.label}>Likes</span>
        <span className={classes.quantity}>{likes}</span>
      </li>
    </ul>
  )
}

Stats.defaultProps = {
  followers: "0",
  views: "0",
  likes: "0",
};

  export default Stats