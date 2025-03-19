import React, { act, useState,useCallback } from "react";
import shivamsharma from "../3yearImg/shivamsharma.jpg";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import imgfooter from "../images/imgfooter.png";
import rec1 from "../images/rec1.png";
import rec2 from "../images/rec2.png";
import rec3 from "../images/rec3.png";
import Raghav from "../images/Raghav.jpg";
import ShimmerButton from "./ui/shimmer-button";
import cardbg1 from "../images/cardbg1.svg";
import card2bg from "../images/card2bg.svg";
import card3bg from "../images/card3bg.svg";
import adityaKumar from "../3yearImg/adityaKumar.jpeg";
import harshSingh from "../3yearImg/harshSingh.jpeg";
import harshSingh2 from "../3yearImg/harshSingh2.jpeg";
import kratikaGupta from "../3yearImg/kratikaGupta.jpg";
import akhandSingh from "../3yearImg/akhandSingh.jpg";
import akhandSingh2 from "../3yearImg/akhandSingh2.jpg";
import akshatSingh from "../3yearImg/akshatSingh.jpg";
import arpitaAsthana from "../3yearImg/arpitaAsthana.jpg";
import sachendraGangwar from "../3yearImg/sachendraGangwar.jpg";
import sachendraGangwar2 from "../3yearImg/sachendraGangwar2.jpg";
import sahil from "../3yearImg/sahil.jpg";
import sahil2 from "../3yearImg/sahil2.jpg";
import yashMishra from "../3yearImg/yashMishra.jpg";
import prakharSrivastava from "../3yearImg/prakharSrivastava.jpg";
import manoj from "../3yearImg/manoj.jpg";
import kritika from "../3yearImg/kritika.jpg";
import shreeyaAggarwal from "../3yearImg/shreeyaAggarwal.jpg";
import shreyaMohan from "../3yearImg/shreyaMohan.jpg";
import Diya from "../3yearImg/Diya.jpg";
import axios from "axios";
import Loading from "./Loading";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export const TeamCards = () => {
  const [activeYear, setActiveYear] = useState("four");
  const [data , setdata] = useState("")
  const [data2 , setdata2] = useState("")
  const [data3 , setdata3] = useState("")

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const handleYearSelect = (year) => {
    setActiveYear(year);
  };

  return (
    <div className="max-w-[90vw] m-auto z-50">
      <motion.h1
        initial={{ y: -50, backdropFilter: "brightness(70%)", opacity: 0 }}
        whileInView={{ y: 0, backdropFilter: "brightness(100%)", opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-white text-center text-2xl  sm:text-3xl md:text-5xl font-poppins  font-bold mb-6 mt-6"
      >
        OUR TEAM MEMBERS
      </motion.h1>
      <Buttons activeYear={activeYear} onSelectYear={handleYearSelect} />
      {activeYear === "four" && <FouthYear  setdata={setdata}  data={data} />}
      {activeYear === "three" && <ThirdYear  setdata2={setdata2} data2={data2}/>}
      {activeYear === "two" && <SecondYear setdata3={setdata3} data3={data3} activeYear={activeYear} />}
    </div>
  );
};

const Buttons = ({ onSelectYear, activeYear }) => {
  return (
    <div className="flex justify-evenly font-jetbrains z-50">
      <div className="max-w-[90vw] sm:mt-10 mt-5 text-xs sm:text-lg m-auto block sm:flex justify-evenly mb-6">
        <ShimmerButton
          shimmerColor={"#6E45AC"}
          className={` sm:mt-0 ${
            activeYear === "four"
              ? "scale-110  text-[#6E45AC] font-extrabold"
              : ""
          }  mr-0 sm:mr-16 transition-all ease-in-out duration-300`}
          onClick={() => onSelectYear("four")}
        >
          4th Year
        </ShimmerButton>
        <ShimmerButton
          shimmerColor={"#66E0CE"}
          className={`mt-5 sm:mt-0  mr-0 sm:mr-16" ${
            activeYear === "three"
              ? "scale-110 text-[#66E0CE] font-extrabold"
              : ""
          }  mr-0 sm:mr-16`}
          onClick={() => onSelectYear("three")}
        >
          3rd Year
        </ShimmerButton>
        <ShimmerButton
          shimmerColor={"#FFC080"}
          className={`mt-5 sm:mt-0  ${
            activeYear === "two"
              ? "scale-110 text-amber-500 font-extrabold"
              : ""
          }  mr-0 sm:mr-16`}
          onClick={() => onSelectYear("two")}
        >
          2nd Year
        </ShimmerButton>
      </div>
    </div>
  );
};

const FouthYear = ({setdata,data}) => {
  const [obj, setObj] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const api = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://website-9egw.onrender.com/api/members/4thyear"
        );
        setObj(response.data);
        let jsondata = response.data
        if(jsondata.length === 0){
          setdata("No data found")
        }
        // console.log(response.data);
      } catch (error) {
        // console.log(error);
        // console.log(error.message);
        if (error.message === "Network Error") {
          setdata("Please! connect to Network")
        }
      } finally {
        setLoading(false);
      }
    };
    api();
  }, []);
  


  return (
    <div className="h-auto sm:max-w-[90vw] z-50 w-full flex justify-center flex-col  items-center py-8">
      {loading ? (
        <h1 className="mb-10 mt-10 text-2xl font-serif font-extrabold underline bg-[#333] h-[32px] w-[227px]"></h1>
      ) : (
        <h1 className="mb-10 mt-10 text-2xl font-jetbrains font-extrabold underline text-[#6E45AC]">
          (Batch 2021-2025)
        </h1>
      )}

      {/* <p className="font-bold text-2xl text-white">{data}</p> */}

      {loading ? (
        <Loading />
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-7">
          {obj.map((details, index) => (
            <motion.div
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              key={index}
              className="flex justify-center items-center"
            >
              <div className="relative w-[20rem] m-4 cursor-pointer h-[25rem] overflow-hidden border-2 border-[#6E45AC] bg-white rounded-3xl hover:rounded-none group">
                <div className="w-full img h-full flex justify-center items-center flex-col transform group-hover:translate-x-full   transition-all ease-in-out delay-0 duration-700 damber-500">
                  <img
                    src={details.profile}
                    alt={details.name}
                    className="h-[13rem] w-[13rem] rounded-full object-cover border-2 border-[#6E45AC] shadow-2xl shadow-[#6E45AC]"
                  />
                  <div className="mt-6 text-center">
                    <p className="text-xl text-black">{details.domain}</p>
                    <p className="text-2xl font-bold text-black">
                      {details.name}
                    </p>
                    <img
                      src={card2bg}
                      className="w-full absolute bottom-0 left-0"
                      alt=""
                    />
            
                  </div>
                </div>

                {/* team member about */}
                <div className="absolute content top-0 left-0 w-full h-full bg-[#6E45AC] flex justify-center items-center text-red-400 transition-all duration-700 ease-in-out delay-0 transform group-hover:translate-x-0  -translate-x-full flex-col">
                  <div className="tags text-5xl p-3  flex gap-3 text-black">
                    <a href="">
                      <FaLinkedin />
                    </a>
                    <a href="">
                      <FaSquareGithub />
                    </a>
                    <a href="">
                      <FaSquareInstagram />
                    </a>
                  </div>
                  <p className="mb-4 text-black font-mono p-5 text-center">
                    {details.about}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

const ThirdYear = ({data2,setdata2}) => {
  const [obj, setObj] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const api = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://website-9egw.onrender.com/api/members/3rdyear"
        );
        setObj(response.data);
        if(jsondata.length === 0){
          setdata2("No data found")
        }
        // console.log(response.data);
      } catch (error) {
        // console.log(error);
        // console.log(error.message);
        if (error.message === "Network Error") {
          setdata2("Please! connect to Network");
        }
      } finally {
        setLoading(false);
      }
    };
    api();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="h-auto sm:max-w-[90vw] w-full z-50 flex justify-center flex-col   items-center py-8">
        {loading ? (
          <h1 className="mb-10 mt-10 text-2xl font-serif font-extrabold underline bg-[#333] h-[32px] w-[227px]"></h1>
        ) : (
          <h1 className="mb-10 mt-10 text-2xl font-jetbrains font-extrabold underline text-[#66E0CE]">
            (Batch 2022-2026)
          </h1>
        )}
         <p className="font-bold text-2xl text-white">{data2}</p>
        {loading ? (
          <Loading />
        ) : (
          <div className="flex justify-center items-center flex-wrap gap-7">
          {/* <div className="grid container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> */}
            {obj.map((details, index) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                key={index}
                className="flex justify-center items-center"
              >
                <div className="relative w-[320px] m-4  cursor-pointer h-[25rem] overflow-hidden border-2 border-[#66E0CE] bg-white rounded-2xl group">
                  <div className="w-full img h-full  flex justify-center items-center flex-col   transition-all ">
                    <img
                      src={details.profile}
                      alt={details.name}
                      className="h-[13rem] w-[13rem] object-cover scale-90 rounded-full border-2 border-[#66E0CE] shadow-2xl shadow-[#66E0CE]"
                    />
                    <div className="mt-6 text-center">
                      <p className="text-xl text-black">{details.domain}</p>
                      <p className="text-2xl font-bold text-black">
                        {details.name}
                      </p>
                      <img
                        src={card3bg}
                        className="w-full absolute bottom-0 left-0"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="absolute content top-0 left-0 w-full h-full border-[#66E0CE] bg-[#66E0CE] flex justify-center items-center text-red-400 transition-all duration-700 ease-in-out transform group-hover:translate-x-0  -translate-x-full flex-col">
                    <div className="tags text-5xl p-3  flex gap-3 text-black">
                      <a href="">
                        <FaLinkedin />
                      </a>
                      <a href="">
                        <FaSquareGithub />
                      </a>
                      <a href="">
                        <FaSquareInstagram />
                      </a>
                    </div>
                    <p className="mb-4 text-black font-mono p-5 text-center">
                      {details.about}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};


const SecondYear = ({ activeYear , data3,setdata3 }) => {
  const [obj, setObj] = useState([]);
  const [loading, setLoading] = useState(false);

  const api = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://website-9egw.onrender.com/api/members/2ndyear"
      );
      setObj(response.data);
      if(jsondata.length === 0){
        setdata3("No data found")
      }
      // console.log(response.data);
    } catch (error) {
      // console.log(error);
      // console.log(error.message);
      if (error.message === "Network Error") {
        setdata3("Please! connect to network")
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      api()
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="h-auto sm:max-w-[90vw] w-full z-50 flex justify-center flex-col  items-center py-8">
        {loading ? (
          <h1 className="mb-10 mt-10 text-2xl font-serif font-extrabold underline bg-[#333] h-[32px] w-[227px]"></h1>
        ) : (
          <h1 className="mb-10 mt-10 text-2xl font-jetbrains font-extrabold underline text-amber-500">
            (Batch 2023-2027)
          </h1>
        )}

        <p className="font-bold text-2xl text-white">{data3}</p>

        {loading ? (
          <Loading />
        ) : (
          <div className="flex justify-center items-center flex-wrap gap-7">
            {obj.map((details, index) => (
              <motion.div
                initial={{ opacity: 0, backdropFilter: "brightness(70%)", x: -20 }}
                whileInView={{ opacity: 1, backdropFilter: "brightness(100%)", x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                key={index}
                className="flex justify-center items-center"
              >
                <div className="relative w-[20rem] m-4  cursor-pointer h-[25rem] overflow-hidden border-2 border-amber-500 bg-white rounded-2xl group">
                  <div className="w-full img h-full flex justify-center items-center flex-col transition-all damber-500">
                    <img
                      src={details.profile}
                      alt={details.name}
                      className="h-[13rem] w-[13rem] rounded-full border-2 object-cover overflow-hidden   border-amber-500 shadow-2xl shadow-amber-500"
                    />
                    <div className="mt-6 text-center">
                      <p className="text-xl text-black">{details.domain}</p>
                      <p className="text-2xl font-bold text-black">
                        {details.name}
                      </p>
                      <img
                        src={cardbg1}
                        className="w-full absolute bottom-0 left-0"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="absolute content top-0 left-0 w-full h-full bg-amber-500 flex justify-center items-center text-red-400 transition-all duration-700 ease-in-out transform group-hover:translate-y-0  translate-y-full flex-col">
                    <div className="tags text-5xl p-3  flex gap-3 text-black">
                      <a href={details.linkedin}>
                        <FaLinkedin />
                      </a>
                      <a href={details.github}>
                        <FaSquareGithub />
                      </a>
                      <a href={details.instagram}>
                        <FaSquareInstagram />
                      </a>
                    </div>
                    <p className="mb-4 text-black font-mono p-5 text-center">
                      {details.about ||
                        "2nd year student of cloud computing cell"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
