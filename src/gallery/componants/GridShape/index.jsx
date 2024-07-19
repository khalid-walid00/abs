import React from 'react';

function GridShape({dataHeader}) {
    return (
     
        <div className=' grid md:grid-cols-2 grid-rows gap-4'>
        { dataHeader.map((item, index) => (
            <>
         <div  className=' flex flex-col justify-center items-center'>
             <img className='h-[500px] ' alt="icon" src={item.img}/>
            <div className=' mt-5 text-center font-bold text-[20px]  '>{item.text}</div>
         </div>
          </>
            ))}
         </div> 

    );
}

export default GridShape;