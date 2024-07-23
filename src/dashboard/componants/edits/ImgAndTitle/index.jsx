import React from 'react';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import ModeEditTwoToneIcon from "@mui/icons-material/ModeEditTwoTone";

function ImgAndTitle({imgTitle,img ,EditColor="white"}) {
    return (
        <div className=' relative w-full h-full flex flex-col gap-2'>
            <div className=' absolute bottom-10 right-5'><ModeEditTwoToneIcon sx={{ color: EditColor,border:`2px solid ${EditColor}` ,borderRadius:"20px",cursor:"pointer"}} /></div>
            
        <img className=' w-full' src={img} alt="icon" />
        { imgTitle&&<div className={`flex ${imgTitle ?"justify-between" : "justify-end"} `}>{imgTitle}<BorderColorTwoToneIcon sx={{color:"#606060",cursor:"pointer"}}/></div>}
    </div>
    );
}

export default ImgAndTitle;