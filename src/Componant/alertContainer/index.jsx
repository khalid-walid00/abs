import React from 'react';

function AlertContainer({img,doc,title1,title2,className ,holder}) {
    return (
        <div className={` rounded-[40px]   lg:p-5 flex lg:flex-row p-2 flex-col items-center relative ${className}`}>
      { (img||title1)  &&<div className="lg:absolute flex flex-col justify-around -left-20 xl:top-12 2xl:top-5 lg:top-16 top-1/2 rounded-[20px] 
        bg-secoundColor40 items-center w-full lg:w-[167px] lg:h-[167px] h-[100px]">
          <img
            className="lg:w-12 w-8 text-darkBlue"
            src={img}
            alt=''
          />
          <div className=" flex flex-col">
            <span className="lg:text-[24px] text-lg font-bold text-center text-darkBlue">
            {title1}
            </span>
            <span className="lg:text-[24px] text-lg font-bold text-center text-darkBlue">
            {title2}
            </span>
          </div>
        </div>}
        <div className={`${(img||title1) ? 'lg:ps-20' : ''} content-center`}>
          <span className=" text-darkBlue font-bold">
          {holder} 
          </span>
        {doc}
        </div>
      </div>
    );
}

export default AlertContainer;