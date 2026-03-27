import React from 'react';

const AppCard = ({card}) => {
  const {id,title,companyName,image,description,size,downloads,reviews,ratingAvg,ratings} = card
    return (
        
        <section>
            <div >
                <div className='bg-gray-200  flex items-center justify-center rounded-lg'>
                    <img className=" h-48 object-contain" src={image}/>
                    </div>
                <p>{title}</p>
               <div>
                 <span>{downloads}</span>
                <span>{ratingAvg}</span>
               </div>
            </div>
             
        </section>
       
    );
};

export default AppCard;