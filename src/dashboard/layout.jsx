import React from 'react';
import NavBarDash from './navBar';
import SideBarDash from './sideBar';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';

function LayoutDash(props) {
    const { sideBar } = useSelector((state) => state.Toggle);

    return (
    <div className='flex h-full'>
      <div className={` duration-200 transition-all ${sideBar ? 'w-2/12' : 'w-0'}`}>
        <SideBarDash/>
      </div>
      <div className={` duration-200 transition-all ${sideBar ? 'w-10/12' : 'w-full'} z-[999999]`}>
        <NavBarDash/>
        <div className='px-8 py-20 '>
          <Outlet/>
          
        </div>
      </div>
    </div>
  );
}

export default LayoutDash;