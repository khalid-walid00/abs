import React from 'react';
import ImgAndTitle from '../componants/edits/ImgAndTitle';
import Article from "../componants/edits/Articl/index";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveButton from '../componants/edits/Btn';
function ApprovalDash(props) {

    return (
        <div className="bg-white shadow-custom drop-shadow-lg h-full w-full rounded-[14px] sm:p-8 p-4">
         {/* 1 */}
            <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 justify-items-center lg:px-28 md:px-14 sm:px-12 px-1 mt-10">
                {[1, 2, 3, 4, , 5, 6, 7, 8, 9].map((key, index) => (
                    <ImgAndTitle img={require("../../media/images/about/head.png")} />
                ))} <div className='flex justify-center items-center'>
                    <AddCircleIcon sx={{ color: "#0088b5", cursor: "pointer", fontSize: "50px" }} />
                </div>
            </div>

            {/* 2 */}
            <div className='my-5'>

                <div>
                     <ImgAndTitle img={require("../../media/images/about/head.png")} /></div>
                <div> 
                    <Article
                    text="Industry experts in Testing, Certification, Lifting Equipment & Training Services"
                    editTitle={false}/>
                </div>
            </div>
           

           {/* 3 */}

           <div className="text-center w-full my-5">
      <SaveButton/>
      </div>


        </div>);
}

export default ApprovalDash;