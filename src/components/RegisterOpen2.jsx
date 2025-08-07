import React, { useState, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";
import Success from "./Success";
import { useEffect } from "react";
import ParticlesBackground from "./ParticlesBg";
import { apiConnect } from "@/APIhandler/apiconnect";
import { register } from "@/APIhandler/apis";
import { csrf } from "@/APIhandler/apis";
import { useMediaQuery } from "react-responsive";
 const captcha = import.meta.env.VITE_API_CAPTCHA_KEY
const RegisterOpen2 = () => {
  
  const reset = useRef("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const branchMap = {
    10: "CSE(core)",
    11: "CSIT",
    12: "CS",
    13: "IT",
    164: "AIML",
    154: "CSE(DS)",
    153: "CSE(AIML)",
    169: "CSE(H)",
    20: "EN",
    31: "ECE",
    40: "ME",
    "00": "CE",
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
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "studentNumber" && value.length >= 5) {
      const threeDigitCode = value.slice(2, 5);
      const twoDigitCode = value.slice(2, 4);

      let detectedBranch = "";
      if (branchMap[threeDigitCode]) {
        detectedBranch = branchMap[threeDigitCode];
      } else if (branchMap[twoDigitCode]) {
        detectedBranch = branchMap[twoDigitCode];
      }

      if (detectedBranch) {
        setFormData((prev) => ({ ...prev, branch: detectedBranch }));
      }
    }
  };

  const validateForm = () => {
    const requiredFields = [
      { field: "name", label: "Name" },
      { field: "studentNumber", label: "Student Number" },
      { field: "email", label: "Email" },
      { field: "section", label: "Section" },
      { field: "branch", label: "Branch" },
      { field: "phoneNumber", label: "Phone Number" },
      { field: "gender", label: "Gender" },
      { field: "residence", label: "Residence" },
    ];

    for (const { field, label } of requiredFields) {
      if (!formData[field]) {
        toast.error(`Please fill ${label} field`);
        return false;
      }
    }

    if (!/^[a-zA-Z\s]*$/i.test(formData.name)) {
      toast.error("Invalid Student Name");
      return false;
    }

    if (
      !(
        formData.studentNumber.startsWith("24") &&
        (formData.studentNumber.length === 7 ||
          formData.studentNumber.length === 8)
      )
    ) {
      toast.error("Invalid Student Number");
      return false;
    }

    if (formData.email && formData.studentNumber) {
      const emailRegex = new RegExp(
        `^[a-zA-Z]{2,20}${formData.studentNumber}@akgec\\.ac\\.in$`
      );
      if (!emailRegex.test(formData.email)) {
        toast.error("Invalid Student Email");
        return false;
      }
    }

    if (!/^[6-9]\d{9}$/.test(formData.phoneNumber)) {
      toast.error("Invalid Phone Number");
      return false;
    }

    return true;
  };

 

useEffect(() => {
  async function csrfFetching(){
    try{
      const r = await apiConnect("GET" , csrf.CSRF_API )
      // console.log(r);
      setCsrfToken(r?.data?.csrfToken);
       
    }
    catch(err){
      // console.log(err);
      toast.error("Error to fetch CSRF token");
    }

  }
  
    csrfFetching()
  },[])
  

 
  const handleForm = async (e , recaptchaToken) => {
    e.preventDefault();


    if (!validateForm()) return;

    setLoading(true);

    try {

       const submissionData = {
      ...formData,
      recaptchaValue: recaptchaToken,
    };

    const formDataToSend = new FormData();
    Object.entries(submissionData).forEach(([key, value]) =>
      formDataToSend.append(key, value)
    );

    console.log("s",submissionData);
    


      
      const headers = {
        "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
      };

    
      const response = await apiConnect(
        "POST",
        register.REGISTER_API,
        formDataToSend,
        headers
      );
      // console.log(response);

      if (response?.data?.success === true) {
        setSuccess(true);
        localStorage.setItem("registeredName", formData.name);
        toast.success(response?.data?.message || "Registration successful!");
        clearForm();
      }
    } catch (error) {
      // console.log(error);
      
      // console.error("Registration error:", error);
      // toast.error(error?.response?.data?.message || "Registration failed");

      let errorMessage = "An unexpected error occurred";

      if (error?.response) {
        const { status, data } = error.response;

        switch (status) {
          case 400:
            errorMessage = data?.message || "Invalid request data";
            break;
          case 401:
            errorMessage = "Authentication required";
            break;
          case 403:
            errorMessage = "Access forbidden";
            break;
          case 429:
            errorMessage = "Too many requests. Try again after 15 minutes";
            break;
          case 500:
            errorMessage =  "Server error. Please try again later";
            break;
          default:
            errorMessage = data?.message || "Request failed";
        }
      } else if (error?.request) {
        errorMessage = "Network error. Please check your connection";
      }
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };


  const clearForm = () => {
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
    });

    // Reset reCAPTCHA
    if (reset.current) {
      reset.current.reset();
    }
  };

  return (
    
    <div
      className={`signup z-50 ${
        !showEmail ? "bg-black bg-opacity-70 backdrop-blur-sm" : ""
      }  overflow-hidden pb-10  w-full sm:max-w-[92vw] m-auto  bg-black gap-1 sm:px-5 p-1.5 flex text-white justify-center items-center sm:py-7  sm:flex-row flex-col`}
    >
      <ParticlesBackground />
       <Toaster
        position="top-center"
        top = "0px"
        toastOptions={{
          duration: 4000,
          style: {
            background: "rgba(255, 255, 255, 0.25)",
            color: "white",
            padding: "16px 24px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            zIndex: 9999,
            position: "relative",
           top: isMobile ? "450px" : "0px", 
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#ffffff",
            },
          },
        }}
      />
     

      {!success ? (
        <>
          <div className="left sm:ml-14 lg:w-5/12 flex md:hidden sm:mb-24  lg:flex w-full  mt-3 ">
            <img
              src="/post4.png"
              className="object-cover sm:mb-10   h-full w-full"
              alt=""
            />
          </div>

          <div className="right  sm:w-[800px]   w-full overflow-x-hidden  sm:px-14">
            <form onSubmit={handleForm} className="sm:mt-2   w-full space-y-5">
              <div className="fields shad w-full flex bg-[#000814]   border-[rgba(255,255,255,0.6)] border-[0.4px] rounded-2xl   sm:pl-14 sm:pr-14 sm:pb-14 sm:pt-4  max-[350px]:p-4 p-3.5 flex-col gap-3">
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

                <div className="email relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter College Email Id"
                    className="h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738] text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 pr-14 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
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
                      <option value="">Sections</option>
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
                      <option value="CSE(H)">CSE(Hindi)</option>
                      <option value="CS">CS</option>
                      <option value="IT">IT</option>
                      <option value="CSIT">CSIT</option>
                      <option value="AIML">AIML</option>
                      <option value="ECE">ECE</option>
                      <option value="EN">EN</option>
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
                    className=" h-[54px] w-full bg-[#161D29]   text-[#AFB2BF] font-[600] hover:bg-[#1f2738] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
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

              
                <ReCAPTCHA
                  sitekey={captcha}
                  size="invisible"
                  badge="bottomright"
                  ref={reset}
                />

                <div className="pa w-full flex lg:flex-row flex-col gap-4">
                  <div className="flex justify-center mb-5 sm:mb-0  w-full sm:mt-0  items-center">
                    <motion.div
                      whileHover={{
                        scale: 1,
                        boxShadow: "0px 0px 10px #8a2be2",
                      }}
                     
                      onClick={async (e) => {
                        e.preventDefault();

                        try {
                          const token = await reset.current.executeAsync();
                          reset.current.reset();
                          await handleForm(e, token);
                        } catch (err) {
                          toast.error("reCAPTCHA verification failed");
                        }
                      }}
                      disabled={loading}
                      transition={{ duration: 0.3 }}
                      className={`${
                        loading
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      } bg-violet-600 flex justify-center items-center hover:bg-violet-800 lg:h-[55px]   w-full transition-all text-white px-6 py-3 rounded-md text-xl font-semibold border border-violet-500  shadow-md`}
                    >
                      {loading ? "Registering..." : "Register"}
                    </motion.div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </>
      ) : (
        <Success />
      )}
    </div>
  );
};

export default RegisterOpen2;
