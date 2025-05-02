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
import { ImCross } from "react-icons/im";
import html2canvas from "html2canvas";
const RegisterOpen = () => {
  const reset = useRef("");
  const [loading, setLoading] = useState(false);
  const [QRCode , setQRCode] = useState(false)
  // const [fileName, setFileName] = useState("Payment Screenshot");

  const branchMap = {
    10: "CSE(core)",
    11: "CSIT",
    12: "CS",
    13: "IT",
    15: "AIML",
    14: "CSE(DS)",
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
    transactionID : ""
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
    } 
    // catch (error) {
    //   console.log(error);
    //   const errorMessage =
    //     error?.response?.data?.message || "An unexpected error occurred.";
    //   toast.error(errorMessage);
    // }
    catch (error) {
      console.log(error);
      if (error?.response?.status === 429) {
        toast.error("Too many requests. Try after 15 minutes");
      } else {
        const errorMessage = error?.response?.data?.message || "An unexpected error occurred.";
        toast.error(errorMessage);
      }
    }
    
     finally {
      setLoading(false);
    }
  };

  const valid = () => {
   
//     const nameParts = formData.name.trim().split(" ");
// if(formData.name){
// if (nameParts.length === 1) {
//   toast.error("Last name is required after space");
//   return false;
// }
// }


    if (formData.name) {
      if (!/^[a-zA-Z\s]*$/i.test(formData.name)) {
        toast.error("Invalid Student Name");
        return false;
      }
    }

    if(formData.studentNumber){
      if(!(formData.studentNumber.startsWith('24') && (formData.studentNumber.length === 7 || formData.studentNumber.length === 8))){
        toast.error("Invalid Student Number");
        return false;
      }
    }

   
    if (formData.email && formData.studentNumber) {
      const emailRegex = new RegExp(`^[a-zA-Z]{2,20}${formData.studentNumber}@akgec\\.ac\\.in$`);
      if (!emailRegex.test(formData.email)) {
        toast.error("Invalid Student Email");
        return false;
      }
    }
    

    // if (formData.studentNumber) {
    //   if (
    //     !/^(24)(00|10|1[123]|15[34]|16[49]|31|40|15)([0-9]{3,8})$/.test(
    //       formData.studentNumber
    //     )
    //   ) {
    //     toast.error("Invalid Student Number");
    //     return false;
    //   }
    // }
   
    

    if (formData.phoneNumber) {
      if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
        toast.error("Invalid Phone Number");
        return false;
      }
    }
   
    
    if(formData.transactionID){
     if(formData.transactionID.length < 5 || formData.transactionID.length > 25){
      toast.error("Invalid Transaction ID");
      return false;
    }
  }
  

    // const code = formData.studentNumber.slice(2, 4);
    // const expectedBranch = branchMap[code];
    // if (expectedBranch && expectedBranch !== formData.branch) {
    //   toast.error(
    //     `Student Number doesn't match selected branch. Did you mean ${expectedBranch}?`
    //   );
    //   return false;
    // }

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
      transactionID : ""
      // file: null,
    });

    // setFileName("payment Screenshot");
    if (reset.current) {
      reset.current.reset();
    }
  };
  const captureRef = useRef()
 const handleScreenshot = () => {
 
  html2canvas(captureRef.current).then(
    canvas => {
      const link = document.createElement('a');
      link.download = 'QRcode.png'
      link.href = canvas.toDataURL()
      link.click()
    }
  )

 }


  return (
    <div className="signup z-50  overflow-hidden pb-10   w-full  bg-black gap-6 sm:px-5 p-1.5 flex text-white justify-center items-center py-10 sm:flex-row flex-col">
      {/* <Meteors/>
      <Meteors/> */}
   
      <Toaster />
      {/* <div className="left md:w-[800px]  bg-green-400 w-full overflow-x-hidden  sm:px-14"> */}
      <div className="left sm:w-[800px]  w-full overflow-x-hidden  sm:px-14">
        <form
          onSubmit={handleForm}
          className="mt-2 overflow-x-hidden   space-y-5"
        >
          <div className="fields shad w-full flex bg-[#000814]   border-[rgba(255,255,255,0.6)] border-[0.4px] rounded-2xl   sm:pl-14 sm:pr-14 sm:pb-14 sm:pt-4  max-[350px]:p-4 p-3.5 flex-col gap-3">
            {/* <div className="fields w-full flex bg-[#000814] border-white rounded-2xl  shadow-[0_10px_20px_rgba(255,255,255,0.6)] sm:pl-14 sm:pr-14 sm:pb-14 sm:pt-4 max-[350px]:p-4 p-3 flex-col gap-3"> */}

            <div className="flex justify-between mt-3 sm:mt-5 items-center flex-col">
              <p className="text-3xl font-poppins text-white text-center font-bold  flex justify-center items-center">
                Registration Form
              </p>
              <p className="head2 text-lg font-bold text-[#AFB2BF] mt-0 mb-2 flex justify-center items-center">
                NIMBUS 2.0
              </p>
            </div>

            
            <div className="name">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter Name"
                className=" h-[54px] w-full bg-[#161D29]  text-[#AFB2BF] font-[600] hover:bg-[#1f2738] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              />
            </div>

             
            <div className="email">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter College Email"
                className=" h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738]  text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              />
            </div>

          
            <div className="studentNumber">
              <input
                type="number"
                name="studentNumber"
                value={formData.studentNumber}
                onChange={handleInputChange}
                placeholder="Enter Student Number"
                className=" h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738]  text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              />
            </div>

            {/* branch , section */}
            <div className="two flex-col sm:flex-row flex gap-4 w-full">
              <div className="section w-full sm:w-1/2">
                <select
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                  className="h-[54px] w-full bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                >
                  <option value="section">Sections</option>
                  <option value="1">S1</option>
                  <option value="2">S2</option>
                  <option value="3">S3</option>
                  <option value="4">S4</option>
                  <option value="5">S5</option>
                  <option value="6">S6</option>
                  <option value="7">S7</option>
                  <option value="8">S8</option>
                  <option value="9">S9</option>
                  <option value="10">S10</option>
                  <option value="11">S11</option>
                  <option value="12">S12</option>
                  <option value="13">S13</option>
                  <option value="14">S14</option>
                  <option value="15">S15</option>
                  <option value="16">S16</option>
                  <option value="17">S17</option>
                  <option value="18">S18</option>
                  <option value="19">S19</option>
                  <option value="20">S20</option>
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
                placeholder="Enter Phone Number"
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
                <option value="">Select Gender</option>
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

              <div className="f sm:flex gap-3">
            <div className="transactionID sm:w-1/2 w-full">
              <input
                type="transactionID"
                name="transactionID"
                value={formData.transactionID}
                onChange={handleInputChange}
                placeholder="Enter Transaction ID"
                className=" h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738]  text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              />
            </div>
            {/* <div className="flex justify-center sm:w-1/2 mb-5 sm:mb-0  w-full   items-center">
                <motion.button
                  whileHover={{ scale: 1, boxShadow: "0px 0px 10px #8a2be2" }}
                  transition={{ duration: 0.3 }}
                  className="bg-violet-600 hover:bg-violet-800 lg:h-[54px]   w-full transition-all text-white px-6 py-3 rounded-md text-xl font-semibold border border-violet-500  shadow-md"
                >
                Pay ₹100
                </motion.button>
              </div> */}
              <div onClick={() => setQRCode(true)} className="transactionID cursor-pointer w-full mt-4 sm:mt-0 sm:w-1/2">
              <span
                type="transactionID"
                name="transactionID"
                value={formData.transactionID}
                onChange={handleInputChange}
                placeholder="Pay ₹100"
                className=" h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738] flex justify-start items-center text-white font-bold placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              >
                Pay ₹100
              </span>
            </div>
              
              </div>

          

      {QRCode && (
  // <div className=" flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
 <div className="absolute inset-0 z-50 pb-8 -translate-x-1/2 sm:mt-0 mt-20 -translate-y-1/2 top-[50%] left-[50%] flex items-center justify-center bg-black bg-opacity-70 h-[100%]  w-full backdrop-blur-sm"> 
    <div className="bg-white p-8 rounded-2xl w-[88vw] sm:w-[500px] shadow-2xl  text-center relative">
      
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
        onClick={() => setQRCode(false)}
        aria-label="Close"
      >
        <ImCross />
      </button>

    
      <h3 className="text-black mb-4 text-xl sm:text-3xl font-bold">Proceed to Payment</h3>
      <p className="text-gray-600 mb-6 text-xs sm:text-sm">
        Please scan the QR code below using any UPI app to pay ₹100. After the payment is completed, enter your Transaction ID in the registration form to complete the process.
      </p>

    
      <div className="flex flex-col gap-2 text-black text-sm sm:text-base font-medium mb-6">
        <p>1. Scan the QR code or using below link</p>
        <p>2. Pay ₹100 as the registration fee</p>
        <p>3. Enter the Transaction ID in the form</p>

      </div>
    
      <img
      ref={captureRef}
        src="QR.jpg"
        alt="QR Code"
        className="mx-auto h-56 w-auto object-contain rounded-lg border border-gray-300"
      />
      <p onClick={handleScreenshot} className="text-indigo-500 mt-1 cursor-pointer font-bold">Click here to take Screenshot</p>

      <div className="p text-lg text-black mt-4 mb-4 font-bold">Or</div>
      <hr/>

      <div className="p text-blue-500 text-md sm:text-xl font-semibold italic">
    <a href="upi://pay?pa=8433428790@ptsbi&pn=Manoj%20Samanta&am=100&cu=INR&tn=Payment%20to%20Manoj
">👉 Pay ₹100(only for mobile users) </a>
</div>
    </div>  
    
    

  </div>
)}

          

            <div className="pa w-full flex lg:flex-row flex-col gap-4">

                {/* <div className="sm:w-1/2 w-full">
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
              </div>  */}

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
                  className="bg-violet-600 hover:bg-violet-800 lg:h-[74px]   w-full transition-all text-white px-6 py-3 rounded-md text-xl font-semibold border border-violet-500  shadow-md"
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

             {/* //button */}
          </div>
      
        </form>
      </div>
    </div>
  );
};

export default RegisterOpen;
