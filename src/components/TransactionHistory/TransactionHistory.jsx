import React from "react";
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  const { id, type, amount, currency } = transactions;
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type </th>
          <th>Amount </th>
          <th>Currency </th>
        </tr>
      </thead>

      <tbody>
        <tr key={id}>
          <td>{ type }</td>
          <td>{ amount }</td>
          <td>{ currency }</td>
        </tr>
      </tbody>
    </table>
  );
};

Profile.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};