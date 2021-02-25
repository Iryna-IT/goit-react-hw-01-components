import React from 'react';
import PropTypes from 'prop-types';

import {useStyles} from './Statistics.style';

import StatList from './StatList';



const Statistics = ({ title, stats }) => {
  const classes = useStyles();
  return (
    <section className={classes.statistics}>
      {{ title } !== "" && <h2 className={classes.title}>{title}</h2>}
      
      <StatList stats={stats} />

    </section>
  );

// Тернарный оператор
// {title}!=="" ? 
// <section className="statistics">
// <h2 className="title">{title}</h2>
// <StatList stats={stats}/>
// </section> : 
// <section className="statistics">
// <StatList stats={stats}/>
// </section>
};


Statistics.defaultProps  = {
  title: "",
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics