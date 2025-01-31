import React from "react";
import ImgAndTitle from "../componants/edits/ImgAndTitle/index";
import Article from "../componants/edits/Articl/index";
import SaveButton from "../componants/edits/Btn";
function AboutDash(props) {
  return (
    <div className="bg-white shadow-custom drop-shadow-lg h-full w-full rounded-[14px] md:p-8 p-4">
      {/* section 1 */}
      <div className=" flex md:flex-row flex-col-reverse  justify-between gap-12">
        <div className=" md:w-1/3">
          <Article
            rows={15}
            title="Company profile"
            text="Quality & sustainable life style is essential part of our life. To Ensure the same perfection & unique decision are very important. The current industry is required the quality & certification on everything which ever we dealt with it.
            With the above idea Arabian Bureau of Services established on 1993 to ensure the quality & impartial inspection as well as the effective training services for its customer. The team is well organized to ensure its services providing to the customer effectively & most efficiently.
            We registered with all the major oil companies which is providing the services to the nation...."
            editTitle={false}
          />
        </div>
        <div className=" md:w-2/3">
          <ImgAndTitle img={require("../../media/images/about/head.png")} />
        </div>
      </div>

      {/* section 2 */}

      <div className=" flex sm:flex-row flex-col items-center sm:items-start justify-between my-10">
        <div className=" sm:w-1/5 w-4/5">
          <ImgAndTitle
            EditColor="black"
            img={require("../../media/images/about/manager.png")}
          />
        </div>
        <div className="sm:w-3/5 w-full">
          <Article
            rows={8}
            title="Company profile"
            text="Quality & sustainable life style is essential part of our life. To Ensure the same perfection & unique decision are very important. The current industry is required the quality & certification on everything which ever we dealt with it.
            With the above idea Arabian Bureau of Services established on 1993 to ensure the quality & impartial inspection as well as the effective training services for its customer. The team is well organized to ensure its services providing to the customer effectively & most efficiently.
            We registered with all the major oil companies which is providing the services to the nation...."
            editTitle={false}
          />
        </div>
      </div>


      {/* section 3  */}

      <div>
      <Article
      
            rows={8}
            title="Impartiality"
            text="Quality & sustainable life style is essential part of our life. To Ensure the same perfection & unique decision are very important. The current industry is required the quality & certification on everything which ever we dealt with it.
            With the above idea Arabian Bureau of Services established on 1993 to ensure the quality & impartial inspection as well as the effective training services for its customer. The team is well organized to ensure its services providing to the customer effectively & most efficiently.
            We registered with all the major oil companies which is providing the services to the nation...."
            editTitle={true}
          />

      </div>


    {/* section 4 */}
    <div className=" flex md:flex-row flex-col-reverse items-center md:items-start justify-between">

     <div  className=" md:w-7/12 w-full">
     {[...Array(8)].map((_, index) => (<ul>
        <li> <Article title={<div className=" text-[12px]">Impartiality {index + 1}</div>} rows={1}/></li>
     </ul>))}
     </div>
     <div className=" md:w-5/12 w-8/12">
     <ImgAndTitle
            EditColor="black"
            img={require("../../media/images/about/loader.png")}
          />
     </div>
    </div>

{/* section 5 */}
<div className="text-center w-full my-5">
      <SaveButton/>
      </div>

    </div>
  );
}

export default AboutDash;
