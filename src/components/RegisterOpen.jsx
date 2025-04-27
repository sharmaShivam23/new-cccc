import React, { useState, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { Loader } from "./Loading";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "./ui/particles";
import Meteors from "./ui/meteors";
const RegisterOpen = () => {
  const reset = useRef("");
  const [loading, setLoading] = useState(false);
  // const [fileName, setFileName] = useState("Payment Screenshot");

  const branchMap = {
    10: "CSE(core)",
    11: "CSIT",
    12: "CS",
    13: "IT",
    14: "AIML",
    15: "CSE(DS)",
    16: "CSE(AIML)",
    17: "ECE/EN",
    18: "ME",
    19: "CE",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    studentNumber: "",
    branch: "",
    section: "",
    gender: "",
    residence: "",
    recaptchaValue: "",
    // file: null,
  });

  const handleRecaptchaChange = (token) => {
    // console.log(token);

    setFormData((prev) => ({ ...prev, recaptchaValue: token }));
  };

  // const handleFileChange = (e) => {
  //   setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  //   const file = event.target.files[0];
  //   if (file) {
  //     setFileName(file.name);
  //   }
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "studentNumber" && value.length >= 4) {
      const code = value.slice(2, 4);
      const branch = branchMap[code] || "";
      setFormData((prev) => ({ ...prev, branch }));
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (!valid()) return;
    setLoading(true);
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        formDataToSend.append(key, value)
      );

      const response = await axios.post(
        "https://registerbackend-4dz1.onrender.com/api/register/signup",
        formDataToSend,
        {
          withCredentials: true,
        }
      );
      // console.log(response);

      toast.success(response?.data?.message);
      clearField();
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.message || "An unexpected error occurred.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const valid = () => {
   
    const nameParts = formData.name.trim().split(" ");
if(name){
if (nameParts.length === 1) {
  toast.error("Last name is required after space");
  return false;
}
}


    if (formData.name) {
      if (!/^[a-zA-Z\s]*$/i.test(formData.name)) {
        toast.error("Invalid Student  Name");
        return false;
      }
    }


    if (formData.email) {
      if (!/^[a-zA-Z]{2,20}24\d{5,7}@akgec\.ac\.in$/gm.test(formData.email)) {
        toast.error("Invalid Student Email");
        return false;
      }
    }

    if (formData.studentNumber) {
      if (
        !/^(24)(00|10|1[123]|15[34]|16[49]|31|40|15)([0-9]{3,8})$/.test(
          formData.studentNumber
        )
      ) {
        toast.error("Invalid Student Number");
        return false;
      }
    }

    if (formData.phoneNumber) {
      if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
        toast.error("Invalid Phone Number");
        return false;
      }
    }

    const code = formData.studentNumber.slice(2, 4);
    const expectedBranch = branchMap[code];
    if (expectedBranch && expectedBranch !== formData.branch) {
      toast.error(
        `Student Number doesn't match selected branch. Did you mean ${expectedBranch}?`
      );
      return false;
    }

    return true;
  };

  const clearField = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      studentNumber: "",
      branch: "",
      section: "",
      gender: "",
      residence: "",
      recaptchaValue: "",
      // file: null,
    });

    // setFileName("payment Screenshot");
    if (reset.current) {
      reset.current.reset();
    }
  };
  return (
    <div className="signup z-50  overflow-hidden pb-10   w-full  bg-black gap-6 sm:px-5 p-1.5 flex text-white justify-center items-center py-10 sm:flex-row flex-col">
      {/* <Meteors/>
      <Meteors/>
      <Particles/>
    */}
      <Toaster />
      {/* <div className="left md:w-[800px]  bg-green-400 w-full overflow-x-hidden  sm:px-14"> */}
      <div className="left sm:w-[800px]   w-full overflow-x-hidden  sm:px-14">
        <form
          onSubmit={handleForm}
          className="mt-2 overflow-x-hidden   space-y-5"
        >
          <div className="fields shad w-full flex bg-[#000814]  border-[rgba(255,255,255,0.6)] border-[0.4px] rounded-2xl   sm:pl-14 sm:pr-14 sm:pb-14 sm:pt-4  max-[350px]:p-4 p-3.5 flex-col gap-3">
            {/* <div className="fields w-full flex bg-[#000814] border-white rounded-2xl  shadow-[0_10px_20px_rgba(255,255,255,0.6)] sm:pl-14 sm:pr-14 sm:pb-14 sm:pt-4 max-[350px]:p-4 p-3 flex-col gap-3"> */}

            <div className="flex justify-between mt-3 sm:mt-5 items-center flex-col">
              <p className="text-3xl font-poppins text-white text-center font-bold  flex justify-center items-center">
                Registration Form
              </p>
              <p className="head2 text-lg font-bold text-[#AFB2BF] mt-0 mb-2 flex justify-center items-center">
                Cloud Computing Cell
              </p>
            </div>

            {/* name */}
            <div className="name">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter Name Here"
                className=" h-[54px] w-full bg-[#161D29]  text-[#AFB2BF] font-[600] hover:bg-[#1f2738] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              />
            </div>

            {/* email */}
            <div className="email">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Email Here"
                className=" h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738]  text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              />
            </div>

            {/* studentNumber */}
            <div className="studentNumber">
              <input
                type="number"
                name="studentNumber"
                value={formData.studentNumber}
                onChange={handleInputChange}
                placeholder="Enter Student Number Here"
                className=" h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738]  text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              />
            </div>

            {/* branch , section */}
            <div className="two flex-col sm:flex-row flex gap-4 w-full">
              <div className="branch w-full sm:w-1/2">
                <select
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                  className="h-[54px] w-full bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                >
                  <option value="section">Sections</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>
              </div>

              <div className="section w-full sm:w-1/2">
                <select
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                  className="h-[54px] w-full  text-[#AFB2BF] bg-[#161D29] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                >
                  <option value="">Branch</option>
                  <option value="CSE(core)">CSE</option>
                  <option value="CSE(AIML)">CSE(AIML)</option>
                  <option value="CSE(DS)">CSE(DS)</option>
                  <option value="CSE">CSE(Hindi)</option>
                  <option value="CS">CS</option>
                  <option value="IT">IT</option>
                  <option value="CSIT">CSIT</option>
                  <option value="AIML">AIML</option>
                  <option value="ECE/EN">ECE/EN</option>
                  <option value="ME">ME</option>
                  <option value="CE">CE</option>
                </select>
              </div>
            </div>

            {/* phoneNumber */}
            <div className="phoneNumber">
              <input
                type="number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter Phone Number Here"
                className=" h-[54px] w-full bg-[#161D29]  text-[#AFB2BF] font-[600] hover:bg-[#1f2738] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              />
            </div>

            {/* gender */}
            <div className="gender">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="h-[54px] w-full bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              >
                <option value=""> Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
           

            {/* residence */}
            <div className="residence">
              <select
                name="residence"
                value={formData.residence}
                onChange={handleInputChange}
                className="h-[54px]  w-full bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)] flex justify-center items-center"
              >
                <option value="">Select Residence</option>
                <option value="Hosteller">Hosteller</option>
                <option value="DayScholar">DayScholar</option>
              </select>
            </div>

            <div className="pa w-full flex lg:flex-row flex-col gap-4">
              {/*  <div className="sm:w-1/2 w-full">
                <input
                  type="file"
                  id="fileInput"
                  ref={reset}
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="fileInput"
                  className="sm:h-[75px] h-[60px]  w-full bg-[#161D29] text-white font-semibold flex justify-center items-center  shadow-[0px_1px_2px_rgba(255,255,255,0.6)] cursor-pointer hover:bg-[#1f2738] rounded-md transition-all duration-300"
                >
                  <span className="mr-2 text-md text-[#AFB2BF]">{fileName}</span>

                  {fileName == "Payment Screenshot" ? (
                    <div className="text-2xl text-violet-800">
                      <FaCloudUploadAlt />
                    </div>
                  ) : (
                    <div className="text-2xl text-green-400">
                      <FaCheckCircle />
                    </div>
                  )}
                </label>
              </div> */}

              {/* recaptcha */}
              <div className="block gap-2 mt-4  cursor-pointer w-full">
                <div className="flex justify-center  items-center  z-50">
                  <ReCAPTCHA
                    sitekey="6Le3-QArAAAAADn9ym4vDs6qMQN3DpD0yZe183m-"
                    onChange={handleRecaptchaChange}
                    className="cursor-pointer "
                    ref={reset}
                  />
                </div>
              </div>

              <div className="flex justify-center mb-5 sm:mb-0  w-full sm:mt-4  items-center">
                <motion.button
                  whileHover={{ scale: 1, boxShadow: "0px 0px 10px #8a2be2" }}
                  transition={{ duration: 0.3 }}
                  className="bg-violet-600 hover:bg-violet-800 lg:h-[74px]   w-full transition-all text-white px-6 py-3 rounded-md text-lg font-semibold border border-violet-500  shadow-md"
                >
                  {loading ? (
                    <div className="flex justify-center items-center space-x-2">
                      <div className="w-4 h-4 bg-white rounded-full animate-bounce4"></div>
                      <div className="w-4 h-4 bg-white rounded-full animate-bounce5 animation-delay-200"></div>
                      <div className="w-4 h-4 bg-white rounded-full animate-bounce6 animation-delay-400"></div>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </motion.button>
              </div>
            </div>

            {/* loading */}
            {/* {loading && <Loader />} */}

            {/* button */}
            {/* <button className="w-full bg-[#FFD60A] text-black py-3 rounded-xl font-[550]">
                Submit
              </button> */}
            {/* <div className="flex justify-center items-center">
              <motion.button
                whileHover={{ scale: 1, boxShadow: "0px 0px 10px #8a2be2" }}
                transition={{ duration: 0.3 }}
                className="bg-violet-600 hover:bg-violet-800 mt-5  w-full transition-all text-white px-6 py-3 rounded-md text-lg font-semibold border border-violet-500  shadow-md"
              >
               Submit
              
              </motion.button>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterOpen;
