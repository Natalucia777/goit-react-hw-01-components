import React from "react";
import PropTypes from 'prop-types';
// import { startTransition } from "react";

const colors = ['#00BFFF', '#6900C6', '#FF0000', '#00FF00', '#FFFF00'];
export const Statistics = ({ title, stats }) => {
  // const { title, stats } = data;
  return (
        <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }, colorId) => (
          <li className="item" key={id} style={{ background: colors[colorId] }}> 
          <span className="label">{label}</span>
          <span className="percentage">{percentage}</span>
        </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
