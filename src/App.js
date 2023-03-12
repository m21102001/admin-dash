import * as React from 'react';
import "./App.css";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrimarySearchAppBar from "./component/navbar/PrimarySearchAppBar";
import Sidebar from './component/Sidebar/Sidebar';
import HomePage from './pages/home/HomePage';
import User from './pages/user/User';


function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <div className='container'>
        <Sidebar className='sidebar' />
        <div className='otherPage'>
          <HomePage className='homePage' />
          <User/>
        </div>
      </div>
    </div>
  );
}

export default App;
