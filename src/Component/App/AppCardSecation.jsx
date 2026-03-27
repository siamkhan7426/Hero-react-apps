import React from 'react';
import AppCard from './AppCard';

const AppCardSecation = ({data}) => {
    return (
        <section className='mt-10 w-11/12 mx-auto'>
            
            <div>
                <div className='text-center space-y-4'>
                    <h1 className='text-2xl font-bold'>Trending Apps</h1>
                    <p className='text-gray-300'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                
            </div>
            <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
                {
                   data.slice(0,8).map((card)=><AppCard key={card.id} card={card}></AppCard>)
                }
            </div>
        </section>

    );
};

export default AppCardSecation;