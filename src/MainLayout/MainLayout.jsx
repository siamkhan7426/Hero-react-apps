import React from 'react';
import Footer from '../Component/Footer/Footer';
import Navber from '../Component/Navber/Navber';
import { Outlet, useNavigation } from 'react-router';
import Spinner from '../Pages/Spinner/Spinner';

const MainLayout = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Navber/>
            {navigation.state === "loading" && <Spinner/>}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;