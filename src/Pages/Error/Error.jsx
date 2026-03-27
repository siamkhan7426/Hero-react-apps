import React from 'react';
 import { useRouteError } from 'react-router';
import ErrorImg from '../../assets/error-404.png'
import { Link } from 'react-router';
const Error = () =>  {
    const error = useRouteError();
    return (
    <div className="text-center mt-10">
     <div className="w-full flex justify-center items-center mb-4"> <img  src={ErrorImg} /></div>
      <h1 className="font-bold text-2xl">Oops, page not found!</h1>
      <p >The page you are looking for is not available.</p>
      <Link to="/"> <div  className='flex justify-center items-center mt-8'>
            <button className='btn flex items-center gap-2 px-5 py-2 rounded-lg 
                             bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                    text-white font-semibold shadow-md hover:opacity-90 transition'>
                Go Back!
            </button>
        </div>
        </Link>
      <p>{error?.message}</p>
    </div>
    );
};


export default Error;