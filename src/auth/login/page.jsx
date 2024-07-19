import React from 'react';
import FieildInput from '../../Componant/cunstoms/inputs/fieild';
import EmailIcon from '@mui/icons-material/Email';
import SoildBtn from '../../Componant/cunstoms/buttoms/soildBtn';
import OutlineBtn from '../../Componant/cunstoms/buttoms/outlineBtn';
import LockIcon from '@mui/icons-material/Lock';
function Login(props) {
    return (
        <div className='bg-white h-screen overflow-hidden'>
            <div className=' bg-white shadow-xl h-full rounded-xl flex justify-between'>
              <div className=' bg-white w-1/4 border-r border-secoundColor h-full justify-center items-center flex'>
               <div className='w-11/12'>
               <img src={require('../../media/images/logo.png')}/>
               <div className=' text-grayBlue text-center font-[600]'>Login into your account</div>
               <form>
               <div className='mt-7'>
               <FieildInput label="Email address" placeholder="Arabian Bureau@gmail.com" type="email" icon={<EmailIcon/>}/>
               </div>
               <div className='mt-7'>
               <FieildInput label="Password" placeholder="Enter your password" type="password" icon={<LockIcon/>}/>
               </div>
               <div className='text-end text-purple my-2 underline underline-offset-4'>Forgot password?</div>
              <div className='my-5'>
              <SoildBtn className="w-full shadow-[#FD7401]" text="Login"/>
              </div>
              <div className='my-7 flex items-center gap-4'>
                <div className='border-b h-0 border-whiteGray w-5/12 flex'></div>
                <div className='text-whiteGray text-sm'>OR</div>
                <div className='border-b h-0 border-whiteGray w-5/12 flex'></div>
              </div>
              <div>
              <OutlineBtn className="w-full shadow-lg " text="Signup now"/>
              </div>
               </form>
               </div>
              </div>
              <div className='w-3/4 relative h-full bg-grayWhite flex justify-center items-center'>
              <img className='w-[638px] h-[638px]' src={require('../../media/images/login/login.png')}/>
              <div className='w-[606px] blur-2xl opacity-55 -right-[22.25rem] h-[360px] rotate-90 rounded-full bg-secoundColor absolute'></div>
              </div>
            </div>
            
        </div>
    );
}

export default Login;