import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Banner from '../../Section/Banner/Banner';
import AppCardSecation from '../../Component/App/AppCardSecation';
import ShowAllbtn from '../../Component/App/ShowAllBtn/ShowAllbtn';




const Home = () => {
   const data = useLoaderData();
   
    return (
        <main className=' my-4 space-x-4'>
            <Banner/>
            <AppCardSecation data={data}/>
            <ShowAllbtn/>
        </main>
    );
};

export default Home;