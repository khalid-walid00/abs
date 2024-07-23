import React from 'react';
import ImgAndTitle from '../componants/edits/ImgAndTitle';
import SaveButton from '../componants/edits/Btn';
import Article from "../componants/edits/Articl/index";

function ContactUsDash(props) {
    return (
        <div className="bg-white shadow-custom drop-shadow-lg h-full w-full rounded-[14px]  sm:p-8 px-4">
    <div  className=" sm:w-4/12">
     {[...Array(4)].map((_, index) => (<ul>
        <li> <Article title={<div className=" text-[12px]">Impartiality {index + 1}</div>} rows={1}/></li>
     </ul>))}
     </div>

     <div  className="  sm:w-4/12 my-10">
     {[...Array(4)].map((_, index) => (<ul>
        <li> <Article title={<div className=" text-[12px]">Impartiality {index + 1}</div>} rows={1}/></li>
     </ul>))}
     </div>
        <div className="text-center w-full">
            <SaveButton />
        </div>
    </div>
    );
}

export default ContactUsDash;