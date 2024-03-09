import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loader: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loader;
