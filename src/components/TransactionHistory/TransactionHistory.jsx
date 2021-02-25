import React from 'react';
import PropTypes from 'prop-types';

import {useStyles} from './TransactionHistory.style';

import Transaction from './Transaction';

const TransactionHistory = ({ items }) => {
  const classes = useStyles();
  return (
    <table className={classes.transactionHistory}>
      <thead className={classes.thead}>
        <tr className={classes.tr}>
          <th className={classes.th}>Type</th>
          <th className={classes.th}>Amount</th>
          <th className={classes.th}>Currency</th>
        </tr>
      </thead>
      
      <tbody className={classes.tbody}>
        {items.map((transaction) => (
          <Transaction key={transaction.id} type={transaction.type} amount={transaction.amount} currency={transaction.currency} />
        ))}
      </tbody>
    </table>
  )
};
  
TransactionHistory.defaultProps = {
  items: [],
};
  
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    }),
  ),
};

export default TransactionHistory