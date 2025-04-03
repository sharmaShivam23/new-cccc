import React, { useEffect, useRef } from "react";
import video from "../images/contactvideo.mp4";
import ShimmerButton from "./ui/shimmer-button";
import Particles from "./ui/particles";
import { useState } from "react";
import ShineBorder from "./ui/shine-border";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "./Spinner";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <>
      <div
        id="contact"
        className="md:h-screen z-50 h-auto w-screen bg-red- max-w-90vw md:max-w-[90vw] m-auto p- block md:flex"
      >
        <Video />
        <Form />
      </div>
    </>
  );
};

const Video = () => {
  return (
    <div className="flex justify-center  relative items-center flex-col w-auto md:w-1/2 bg-green- h-auto md:h-[100vh]">
      <video
        className="w-full z-40 lg:mb-28 mb-10 border- border-white  h-auto md:h-[60vh]"
        autoPlay
        loop
        src={video}
      ></video>
      <motion.div className="text-white font-poppins lg:text-3xl hidden lg:block text-center text-2xl relative z-40 bottom-28 text-bold">
        <div className="m-2 mb-4 animate-su font-bold">
          We Value Building Strong Relationships
        </div>
        <div className="m-2 mb-4 font-bold animate-su">
          Stay in Touch with us
        </div>
        {/* <div className="div animate-su">
          <h1 className="font-bold text-xl">Address</h1>
          <p className="text-lg  mt-2 px-20">Basic IT Lab , Third floor , CS-IT block , Ajay Kumar Garg Engineering College , Ghaziabad-201009</p>
        </div> */}

      </motion.div>
       {/* <div className="add border-  bottom-5 z-[100] text-white p-24 border-white  w-full">
        <div className="div">
          <h1 className="font-bold text-2xl">Adress</h1>
          <p>Basic IT Lab , Third floor , CS-IT block , Ajay Kumar Garg Engineering College , Ghaziabad-201009</p>
        </div>
        <div className="div mt-10">
          <h1 className="font-bold text-2xl">Email</h1>
          <p>cloudComputing@akgec.ac.in</p>
        </div>

      </div>  */}
    </div>
  );
};

const Form = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMsg] = useState("");
  const [recaptchaResponse, setRecaptcharesponse] = useState("");
  const reset = useRef()
  const [loading, setLoading] = useState(false);


  const handleRecaptchaChange = (token) => {
  //  console.log(token);
   setRecaptcharesponse(token)
   
  }

  const handleForm = async (e) => {
    e.preventDefault();
    const formdata = {
      Name,
      email,
      phone,
      message,
      recaptchaResponse
    };
    // console.log(formdata);

    if (valid()) {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://website-9egw.onrender.com/api/contact",
          formdata,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast.success(response.data.message);
        clear();
      } catch (error) {
        if (error.message === "Network Error") {
          toast.error(error.message);
        }
        // console.log(error.response.data.error);
        if (
          error.response.data.error ===
          "Contact validation failed: Name: Path `Name` is required., email: Path `email` is required., phone: Path `phone` is required., message: Path `message` is required."
        ) {
          toast.error("All details are  required");
        }
        if (
          error.response.data.error ===
          "Contact validation failed: email: Path `email` is required., phone: Path `phone` is required., message: Path `message` is required."
        ) {
          toast.error("Email , phone number and message are required");
        } else if (
          error.response.data.error ===
          "Contact validation failed: phone: Path `phone` is required., message: Path `message` is required."
        ) {
          toast.error("phone number and message are required");
        } else if (
          error.response.data.error ===
          "Contact validation failed: Name: Path `Name` is required."
        ) {
        } else if (
          error.response.data.error ===
          "Contact validation failed: Name: Path `Name` is required."
        ) {
          toast.error("Name is required");
        } else if (
          error.response.data.error ===
          "Contact validation failed: email: Path `email` is required."
        ) {
          toast.error("Email is required");
        } else if (
          error.response.data.error ===
          "Contact validation failed: message: Path `message` is required."
        ) {
          toast.error("Message is required");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  function valid() {
    if (Name) {
      if (/\d/.test(Name)) {
        toast.error("Name can't contain numbers.");
        return false;
      }
    }
    if (phone) {
      if (phone.length > 11) {
        toast.error("Invalid mobile number");
        return false;
      } else if (phone.length == 11 && !phone.startsWith("0")) {
        toast.error("Invalid mobile number");
        return false;
      }
    }
    return true;
  }
  function clear() {
    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setMsg("");
      reset.current.reset()
    }, 1000);
  }
  return (
    <>
      <ToastContainer />
      {/* lg:bg-[#111122] */}

      <div className="flex justify-center z-0 lg:border-2 pb-20  border-r-0   sm:border-violet-500 lg:absolute right-0 lg:bg-black  rounded-l-[6vmin] items-center text-white  w-full md:w-1/2 h-[100vh] bg-yellow- flex-col sm:h-auto md:h-screen p-2">
        <Particles className="z-40" />
        <div className="text flex justify-center items-center flex-col">
          <p className="sm:text-3xl text-2xl mb-7 text-center font-poppins font-bold">
            Welcome to Cloud Computing
          </p>
          {/* <p className="text-xl mt-4 m-2 mb-2 sm:text-xl">
            Have any questions? Feel free to reach out to us
          </p> */}
        </div>

        <form
          className="flex justify-center items-center   max-[800px]:w-[70vw] flex-col border- border-white h-[70vh]  md:w-[30vw] p-0  md:p-7"
          onSubmit={handleForm}
        >
          <h1 className="text-2xl m-2 font-bold font-rubik mb-3 mt-10 tracking-wider">
            Contact Us
          </h1>
         
          <div className="email mt-3 w-full">
            <div className="email  flex flex-col gap-2">
              <input
                type="text"
                id="ipt1"
                value={Name}
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="w-[100%] h-[7vh] bg-[#161D29] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              />
            </div>
          </div>

        

          <div className="email mt-3 w-full">
            <div className="email  flex flex-col gap-2">
              <input
                type="email"
                id="ipt2"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-[100%] h-[7vh] bg-[#161D29] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              />
            </div>
          </div>

         

          <div className="email mt-3 w-full">
            <div className="email  flex flex-col gap-2">
              <input
                type="number"
                id="ipt3"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="w-[100%] h-[7vh] bg-[#161D29] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              />
            </div>
          </div>

        

          <div className="email mt-3 w-full">
            <div className="email  flex flex-col gap-2">
              <textarea
                type="number"
                id="ipt4"
                required
                value={message}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Enter your message"
                className="w-[100%] h-36 p-2 bg-[#161D29] placeholder:font-[600] pl-3 rounded-xl shadow-[0px_1px_2px_rgba(255,255,255,0.6)]"
              />
            </div>
          </div>

          <div className="block gap-2 mt-4">
            <div className="flex justify-center items-center mt-3 z-50">
              <ReCAPTCHA
                sitekey="6Ldq7wErAAAAAKiaKfx5znCYkSXxs7Tkqdr40Ks6"
                onChange={handleRecaptchaChange}
                className="cursor-pointer "
                ref={reset}
              />
            </div>
          </div>


          {loading ? (
            <Spinner />
          ) : (
            <button className="" type="submit">
              <ShineBorder
                borderRadius={4}
                borderWidth={0.5}
                duration={3}
                color={["#ffffff", "#3B0B59"]}
                className="mt-8 text-white text-2xl   hover:scale-110 font-jetbrains rounded-2xl  transition-all ease-in-out duration-1000  cursor-pointer tracking-wider font-bold"
              >
                Submit
              </ShineBorder>
            </button>
          )}
        </form>
        <Particles className="z-40" />
      </div>
    </>
  );
};
