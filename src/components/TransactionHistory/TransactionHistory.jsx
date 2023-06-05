// import React from "react";
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';


export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.title}>Type </th>
          <th className={styles.title}>Amount </th>
          <th className={styles.title}>Currency </th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
            <tr className={styles.line} key={id}>
            <td className={styles.quantity}>{type}</td>
            <td className={styles.quantity}>{amount}</td>
            <td className={styles.quantity}>{currency}</td>
            </tr>
        ))}
            
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};