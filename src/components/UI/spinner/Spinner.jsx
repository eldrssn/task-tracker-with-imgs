import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './spinner.scss';

const Spinner = () => {

  return (
    <div className="spinner">
      <Loader
        type="Oval"
        color="#000"
        height={30}
        width={30}
      />
    </div>
    
  );
};

export default Spinner;