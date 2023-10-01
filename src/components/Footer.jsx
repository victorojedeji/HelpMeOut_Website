import React from "react";
import logo from "../assets/logo-white.svg";

export default function Footer() {
  return (
    <footer className="p-[20px] md:p-[100px] flex flex-col md:flex-row items-start sm:items-center bg-[#0A0628] gap-[30px] sm:gap-[100px] md:gap-[150px] lg:gap-[250px]">
      <div className="flex items-center gap-[10px]">
        <img src={logo} alt="logo-white" className="w-[40px] h-[40px]" />
        <h1 className="block text-white">HelpMeOut</h1>
      </div>

      <div className="flex flex-col gap-y-8 sm:flex-row justify-between items-start sm:items-row w-full">
        <ul>
          <h6 className="text-white mb-8 text-base font-semibold">Menu</h6>
          <li className="font-normal text-base mb-6 text-white">Home</li>
          <li className="font-normal text-base mb-6 text-white">Converter</li>
          <li className="font-normal text-base mb-6 text-white">
            How it Works
          </li>
        </ul>

        <ul>
          <h6 className="text-white mb-8 text-base font-semibold">About us</h6>
          <li className="font-normal text-base mb-6 text-white">About</li>
          <li className="font-normal text-base mb-6 text-white">Contact Us</li>
          <li className="font-normal text-base mb-6 text-white">
            Privacy Policy
          </li>
        </ul>

        <ul>
          <h6 className="text-white mb-8 text-base font-semibold">
            Screen Record
          </h6>
          <li className="font-normal text-base mb-6 text-white">
            Browser Window
          </li>
          <li className="font-normal text-base mb-6 text-white">Desktop</li>
          <li className="font-normal text-base mb-6 text-white">Application</li>
        </ul>
      </div>
    </footer>
  );
}
