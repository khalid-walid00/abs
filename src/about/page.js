import React from "react";
import shipmentImg from "../media/images/about/head.png";
import Line from "../Componant/cunstoms/line";
import AlertContainer from "../Componant/alertContainer";

function About(props) {
  const dataOwner = [
    {
      img: require("../media/images/about/owner.png"),
      name: "Chairman’s Message",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, nesciunt.",
    },
    {
      img: require("../media/images/about/manager.png"),
      name: "Managing Director’s Message",
      des: "Everyone want to live safely without any harm in their life by means of their or others actions. We ABoS in the field of inspection & training certification body for oil & gas as well as construction industries to provide better judgments’ to ensure the safety.The core team of ABoS has essential knowledge in the field of inspection for lifting equipments as per the local & international standards. Since we had the professional team which is having hands on experience & knowledge in the field of lifting equipment inspection services.We have the confident that our team is equipped with such capabilities and serve the nation (UAE) to ensure zero harm to the environment & people of the nation",
    },
  ];

  const aboutList = [
    {
      title:
        "In consideration of Confidential Information being made available to the Arabian Bureau of Services by our clients and/or its agents, Arabian Bureau of Services agrees and undertakes that it shall:",
      list: [
        "Only use the Confidential Information in relation to work pertaining to the Services.",
        "Not without the client’s prior specific written approval, divulge, disclose or reveal the Confidential Information to any third party.",
        "Treat the Confidential Information as strictly confidential and with no less than the same care as the Client uses to protect its own Confidential Information.",
        "Not make copies in any form of any documents containing the Confidential Information, unless essential to the performance of the Services.",
        "Shall not advertise or publicly announce, communicate or circulate the existence of any agreement or the fact that we are providing services to any client, without the prior written consent of the client.",
        "ABOS shall inform the client in advance of any information ABOS intends to place it in the public domain. Except for information that the client makes publicly available or when agreed between ABOS and the clients.",
        "When the inspection body is required by law or authorized by contractual commitments to release confidential information, the client or individual concerned shall, unless prohibited by law, be notified of the information provided.",
        "Information about the client obtained from sources other than the client (e.g., complainant, regulators) shall be treated as confidential.",
      ],
       img: require("../media/images/about/loader.png"),
    },
  ];

  return (
    <>
      <section>
        <div className="h-max flex justify-center rounded-[87px] bg-thirdColor">
          <div className="w-11/12">
            <div className="lg:flex lg:flex-row-reverse flex-col  firstabout">
              <div className="lg:w-6/12 pl-3 pt-1 relative">
                <img
                  src={shipmentImg}
                  alt="Shipment"
                  className="w-full border-4xl"
                />
                <ul className="list-disc grid grid-cols-6 absolute top-0 lg:-right-9 -right-0 w-40 text-white text-xl">
                  {[...Array(6)].map((_, colIdx) => (
                    <div key={colIdx}>
                      {[...Array(4)].map((_, liIdx) => (
                        <li key={liIdx}></li>
                      ))}
                    </div>
                  ))}
                </ul>
              </div>
              <div className="lg:flex md:flex sm:flex flex-col md:flex-row sm:flex-row textfirstabout md:w-12/12 lg:w-6/12">
                <div className="lg:w-4/12 flex justify-center md:mx-2 items-center">
                  <div
                    className="rounded-3xl lg:h-52  md:h-52 sm:h-52 h-36 lg:w-36 sm:w-36 w-full my-2 md:w-36 flex flex-col justify-center"
                    style={{ backgroundColor: "#11b4ea9d" }}
                  >
                    <div className="flex justify-center">
                      <img
                        alt="book"
                        src={require("../media/images/book.png")}
                        className="w-10 text-Blueblack"
                      />
                    </div>
                    <i className="fa-solid fa-book-bookmark text-5xl text-center"></i>
                    <ul className="text-center text-2xl color-blue-1000 font-bold">
                      <li id="t1-p1-about text-Blueblack">Company</li>
                      <li id="t2-p1-about text-Blueblack">Profile</li>
                    </ul>
                  </div>
                </div>
                <div
                  id="p1-about"
                  className="lg:w-8/12 mt-3 text-lg p-2 relative"
                >
                  Quality & sustainable lifestyle is an essential part of our
                  life. To ensure the same perfection & unique decision are very
                  important. The current industry requires quality &
                  certification on everything we deal with.
                  <br />
                  With the above idea, Arabian Bureau of Services was
                  established in 1993 to ensure quality & impartial inspection
                  as well as effective training services for its customers. The
                  team is well-organized to ensure its services are provided to
                  the customers effectively & efficiently.
                  <br />
                  We are registered with all the major oil companies providing
                  services to the nation. We are still looking forward to
                  registering with international organizations to ensure
                  compliance with international requirements.
                  <ul className="list-disc grid grid-cols-6 absolute top-0 right-0 w-40 text-white text-xl">
                    {[...Array(6)].map((_, colIdx) => (
                      <div key={colIdx}>
                        {[...Array(4)].map((_, liIdx) => (
                          <li key={liIdx}></li>
                        ))}
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="my-5">
              <Line />
            </div>

            {dataOwner.map((owner, index) => (
            <> <div key={index} className="flex lg:flex-col flex-row justify-center">
                <div className=" flex flex-col xs:flex-col sm:flex-col  lg:flex-row xl:flex-row 2xl:flex-row lg:w-10/12 
                xs:items-center items-center sm:items-center lg:items-start  xl:items-start 2xl:items-start 
                    justify-between md:gap-10">
                  <img
                    className="w-[262px] h-[360px]"
                    src={owner.img}
                    alt="icon"
                  />
                  <div className="flex gap-3 w-/12">
                    <img
                      className="w-12 mt-2 h-14"
                      src={require("../media/images/book.png")}
                      alt="icon"
                    />
                    <div className=" text-[30px]">
                      <div className="break-before-always w-40">
                        {owner.name}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-5/12 flex justify-center mt-2">
                    <div className="w-10/12">
                      <p className=" text-center md:text-start lg:text-start xl:text-start 2xl:text-start">{owner.des}</p>
                    </div>
                  </div>
                </div>
                
              </div>
             { index !== dataOwner.length - 1 && <div className="my-5">
              <Line />
            </div>}
              </> 
            ))}
  
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center mt-10">
          <div className="lg:w-10/12 md:w-11/12 xs:w-full  flex justify-center">
            <AlertContainer
            holder="Arabian Bureau of Services"
              className="bg-transparent"
              img={require("../media/images/about/section2alert.png")}
              title1={"Company"}
              title2={"Profile"}
              doc={
                "Arabian Bureau of Services established on 1993 as a 3rd party inspection company for the thorough examination of Lifting Appliances, Lifting Gears, Earthmoving Machineries, Industrial Trucks & QHSE training and consultancy. During this period ABoS had grown and expanded in the U.A.E market and established a high strength relationship among its customers whose trust by its judgment. Our judgment against any equipment, machine or accessory gear gives priority of preventing equipment, machine, accessory gear, operators, labors, environment and the property from any accident, deterioration, damage, harm, fatal injuries or death. For more than two decade of operations, ABoS has gained much experience in the UAE and has preserved its commitment to provide quality inspection service to all our clients. Qualified and experienced staffs were retained to ensure a continuity of quality inspection & training services."
              }
            />
          </div>
        </div>
        <div className="flex justify-center">
        <div className="my-5 w-10/12">
          <Line />
        </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center rounded-t-[87px] py-5 bg-thirdColor">
          <div className="w-11/12">
            <div className="flex flex-col">
              <div className="flex gap-5 mb-10">
                <img
                  className="w-10 h-12"
                  src={require("../media/images/about/lock.png")}
                  alt="Lock icon"
                />
                <div className="text-Blueblack text-[32px] font-bold">
                  Obligations of Confidentiality
                </div>
              </div>

              {aboutList.map((item, index) => (
                <div className="flex lg:flex-row xl:flex-row 2xl:flex-row flex-col-reverse gap-10" key={index} >
                <div key={index}>
                  <div className="text-[17px] font-bold">
                    {item.title}
                  </div>
                  <ul className="list-disc list-inside">
                    {item.list.map((li, liIdx) => (
                      <li className=" font-[500] text-[17px]" key={liIdx}>{li}</li>
                    ))}
                  </ul>
                </div>
                <div className=" flex justify-center">
                    <img className="lg:w-auto xl:w-auto 2xl:w-auto w-96" src={item.img} alt="icon" />
                </div>
             </div> ))}


            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
