
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
const captcha = import.meta.env.VITE_API_CAPTCHA_KEY;
const RegisterOpen2 = () => {
  const reset = useRef("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  // const [csrfToken, setCsrfToken] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [errors, setErrors] = useState({}); //error
  const nameRef = useRef(null);
  const [errMsg , setErrMsg] = useState("")
const studentNumberRef = useRef(null);
const emailRef = useRef(null);
const genderRef = useRef(null);
const branchRef = useRef(null);
const phoneRef = useRef(null);
const residenceRef = useRef(null);


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
    unstopId: "",
    gender: "",
    residence: "",
    recaptchaValue: "",
  });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  //   setErrors((prev) => ({ ...prev, [name]: "" })); // clear inline error on change

  //   if (name === "studentNumber" && value.length >= 5) {
  //     const threeDigitCode = value.slice(2, 5);
  //     const twoDigitCode = value.slice(2, 4);

  //     let detectedBranch = "";
  //     if (branchMap[threeDigitCode]) {
  //       detectedBranch = branchMap[threeDigitCode];
  //     } else if (branchMap[twoDigitCode]) {
  //       detectedBranch = branchMap[twoDigitCode];
  //     }

  //     if (detectedBranch) {
  //       setFormData((prev) => ({ ...prev, branch: detectedBranch }));
  //     }
  //   }
  // };
  const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));

  let fieldError = "";
if (name === "name") {
  if (!value) {
    fieldError = "Name is required";
  } else if (value.length < 3) {
    fieldError = "Name is too short";
  } else if (!/^[a-zA-Z\s]*$/i.test(value)) {
    fieldError = "Invalid student name";
  }
}


  if (name === "studentNumber") {
    if (!value) fieldError = "Student number is required";
    else if (
      !(
        value.startsWith("24") &&
        (value.length === 7 || value.length === 8)
      )
    )
      fieldError = "Invalid student number";
  }

  if (name === "email" && formData.studentNumber) {
    const emailRegex = new RegExp(
      `^[a-zA-Z]{3,20}${formData.studentNumber}@akgec\\.ac\\.in$`
    );
    if (!value) fieldError = "Email is required";
    else if (!emailRegex.test(value)) fieldError = "Invalid student email";
  }

  if (name === "phoneNumber") {
    if (!value) fieldError = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(value))
      fieldError = "Invalid phone number";
  }

  if (name === "gender" && !value) fieldError = "Gender is required";
  if (name === "branch" && !value) fieldError = "Branch is required";
   
if (name === "unstopId") {
  if (value.length > 20) {
    fieldError = "Unstop ID is too long";
  } else if (!/^[a-zA-Z0-9._]{3,30}$/.test(value)) {
    fieldError = "Unstop ID contains only numbers, letters, dot and underscore";
  }
}


  if (name === "residence" && !value) fieldError = "Residence is required";

  setErrors((prev) => ({ ...prev, [name]: fieldError }));

  // branch auto-detect logic
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
      setErrors((prev) => ({ ...prev, branch: "" })); 
    }
  }
};


  

  const validateForm = () => {
  let newErrors = {};

  if (!formData.name) newErrors.name = "Name is required";
  else if (!/^[a-zA-Z\s]*$/i.test(formData.name))
    newErrors.name = "Invalid student name";

  if (!formData.studentNumber)
    newErrors.studentNumber = "Student number is required";
  else if (
    !(
      formData.studentNumber.startsWith("24") &&
      (formData.studentNumber.length === 7 ||
        formData.studentNumber.length === 8)
    )
  )
    newErrors.studentNumber = "Invalid student number";

  if (!formData.email) newErrors.email = "Email is required";
  else if (formData.email && formData.studentNumber) {
    const emailRegex = new RegExp(
      `^[a-zA-Z]{3,20}${formData.studentNumber}@akgec\\.ac\\.in$`
    );
    if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid student email";
  }

  if (!formData.gender) newErrors.gender = "Gender is required";
  if (!formData.branch) newErrors.branch = "Branch is required";

  if (!formData.phoneNumber)
    newErrors.phoneNumber = "Phone number is required";
  else if (!/^[6-9]\d{9}$/.test(formData.phoneNumber))
    newErrors.phoneNumber = "Invalid phone number";

 

  if (!formData.residence) newErrors.residence = "Residence is required";

  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) {
    const firstErrorField = Object.keys(newErrors)[0];
    const refMap = {
      name: nameRef,
      studentNumber: studentNumberRef,
      email: emailRef,
      gender: genderRef,
      branch: branchRef,
      phoneNumber: phoneRef,
      residence: residenceRef,
    };
    refMap[firstErrorField]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  return Object.keys(newErrors).length === 0;
};


  // useEffect(() => {
  //   async function csrfFetching() {
  //     try {
  //       const r = await apiConnect("GET", csrf.CSRF_API);
  //       console.log(r);
  //       setCsrfToken(r?.data?.csrfToken);
  //     } catch (err) {
  //       // console.log(err);
  //       toast.error("Security token missing, refresh and try again");
  //     }
  //   }

  //   csrfFetching();
  // }, []);

  const handleForm = async (e, recaptchaToken) => {
    e.preventDefault();

    if (!validateForm()) return;

  //   if (!csrfToken) {
  //   toast.error("Security token missing, refresh and try again");
  //   return;
  // }

  if (!reset.current) {
    toast.error("reCAPTCHA not loaded");
    return;
  }
    setLoading(true);

    try {
      const submissionData = {
        ...formData,
        recaptchaValue: recaptchaToken,
      };

      // console.log(submissionData);
      

      const formDataToSend = new FormData();
      Object.entries(submissionData).forEach(([key, value]) =>
        formDataToSend.append(key, value)
      );

      // console.log("s",submissionData);

      const headers = {
        "Content-Type": "application/json",
        // "X-CSRF-Token": csrfToken,
      };

      const response = await apiConnect(
        "POST",
        "https://drive-zzhh.onrender.com/api/register/Drive",
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
            errorMessage =  data?.message || "Too many requests. Try again after 15 minutes";
            break;
          case 500:
            errorMessage = "Server error. Please try again later";
            break;
          default:
            errorMessage = data?.message || "Request failed";
        }
      } else if (error?.request) {
        errorMessage = "Network error. Please check your connection";
      }
      toast.error(errorMessage);
      setErrMsg(errorMessage)
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
      unstopId: "",
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
  toastOptions={{
    duration: 4000,
    style: {
      background: "rgba(30, 30, 30, 0.85)",
      color: "#f9fafb", 
      padding: "14px 22px",
      fontSize: "15px",
      fontWeight: 500,
      borderRadius: "14px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(14px) saturate(180%)",
      WebkitBackdropFilter: "blur(14px) saturate(180%)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      letterSpacing: "0.3px",
    },
    success: {
      style: {
        background: "rgba(16, 185, 129, 0.85)",
        color: "#fff",
      },
      iconTheme: {
        primary: "#ffffff",
        secondary: "#10b981",
      },
    },
    error: {
      style: {
        background: "rgba(239, 68, 68, 0.85)", 
        color: "#fff",
      },
      iconTheme: {
        primary: "#ffffff",
        secondary: "#ef4444",
      },
    },
    loading: {
      style: {
        background: "rgba(59, 130, 246, 0.85)", 
        color: "#fff",
      },
    },
  }}
/>


      {!success ? (
        <>
          <div className="left sm:ml-14 lg:w-5/12 flex md:hidden sm:mb-24  lg:flex w-full  mt-3 ">
            <img
              src="/poster.png"
              className="object-cover sm:mb-10"
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
                    SPOCC'25
                  </p>
                </div>

                <div className="name">
                  <input
                    type="text"
                    name="name"
                     ref={nameRef}
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Name"
                    className=" h-[54px] w-full bg-[#161D29]  text-[#AFB2BF] font-[600] hover:bg-[#1f2738] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="studentNumber">
                  <input
                    type="number"
                    name="studentNumber"
                     ref={studentNumberRef}
                    value={formData.studentNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Student Number"
                    className=" h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738]  text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                  />
                   {errors.studentNumber && (
                    <p className="text-red-500 text-sm mt-1">{errors.studentNumber}</p>
                  )}
                </div>

                <div className="email relative">
                  <input
                    type="email"
                    name="email"
                     ref={emailRef}
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter College Email Id"
                    className="h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738] text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 pr-14 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* branch , section */}
                <div className="two flex-col sm:flex-row flex gap-4 w-full">
                  {/* <div className="section w-full sm:w-1/2">
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
                  </div> */}

                                  {/* gender */}
                <div className="gender w-full sm:w-1/2">
                  <select
                    name="gender"
                    value={formData.gender}
                     ref={genderRef}
                    onChange={handleInputChange}
                    className="h-[54px] w-full  bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                   {errors.gender && (
                      <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                    )}
                </div>

                  <div className="branch w-full sm:w-1/2">
                    <select
                      name="branch"
                      value={formData.branch}
                       ref={branchRef}
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
                    {errors.branch && (
                      <p className="text-red-500 text-sm mt-1">{errors.branch}</p>
                    )}
                  </div>
                </div>

                {/* phoneNumber */}
                <div className="phoneNumber">
                  <input
                    type="number"
                    name="phoneNumber"
                    ref={phoneRef}
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter Phone Number"
                    className=" h-[54px] w-full bg-[#161D29]   text-[#AFB2BF] font-[600] hover:bg-[#1f2738] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                  />
                   {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* gender */}
                {/* <div className="gender">
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
                </div> */}


                 <div className="unstopId relative">
                  <input
                    type="text"
                    name="unstopId"
                    value={formData.unstopId}
                    onChange={handleInputChange}
                    placeholder="Enter Unstop Id or (NaN)"
                    className="h-[54px] w-full bg-[#161D29] hover:bg-[#1f2738] text-[#AFB2BF] font-[600] placeholder:font-[600] pl-3 pr-14 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
                  />
                </div>
                 {errors.unstopId && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.unstopId}
                    </p>
                  )}

                {/* residence */}
                <div className="residence">
                  <select
                    name="residence"
                     ref={residenceRef}
                    value={formData.residence}
                    onChange={handleInputChange}
                    className="h-[54px]  w-full bg-[#161D29] text-[#AFB2BF] hover:bg-[#1f2738] font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)] flex justify-center items-center"
                  >
                    <option value="">Select Residence</option>
                    <option value="Hosteller">Hosteller</option>
                    <option value="DayScholar">DayScholar</option>
                  </select>
                  {errors.residence && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.residence}
                    </p>
                  )}
                </div>


                <ReCAPTCHA
                  sitekey="6LctyZYrAAAAANH0NNM_BRUiyRcyCoUMKhQ-4kis"
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
                 {errMsg && <div className="text-sm text-center text-red-500">{errMsg}</div>}
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
