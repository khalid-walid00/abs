import React from "react";
import { Button } from "@mui/material";
import ImgAndTitle from "../componants/edits/ImgAndTitle/index";
import Article from "../componants/edits/Articl/index";
import SaveButton from "../componants/edits/Btn";

export default function ProfileDash(props) {
  
  return (
    <div className="bg-white shadow-custom drop-shadow-lg h-full w-full rounded-[14px] md:p-8 p-4">
      <div className="flex md:flex-row flex-col items-center md:items-start md:justify-between gap-8">
        <div className="md:w-7/12">
          <ImgAndTitle img={require('../../media/images/home/Home1.png')} />
        </div>
        <div className="md:w-5/12 w-full">
          <Article
            title="Main title"
            text="Industry experts in Testing, Certification, Lifting Equipment & Training Services"
            editTitle={false}
          />
        </div>
      </div>

      {/* 2 */}
      <div className="my-14">
        <Article
            rows={5}
          editTitle={true}
          title="Company profile"
          text="Arabian Bureau of Services established in 1993 as a 3rd party inspection company for the thorough examination of Lifting Appliances, Lifting Gears, Earthmoving Machineries, Industrial Trucks & QHSE training and consultancy. During this period, ABoS had grown and expanded in the U.A.E market and established a high strength relationship among its customers whose trust by its judgment. Our judgment against any equipment, machine, or accessory gear gives priority to preventing equipment, machine, accessory gear, operators, labors, environment, and property from any accident, deterioration, damage, harm, fatal injuries, or death. For more than two decades of operations, ABoS has gained much experience in the UAE and has preserved its commitment to provide quality inspection service to all our clients. Qualified and experienced staffs were retained to ensure continuity of quality inspection & training services."
          
        />
      </div>

      {/* 3 */}
      <div className="flex md:flex-row flex-col items-center md:items-start md:justify-between gap-8">
        <div className="md:w-3/12 w-9/12">
          <ImgAndTitle img={require('../../media/images/home/section3.1.png')} imgTitle={<div className="font-bold text-BlueDark text-lg">Organization</div>} />
        </div>
        <div className="md:w-9/12  w-full">
          <Article
            rows={5}
            title="Main title"
            text="ABoS is continually maintaining a highly qualified inspection and consultancy team, employing the latest technical expertise and paraphernalia, stressing utmost importance in safety, environment, quality, and timely completion task, and complying with all local & international regulations. ABoS is providing inspection services according to proven methods for inspection based on guidelines and Standard Operating Procedure. The Inspection and consultancy team is well organized by our Technical Manager & Training Manager and doing the task as per his authorization."
            editTitle={false}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-4 my-20">
        {[...Array(4)].map((_, index) => (
          <div key={index}>
           <div> <ImgAndTitle img={require('../../media/images/home/section3.1.png')} imgTitle={<div className="font-bold text-BlueDark text-lg">Organization</div>} />
            </div><Article
            rows={15}
              title="Main title"
              text="ABoS is continually maintaining a highly qualified inspection and consultancy team, employing the latest technical expertise and paraphernalia, stressing utmost importance in safety, environment, quality, and timely completion task, and complying with all local & international regulations. ABoS is providing inspection services according to proven methods for inspection based on guidelines and Standard Operating Procedure. The Inspection and consultancy team is well organized by our Technical Manager & Training Manager and doing the task as per his authorization."
              editTitle={false}
            />
          </div>
        ))}
      </div>
      <div className="text-center w-full">
      <SaveButton/>
      </div>
    </div>
  );
}
