import React from "react";
import Map from "./Map";

const Contact = () => {
  return (
    <>
     
      <div
        id="contact"
        className="flex  justify-center  items-center bg-gray-1000 flex-col h-screen w-full sm:max-w-[90vw] m-auto"
      >
        <div className="text-white flex justify-center items-center flex-col w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 shadow-xl shadow-slate-900 bg-gradient-to-t from-stone-800 to-transparent h-auto py-5 rounded-2xl m-10">
          <h1 className="text-4xl  block text-center">
            Let's connect Networks
          </h1>
          <form action="" className="m-4">
            <div className="md:flex block gap-2 justify-center items-center text-center">
              <input
                type="text"
                className="border-white border-2  rounded-md font-bolder px-3 md:w-6/12 w-full text-white py-2 mt-3 bg-black"
                placeholder="First Name"
              />
              <input
                className="border-white border-2  rounded-md font-bolder  md:w-6/12 w-full px-3  text-white py-2 bg-black mt-3"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="border-white border-2  rounded-md font-bolder px-3 text-white py-2 bg-black w-full mt-3"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                className="border-white border-2  rounded-md font-bolder px-3 text-white py-2 bg-black  w-full mt-3"
                placeholder="Phone Number"
              />
            </div>

            <textarea
              name=""
              className="border-white border-2  rounded-md font-bolder px-3 text-white h-28 pt-2 bg-black  w-full mt-3"
              placeholder="Enter your message"
              id=""
            ></textarea>
            <div className="flex justify-center items-center mt-3">
              <button className="h-10  w-full md:w-96 rounded-md bg-gradient-to-r from-violet-700 to-pink-600 mt-3 text-center">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Map/>
      

    {/* map */}

    {/* <div className="sm:w-1/2 w-full">
      <p className="text-3xl text-white">Map</p>
    </div> */}
    </>
  );
};

export default Contact;
