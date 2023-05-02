import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';

const AccountLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-567px)]'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default AccountLayout;