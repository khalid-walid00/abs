import React from 'react';
import Links from '../Componant/footer/links';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import Maps from './maps';
import Line from '../Componant/cunstoms/line';
function ContactUs(props) {
    const  links =[
        {
           id:1,
           icon:<LocationOnIcon sx={{color:"#024160"}}/>,
           text:"Arabian Bureau of Services",
           link :"/"
       },{
           id:2,
           icon:<DraftsIcon sx={{color:"#024160"}}/>,
           text:"P.O.Box 47133 - Abu Dhabi",
           link :"/"
       },
       {
           id:3,
           icon:<PhoneInTalkIcon sx={{color:"#024160"}}/>,
           text:"Tel: +971 2 6674166",
           link :"/"
       },
       {
           id:4,
           icon:<EmailIcon sx={{color:"#024160"}}/>,
           text:"Email: abosad@emirates.net.ae",
           link :"/"
       },
    ]
    return (
        <div className=' bg-thirdColor flex  justify-center pt-10 mb-5 pb-2 rounded-[87px] h-max'>
            <div className='lg:w-10/12 w-11/12'>
             <div className=' text-Blueblack font-bold lg:text-[40px] md:text2xl text-xl '>For Enquire & Complaints</div>
             <Links links={links} textSize='32px'/>
            
        <div className='flex justify-center mt-10'>
            <div className='md:w-9/12 w-full'>
            <Maps/>
        </div>
        </div>
        <div className=' my-5'>
        <Line color='#000' type='solid'/>
     </div>
        <div className=' text-Blueblack font-bold lg:text-[40px] md:text2xl text-xl  mt-10'>Certificates</div>
        <Links links={links} textSize='32px'/>
    
      
        <div className='flex justify-center mt-10'>
            <div className='md:w-9/12 w-full'>
            <Maps/>
        </div>
        </div>


        </div>
        </div>
    );
}

export default ContactUs;