import React from "react";
import PropTypes from 'prop-types';

const colors = ['#00BFFF', '#6900C6', '#FF0000', '#00FF00', '#FFFF00'];
export const Statistics = ({ data }) => {
   const { title, stats } = data;
  return (
        <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map(({ id, label, percentage }, colorId) => (
          <li class="item" key={id} style={{ background: colors[colorId] }}> 
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
