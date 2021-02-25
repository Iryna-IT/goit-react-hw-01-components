import React from 'react';
import PropTypes from 'prop-types';

import {useStyles} from './Statistics.style';

import StatListItem from './StatListItem';



const StatList = ({ stats }) => {
  const classes = useStyles();
  return (
    <ul className={classes.statList} >
      {stats.map((item) => (
        <StatListItem key={item.id} label={item.label} percentage={item.percentage} />
      ))}
    </ul>
  )
};

StatList.defaultProps = {
  stats: [],
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    }),
  ),
};

export default StatList;