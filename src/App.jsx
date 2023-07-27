import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="flex justify-between ">
      <div className="w-[50%] relative">
        <img
          src="/signupbg.png"
          alt="react logo"
          className="w-[100%] h-[1370px]"
        />
        <p className="absolute right-0 px-8 font-semibold rounded-l-[22px] py-2 text-xl bg-white top-8">
          Register
        </p>
        <div className="absolute bottom-96 left-8 flex flex-col items-start justify-start">
          <h1 className="text-[#4D4747] text-3xl">Let's Get</h1>
          <h1 className="uppercase text-[80px] font-bold">Started</h1>
          <p className="text-[#4D4747] w-[90%] ">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis su
          </p>
        </div>
      </div>

      <div className="w-[50%] flex flex-col gap-2  items-center">
        <img
          src="/logo.png"
          alt="react logo"
          className="w-[147px] h-[119px] object-contain"
        />

        <div className="flex w-[90%] mx-auto  gap-1 flex-col">
          <p className="text-[#565151] uppercase  ">First Name</p>
          <input
            type="text"
            placeholder="Full Name"
            className="w-[100%]  h-[50px]  bg-[#F0F2F2] p-2"
          />
        </div>
        <div className="flex w-[90%] mx-auto  gap-1 flex-col">
          <p className="text-[#565151] uppercase  ">Last Name</p>
          <input
            type="text"
            placeholder="Full Name"
            className="w-[100%]  h-[50px]  bg-[#F0F2F2] p-2"
          />
        </div>

        <div className="flex w-[90%] mx-auto  gap-1 flex-col">
          <p className="text-[#565151] uppercase  ">ID Number</p>
          <input
            type="text"
            placeholder="Full Name"
            className="w-[100%]  h-[50px]  bg-[#F0F2F2] p-2"
          />
        </div>
        <div className="flex w-[90%] flex-row  gap-6 justify-between">
          <div className="flex  w-[50%] mx-auto  gap-1 flex-col">
            <p className="text-[#565151] uppercase  ">Last Name</p>
            <input
              type="text"
              placeholder="Full Name"
              className="w-[100%]  h-[50px]  bg-[#F0F2F2] p-2"
            />
          </div>

          <div className="flex  w-[50%] mx-auto  gap-1 flex-col">
            <p className="text-[#565151] uppercase  ">Last Name</p>
            <input
              type="text"
              placeholder="Full Name"
              className="w-[100%]  h-[50px]  bg-[#F0F2F2] p-2"
            />
          </div>
        </div>

        <div className="flex w-[90%] mx-auto  gap-1 flex-col">
          <p className="text-[#565151] uppercase  ">Email</p>
          <input
            type="text"
            placeholder="Full Name"
            className="w-[100%]  h-[50px]  bg-[#F0F2F2] p-2"
          />
        </div>

        <div className="flex w-[90%] mx-auto  gap-1 flex-col">
          <p className="text-[#565151] uppercase  ">Your Role</p>
          <select
            type="text"
            placeholder="Full Name"
            className="w-[100%]  h-[50px]  bg-[#F0F2F2] p-2"
          >
            <option>Student</option>
            <option>Teacher</option>
            <option>Parent</option>
          </select>
        </div>

        <div className="flex w-[90%] mx-auto  gap-1 flex-col">
          <p className="text-[#565151] uppercase  ">Phone Number</p>
          <input
            type="text"
            placeholder="Full Name"
            className="w-[100%]  h-[50px]  bg-[#F0F2F2] p-2"
          />
        </div>
        <div className="flex w-[90%] mx-auto  gap-1 flex-col">
          <p className="text-[#565151] uppercase  ">Password</p>
          <input
            type="text"
            placeholder="Full Name"
            className="w-[100%]  h-[50px]  bg-[#F0F2F2] p-2"
          />
        </div>

        <div className="flex w-[90%] mx-auto  gap-1 flex-col">
          <p className="text-[#565151] uppercase  ">Confirm Password</p>
          <input
            type="text"
            placeholder="Full Name"
            className="w-[100%]  h-[50px]  bg-[#F0F2F2] p-2"
          />
        </div>

        <div className="flex flex-col w-[90%] justify-center items-center">
          <button className="bg-[#00AEEF] w-[100%] text-white h-[51px] rounded-[10px]">
            Register
          </button>
        </div>

        <p className="text-center">
          Already have an account? <span className="text-[#00AEEF]">Login</span>
        </p>

        <div className="w-[70%] mx-auto flex justify-between items-center">
          <p className="bg-[#E5E5E5] w-[40%] h-[1px]"></p>
          <p className="text-[#565151]">Or</p>
          <p className="bg-[#E5E5E5] w-[40%] h-[1px]"></p>
        </div>
        <div>
          <img src="/google.png" alt="google logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
