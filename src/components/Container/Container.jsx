import PropTypes from 'prop-types';
import stiles from './Container.module.css';

export const Container = ({ children }) => {
  return <div className={stiles.container}> {children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
};