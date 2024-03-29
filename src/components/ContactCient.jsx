"use client";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { MdAttachEmail, MdEmail } from "react-icons/md";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function ContactClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // State to hold the selected option

  const options = [
    "Less than 100k",
    "100k to 200k",
    "200k to 500k",
    "500k to 800k",
    "800k to 1200k",
    "More than 1200K",
  ]; // Your options

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <>
      {/* Contact Section */}
      <div className="flex gap-3 mb-20 flex-col-reverse md:flex-row text-white w-11/12 mx-auto">
        {/* Right */}
        <div className="h-min mb-20 md:mb-0 md:w-3/6 bg-black text-lg sm:text-xl">
          <div className="pt-10">
            <p className="px-12 mb-4 flex flex-row items-center space-x-5">
              <div className="text-2xl">
                <IoCall />
              </div>
              <div className="call">
                <b>IN </b> <a href="tel :+91 93478234578">+91 93478234578</a>
              </div>
            </p>

            <p className="px-12 mb-4">
              <a
                className="flex flex-row items-center space-x-5"
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo text-3xl">
                  <IoLogoWhatsapp />
                </div>
                <span>+91 9347823457</span>
              </a>
            </p>

            <p className="px-12 mb-4">
              <a
                className="flex flex-row items-center space-x-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo text-3xl">
                  <GrMail />
                </div>
                <span>info@diamol.in</span>
              </a>
            </p>

            <p className="px-12 mb-12">
              <a
                className="flex flex-row items-center space-x-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo text-3xl">
                  <FaHome />
                </div>
                <span>Film Colony, Vijayawada Andhra Pradesh, India</span>
              </a>
            </p>

            <div className="h-[25rem]" style={{ width: "100%" }}>
              <iframe
                width="100%"
                height={"100%"}
                scrolling="no"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Vijayawada%20Andhra%C2%A0India+(Diamol)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/population/">
                  Population calculator map
                </a>
              </iframe>
            </div>
          </div>
        </div>

        {/* Left */}
        <div className=" text-gray-800 flex flex-col py-8 md:p-8 md:w-3/6">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">
            Contact Form
          </h2>

          <form className="flex flex-col space-y-4">
            <div className="flex gap-5 flex-row  items-center justify-between">
              <div className="w-full relative">
                <input
                  type="text"
                  id="name"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                />

                <label
                  htmlFor="name"
                  className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Name
                </label>
              </div>
              <div className="w-full relative">
                <input
                  type="text"
                  id="email"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                />

                <label
                  htmlFor="email"
                  className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Email
                </label>
              </div>
            </div>

            <div className="flex gap-5 flex-row  items-center justify-between">
              <div className="w-full relative">
                <input
                  type="text"
                  id="phone"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                />

                <label
                  htmlFor="phone"
                  className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Phone
                </label>
              </div>
              <div className="w-full relative">
                <input
                  type="text"
                  id="city"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                />

                <label
                  htmlFor="city"
                  className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  City
                </label>
              </div>
            </div>

            <div className="flex gap-5 flex-row  items-center justify-between">
              <div className="w-full relative">
                <input
                  type="text"
                  id="city"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                />

                <label
                  htmlFor="city"
                  className="absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Event Date
                </label>
              </div>
              <div className="w-full relative">
                <input
                  type="text"
                  id="city"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder=" "
                />

                <label
                  htmlFor="city"
                  className="absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Guest Count
                </label>
              </div>
            </div>

            <div className="flex gap-5 flex-row items-center justify-between">
              <div className="w-full relative">
                <div className="relative">
                  <input
                    type="text"
                    id="city"
                    value={selectedOption}
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none cursor-pointer focus:ring-0 focus:border-black peer"
                    placeholder="Select Budget"
                    readOnly
                    onClick={toggleDropdown}
                  />
                  <div className="absolute  inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className={`w-5 h-5 text-gray-500  ${isOpen ? "transform rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
                {isOpen && (
                  <div
                    onClick={toggleDropdown}
                    className="cursor-pointer absolute z-10 mt-1 w-full bg-white border border-gray-300  rounded-md shadow-lg"
                  >
                    <div className="py-1">
                      {options.map((option, index) => (
                        <button
                          key={index}
                          className="block w-full text-left px-4 py-2 text-gray-800"
                          onClick={() => selectOption(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows={6}
                className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
              />

              <label
                htmlFor="message"
                className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Tell us more about You
              </label>
            </div>

            <button
              type="submit"
              className="bg-black text-white w-full py-2 px-4 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
