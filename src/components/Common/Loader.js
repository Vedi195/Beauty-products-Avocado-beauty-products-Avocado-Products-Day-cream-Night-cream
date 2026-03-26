import React from 'react';
import './Loader.css';

const Loader = ({ fullPage = false }) => {
  if (fullPage) {
    return (
      <div className="fullPageLoader">
        <div className="loader" />
      </div>
    );
  }

  return (
    <div className="loaderContainer">
      <div className="loader" />
    </div>
  );
};

export default Loader;