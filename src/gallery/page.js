import React from 'react';
import GridShape from './componants/GridShape';
import Links from '../Componant/footer/links';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
function Gallary(props) {
    const dataHeader = [{
        id: 1,
        img: require('../media/images/gallary/header1.png'),
        text: 'ADNOC Vessel mid ship crane load testing',
    },
    {
        id: 2,
        img: require('../media/images/gallary/header2.png'),
        text: 'ADNOC Vessel mid ship crane load testing',
    }

]
const datafooter = [{
    id: 1,
    img: require('../media/images/gallary/footer1.png'),
    text: 'ADNOC Vessel mid ship crane load testing',
},
{
    id: 2,
    img: require('../media/images/gallary/footer2.png'),
    text: 'ADNOC Vessel mid ship crane load testing',
}

]
const  links =[
    {
       id:1,
       icon:<LocationOnIcon sx={{color:"#203908"}}/>,
       text:"Arabian Bureau of Services",
       link :"/"
   },{
       id:2,
       icon:<DraftsIcon sx={{color:"#203908"}}/>,
       text:"P.O.Box 47133 - Musaffah",
       link :"/"
   },
   {
       id:3,
       icon:<PhoneInTalkIcon sx={{color:"#203908"}}/>,
       text:"Tel: +971 2 5511520",
       link :"/"
   },
   {
       id:4,
       icon:<EmailIcon sx={{color:"#203908"}}/>,
       text:"Email: abos@abosad.com",
       link :"/"
   },

]
    return (
       <> <div  className=' flex justify-center h-max pt-12 pb-5 bg-thirdColor rounded-[87px]'>
            <div className='w-11/12 lg:w-10/12'>
           
            <GridShape dataHeader={dataHeader}/>



      <div className='mt-10'>
      <img className=' w-full h-[500px] rounded-[77px]' alt="icon" src={require('../media/images/gallary/middel.png')}/>

      </div>


            </div>
        </div>
        
        
         <div className=' flex relative top-24   justify-center'>
        <div className='w-10/12 '>
        <div className='flex justify-center'>
        <div className='w-10/12 font-bold text-[20px] mb-10 '>Arena trusses  load tested in MENA region</div></div>
        <GridShape dataHeader={datafooter}/>

        </div>
         </div>


         <div className='lg:h-[250px] h-[280px] md:h-[350px] flex justify-center bg-thirdColor rounded-t-[87px] '>
         
       <div className='flex sm:flex-row flex-col gap-3 lg:w-9/12 lg:justify-between justify-end items-end  h-full'>
        
         <div className=' lg:text-[40px] md:text-2xl text-xl sm:block flex  font-bold text-start self-end'>
         <div>For Testing</div>
         <div>Please Contact us</div>
         </div>
         
         <div className=' text-[40px] font-bold text-center ps-2 lg:w-5/12 border-l border-darkBlue self-end'>
         <Links links={links} className="text-lg"/>
         </div>


       </div>

         </div>
        </>
    );
}

export default Gallary;