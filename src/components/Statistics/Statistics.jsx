// import React from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
// import { startTransition } from "react";

const colors = ['#00BFFF', '#6900C6', '#FF0000', '#00FF00', '#FFFF00'];
export const Statistics = ({ title, stats }) => {
  // const { title, stats } = data;
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }, colorId) => (
          <li className={styles.item} key={id} style={{ background: colors[colorId] }}> 
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}</span>
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
