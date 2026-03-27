import React from 'react';
import { Link } from 'react-router';
import Rating from '../../assets/ratings.png';
import Downloading from '../../assets/downloads.png';

const AppCard = ({card}) => {
  const {id,title,companyName,image,description,size,downloads,reviews,ratingAvg,ratings} = card
    return (
        
        <section>
            <Link to={`/app/${id}`} >
                <div className='bg-gray-200  flex items-center justify-center rounded-lg'>
                   <figure>
                     <img className=" h-48 object-cover hover:scale-105 transition-all hover:-rotate-2" src={image}/>
                   </figure>
                    </div>
                <p className='text-sm mt-2'>{title}</p>
               <div className='flex items-center justify-between mt-2'>
                {/* download */}
                 <div className='flex items-center gap-2 bg-[#F1F5E8] px-3 rounded-full text-green-500'>
                  <img className='w-5' src={Downloading}/>
                  <span>{downloads}</span>
                 </div>
                 {/* rating */}
                <div className='flex items-center gap-2 bg-[#FFF0E1] text-amber-400 px-3 rounded-full'>
                   <img className='w-5' src={Rating}/>
                  <span>{ratingAvg}</span>
                </div>
               </div>
            </Link>
             
        </section>
       
    );
};

export default AppCard;