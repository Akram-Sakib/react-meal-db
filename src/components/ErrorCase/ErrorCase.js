import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorCase = () => {

    const dark = [ 'dark', ];

    return (
      <div>
        {
        dark.map((variant, idx) => (
          <Alert className="text-center" key={idx} variant={variant}>
            <h3>No result Found</h3>
          </Alert>
        ))
        }
      </div>
    );
};

export default ErrorCase;