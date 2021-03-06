import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1>
        <span className="text-danger">404</span> Not Found
      </h1>
      <p className="lead">The page you are looking for does not exist.</p>
    </Fragment>
  );
};

export default NotFound;
