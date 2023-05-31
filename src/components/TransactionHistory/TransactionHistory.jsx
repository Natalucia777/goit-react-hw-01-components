import React from "react";
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  const { id, type, amount, currency } = transactions;
  return (
    <table class="transaction-history">
      <thead>
        <tr>{ id }
          <th>Type { type }</th>
          <th>Amount { amount }</th>
          <th>Currency { currency }</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
};

Profile.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};