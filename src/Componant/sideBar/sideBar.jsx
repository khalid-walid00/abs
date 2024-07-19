import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Logout from '../checkAuth/index';
import TriStateSwitch from "../alertContainer/index"
import { NavLink } from 'react-router-dom';
import "./style.css"
export default function SideBar({setOpenSideBar,openSideBar}) {


  return (

        <div className='flex z-[99999]  fixed  flex-col'>
        <NavLink className={` duration-100 fixed top-[73px] lg:hidden overflow-hidden right-0 shadow-lg ${openSideBar ? "w-[200px] " : "w-[0px]  "}  text-nowrap px-2  border-t border-white rounded-l-lg my-1  bg-gradient-to-r from-[#11B5EA] to-[#024160] self-center py-5 font-bold text-[14px]`} to='/'>Company Profile</NavLink>
        <NavLink className={` duration-150 fixed top-[143px] lg:hidden overflow-hidden right-0 shadow-lg ${openSideBar ? "w-[200px] " : "w-[0px] "}  text-nowrap  px-2  border-t border-white rounded-l-lg my-1  bg-gradient-to-r from-[#11B5EA] to-[#024160] self-center py-5 font-bold text-[14px]`} to='/about'>About us</NavLink>
        <NavLink className={` duration-200 fixed top-[213px] lg:hidden overflow-hidden right-0 shadow-lg ${openSideBar ? "w-[200px] " : "w-[0px] "}  text-nowrap  px-2  border-t border-white rounded-l-lg my-1  bg-gradient-to-r from-[#11B5EA] to-[#024160] self-center py-5 font-bold text-[14px]`} to='/inspections'>Inspections & Certifications</NavLink>
        <NavLink className={` duration-300 fixed top-[283px] lg:hidden overflow-hidden right-0 shadow-lg ${openSideBar ? "w-[200px] " : "w-[0px] "}  text-nowrap  px-2  border-t border-white rounded-l-lg my-1  bg-gradient-to-r from-[#11B5EA] to-[#024160] self-center py-5 font-bold text-[14px]`} to='/training'>Training</NavLink>
        <NavLink className={` duration-500 fixed top-[353px] lg:hidden overflow-hidden right-0 shadow-lg ${openSideBar ? "w-[200px] " : "w-[0px] "}  text-nowrap  px-2  border-t border-white rounded-l-lg my-1  bg-gradient-to-r from-[#11B5EA] to-[#024160] self-center py-5 font-bold text-[14px]`} to='/approval '>Approvals </NavLink>
        <NavLink className={` duration-700 fixed top-[423px] lg:hidden overflow-hidden right-0 shadow-lg ${openSideBar ? "w-[200px] " : "w-[0px] "}  text-nowrap  px-2  border-t border-white rounded-l-lg my-1  bg-gradient-to-r from-[#11B5EA] to-[#024160] self-center py-5 font-bold text-[14px]`} to='/gallery '>Gallery </NavLink>
        <NavLink className={`duration-1000 fixed top-[493px] lg:hidden overflow-hidden right-0 shadow-lg ${openSideBar ? "w-[200px] " : "w-[0px] "}  text-nowrap px-2  border-t border-white rounded-l-lg my-1  bg-gradient-to-r from-[#11B5EA] to-[#024160] self-center py-5 font-bold text-[14px]`} to='/contact '>Contact us</NavLink>
        <div className={`duration-[1200] fixed top-[493px] lg:hidden overflow-hidden right-0 shadow-lg ${openSideBar ? "w-[200px] " : "w-[0px] "}  text-nowrap px-2  border-t border-white rounded-l-lg my-1  bg-gradient-to-r from-[#11B5EA] to-[#024160] self-center py-5 font-bold text-[14px]`} ><TriStateSwitch label="Language" /></div>
        <div className={`duration-[1300] fixed top-[493px] lg:hidden overflow-hidden right-0 shadow-lg ${openSideBar ? "w-[200px] " : "w-[0px] "}  text-nowrap px-2  border-t border-white rounded-l-lg my-1  bg-gradient-to-r from-[#11B5EA] to-[#024160] self-center py-5 font-bold text-[14px]`} ><Logout label="Language" /></div>
       
        </div>       
     
  );
}
