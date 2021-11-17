import React from 'react';
import Loader from 'react-loader-spinner';
import classNames from 'classnames/bind';
import styles from './spinner.module.scss';

const cx = classNames.bind(styles);

const Spinner = () => {
  return (
    <div className={cx('spinner')}>
      <Loader type="Oval" color="#000" height={30} width={30} />
    </div>
  );
};

export default Spinner;
