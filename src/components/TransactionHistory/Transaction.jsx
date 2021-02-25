import React from 'react';
import PropTypes from 'prop-types';

import {useStyles} from './TransactionHistory.style';


const Transaction = ({ type, amount, currency }) => {
  const classes = useStyles();
  return (
    <tr className={classes.tr}>
      <td className={classes.td}>{type}</td>
      <td className={classes.td}>{amount}</td>
      <td className={classes.td}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;

 