import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './error-popup.module.scss';
import TIMEOUT_DELAY from './constants';

const cx = classNames.bind(styles);

const ErrorPopup = ({ errorMessage }) => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(false);
    }, TIMEOUT_DELAY);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const popup = (
    <div className={cx('wrapper')}>
      <p>{errorMessage}</p>
    </div>
  );

  return showPopup ? popup : null;
};

export default ErrorPopup;
