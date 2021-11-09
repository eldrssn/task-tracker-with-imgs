import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => {

  return (
    <div className="loader">
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