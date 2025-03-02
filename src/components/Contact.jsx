
import React, { useEffect } from "react";
import video from "../images/contactvideo.mp4";
import ShimmerButton from "./ui/shimmer-button";
import Particles from "./ui/particles";
import { useState } from "react";
import ShineBorder from "./ui/shine-border";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "./Spinner";
import { motion } from "framer-motion";

export const Contact = () => {
   useEffect(() => {
      window.scrollTo({
        top : 0,
        behavior : "smooth"
      })
    })
  return (
    <>
      <Particles />
      <div
        id="contact"
        className="md:h-screen z-50 h-auto w-screen bg-red- max-w-90vw md:max-w-[90vw] m-auto p-4 block md:flex"
      >
        <Video />
        <Form />
      </div>
    </>
  );
};

const Video = () => {
  return (
    <div className="flex justify-center items-center flex-col w-auto md:w-1/2 bg-green- h-auto md:h-[100vh]">
      <video
        className="w-full z-40   h-auto md:h-[100vh]"
        autoPlay
        loop
        src={video}
      ></video>
    </div>
  );
};

const Form = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMsg] = useState("");
  const [loading , setLoading] = useState(false)
    

  const handleForm = async (e) => {
    e.preventDefault();
    const formdata = {
      Name,
      email,
      phone,
      message,
    };
    console.log(formdata);
    
    if(valid()){
      setLoading(true)
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
      clear()
      // console.log(response.data);
      // console.log(response.data.message);
    } catch (error) {
      if(error.message === "Network Error"){
        toast.error(error.message)
      }
      console.log(error.response.data.error);
      if (
        error.response.data.error ===
        "Contact validation failed: Name: Path `Name` is required., email: Path `email` is required., phone: Path `phone` is required., message: Path `message` is required."
      ) {
        toast.error("All details are  required");
      } 
      if(error.response.data.error === "Contact validation failed: email: Path `email` is required., phone: Path `phone` is required., message: Path `message` is required."){
        toast.error("Email , phone number and message are required");
      }
      else if(error.response.data.error ===  
        "Contact validation failed: phone: Path `phone` is required., message: Path `message` is required."
        ){
        toast.error("phone number and message are required");
      }
      else if (
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
    }
    finally{
      setLoading(false)
    }
  }
  };


  function valid(){
    // if(Name==="" || phone==="" || email==="" || message===""){
    //   toast.error("All fields are required");
    // }
    if(Name){
      if (/\d/.test(Name)) {
        toast.error("Name can't contain numbers.");
        return false;
      }
  
  }
    if(phone){
    if(phone.length != 10){
      toast.error("Invalid mobile number")
      return false
    }
  }
    return true
  }
 function clear(){

  setTimeout(() => {
    setName("")
    setEmail("")
    setPhone("")
   setMsg("")
  },3000)
 }
  return (
    <>
      <ToastContainer />
      <div className="flex justify-center bg- rounded-l-[6vmin] items-center text-black  w-full md:w-1/2 bg-yellow- flex-col sm:h-auto md:h-screen p-2">
        <div className="text flex justify-center items-center flex-col">
          <p className="sm:text-3xl text-2xl text-center font-poppins text-white font-bold">
            Welcome to Cloud Computing
          </p>
          {/* <p className="mt-4 sm:text-2xl text-center font-poppins text-xl">
            Lorem, ipsum dolor
          </p> */}
          <p className="text-white text-xl mt-4 sm:text-2xl">Lorem, ipsum dolor.</p>
        </div>

        <form
          className="flex justify-center items-center max-[800px]:w-[70vw] flex-col border- border-white h-[70vh] w-full md:w-[30vw]  md:p-7"
          onSubmit={handleForm}
        >
          <h1 className="text-3xl font-bold font-rubik text-white mb-3 tracking-wider">
            Contact Us
          </h1>
          <input
            value={Name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="border-white border-2  rounded-md font-bolder px-3 text-white py-3 bg-black w-full mt-3"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="border-white border-2  rounded-md font-bolder px-3 text-white py-3 bg-black w-full mt-3"
            placeholder="Email"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="number"
            className="border-white border-2  rounded-md font-bolder px-3 text-white py-3 bg-black w-full mt-3"
            placeholder="Phone Number"
          />
          <textarea
            value={message}
            onChange={(e) => setMsg(e.target.value)}
            className="border-white border-2  rounded-md font-bolder px-3 text-white h-36 pt-2 bg-black  w-full mt-3"
            placeholder="Enter your message"
          ></textarea>

          {loading ? <Spinner/> : (
          <button className="" type="submit">
            <ShineBorder
              borderRadius={4}
              borderWidth={0.5}
              duration={3}
              color={["#ffffff", "#3B0B59"]}
              className="mt-8 text-white text-xl hover:scale-110 font-jetbrains transition-all ease-in-out duration-1000  cursor-pointer tracking-wider font-bold"
            >
              Submit
            </ShineBorder>
          </button>
          )}
        </form>
      </div>
    </>
  );
};
