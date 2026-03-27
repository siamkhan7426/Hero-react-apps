import React from 'react';
 import { useRouteError } from 'react-router';

const Error = () =>  {
    const error = useRouteError();
    return (
      
    <div className="text-center mt-10">
      <h1 className="text-red-500 text-2xl">Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
    );
};


export default Error;