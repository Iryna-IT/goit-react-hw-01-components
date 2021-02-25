import React from 'react';
import PropTypes from 'prop-types';

import {useStyles} from './Statistics.style';

const getBgColor = () =>
  `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

const StatListItem = ({ label, percentage }) => {
  const classes = useStyles();
  return (
    <li className={classes.item} style={{ backgroundColor: getBgColor(), }}>
      <span className={classes.label}>{label}</span>
      <span className={classes.percentage}>{percentage}%</span>
    </li>
  );
};

StatListItem.defaultProps = {
  percentage: "0",
};

StatListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number,
};

export default StatListItem;