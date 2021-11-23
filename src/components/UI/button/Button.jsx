import React from 'react';
import styles from './Button.module.scss';

export const Button = ({ onClick, title, ...other }) => {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={onClick}
      {...other}
    >
      {title}
    </button>
  );
};
