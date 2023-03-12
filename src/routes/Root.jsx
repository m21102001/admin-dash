import React from 'react';
import "../App.css";
import { Outlet } from 'react-router-dom';
import PrimarySearchAppBar from "../component/navbar/PrimarySearchAppBar";
import Sidebar from '../component/Sidebar/Sidebar';

const Root = () => {


    return (
        <div>
            <PrimarySearchAppBar />
            <div className='container'>
                <Sidebar className='sidebar' />
                <div className='otherPage'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Root