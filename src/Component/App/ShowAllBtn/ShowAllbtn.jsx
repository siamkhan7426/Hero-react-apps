import React from 'react';
import { Link } from 'react-router';

const ShowAllbtn = () => {
    return (
        <Link to="/apps">
            <div  className='flex justify-center items-center mt-8'>
            <button className='btn flex items-center gap-2 px-5 py-2 rounded-lg 
                             bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                    text-white font-semibold shadow-md hover:opacity-90 transition'>
                Show All
            </button>
        </div>
        </Link>
    );
};

export default ShowAllbtn;