import React from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

const Button = ({ onClick, title, ...other }) => {
  return (
    <button className={cx('button')} type="button" onClick={onClick} {...other}>
      {title}
    </button>
  );
};

export default Button;
