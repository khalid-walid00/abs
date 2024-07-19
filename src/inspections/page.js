import React from "react";
import AlertContainer from "../Componant/alertContainer";
import FooterPage from "../Componant/footPage";

function Inspections(props) {
  const lists = [
{
  id: 1,
  items:["Pressure Equipment’s",
"Fall Protection",
"Electrical Equipment’s & Power Actuated Tools (PAT) Testing",
"Local Exhaust Ventilation (LEV) systems",
"Cranes & Lifting Equipment and Accessories",]
},
{
    id: 1,
    items:["Elevators & Escalators",
"Plant and Machinery",
"Access Equipment and MEWPS",
"Scaffolding & Working Platforms"]
  }
];


return (
    <>
      <section className=" overflow-x-hidden section1">
        <div className=" h-max bg-thirdColor flex justify-center rounded-[87px]">
          <div className=" w-11/12 ">
            <div className=" relative">
              <img
                className=""
                alt="icon"
                src={require("../media/images/inspections/header.png")}
              />
              <img
                className="w-[120px] h-[65px] absolute top-4 right-0"
                alt="icon"
                src={require("../media/images/dots.png")}
              />
              <div className=" w-[35rem] absolute top-8 left-10 text-white font-bold lg:text-[40px] md:text-2xl text-lg sm:text-xl xl:text-[40px] 2xl:text-[40px] ">
                INDUSTRY EXPERTS IN KEEPING OUR CUSTOMERS SAFE & COMPLIANT
              </div>
            </div>
            <div className=" flex justify-center relative -top-8">
              <div className="w-[96%]">
                <AlertContainer
                  className="bg-overColor w-full p-2"
                  doc={
                    <div className=" font-[400] text-[20px]">
                      <div className="text-center md:text-start">
                        Arabian Bureau Of Services established in 1993 and
                        providing Engineering Testing, Inspection, Certification
                        of Lifting Equipment, and Training Services. Our
                        objective is to keep our customers both safe and
                        compliant with the relevant legislation and standards.
                      </div>
                      <div className="text-center md:text-start">
                        Arabian Bureau Of Services are experts in both keeping
                        customer-owned equipment and people both safe and
                        compliant within the workplace. Equipment in the
                        workplace includes lifting accessories and equipment,
                        plant and access equipment, pressure systems, working
                        platforms, fall protections and local exhaust
                        ventilation systems. Our Electrical Testing division
                        provides Electrical Testing, Fixed Wire Testing, and
                        other electrical testing services.
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2  */}

      <section>
        <div className=" flex justify-center">
          <div className=" lg:w-10/12 xl:w-10/12 2xl:w-10/12  md:w-11/12 w-full flex lg:flex-row flex-col  ">
            <div className="lg:w-8/12 flex flex-col items-center my-5">
              <div className="flex justify-around items-center gap-5 lg:h-[200px] w-full h-32 lg:w-[634px] xl:w-[746px] 2xl:w-[914px]  bg-secoundColor40 rounded-[20px]">
                <img
                  className="w-10 h-12"
                  alt="icon"
                  src={require("../media/images/book.png")}
                />
                <div className=" lg:text-[36px] md:text-xl text-lg  font-bold">
                  <div className=" lg:w-[27rem] w-full">
                    TESTING, INSPECTION, & CERTIFICATION SERVICES
                  </div>
                </div>
              </div>
              <div className=" text-[20px] w-11/12">
                Under the Abu Dhabi Municipality (ADM / OSHAD) & Ministry of
                Industry and Advanced Technology (MOIAT)/Emirates National
                Accreditation Systems (ENAS) there are various regulations which
                require employers to ensure that equipment is safe to use, fit
                for purpose, and thoroughly examined by a competent body. Our
                team of highly qualified engineers provide thorough examination
                and certification services on all types of equipment including:
              </div>
            </div>

            <div className="flex justify-center">
              <img
                className=""
                alt="icon"
                src={require("../media/images/inspections/loader.png")}
              />
            </div>
          </div>
        </div>
      </section>


      {/* section 3 */}
      <section>
      <div className="flex justify-center mt-5">
      <div className="flex md:flex-row flex-col justify-center  items-center  lg:w-10/12 md:11/12  w-11/12">
{
  lists.map((list) => (
    <div className=" lg:w-6/12 w-10/12 ">
      <ul className=" list-disc list-inside">
      {list.items.map((item) => (
        <li className=" lg:text-[20px] text-lg font-bold">{item}</li>
      ))}
      </ul>
    </div>
  ))
}



      </div>
      </div>
      </section>


      <saection>
<FooterPage classNameParent="h-[250px] mt-40" classNameChild="h-[323px] w-full -top-24 "  img={require("../media/images/inspections/footer.png")}/>
      </saection>
    </>
  );
}

export default Inspections;
