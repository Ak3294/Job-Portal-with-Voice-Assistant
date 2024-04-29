import React, { useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import EmailForm from "./emailForm";
import { Link } from "react-router-dom";
const ApplyBanner = ({ query, handleInputChange }) => {
  const [isListening, setIsListening] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
    // Add functionality to start/stop listening to the microphone here
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Apply Now with the{" "}
        <span style={{ color: "blue" }}>Instant Resume Sending</span> Feature.
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands of job opportunities in the engineering and computer science
        sector will help us to grow ahead!
      </p>

      <div className="flex rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within-ring-inset focus-within:ring-indigo-600 w-full relative">
        <input
          type="text"
          name="searchQuery"
          id="searchQuery"
          placeholder="Search..."
          className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-grey-900 placeholder:text-grey-400 focus:right-0 sm:text-sm sm:leading-6"
          onChange={handleInputChange}
          value={query}
        />
        <FiSearch className="absolute mt-2.5 ml-2 text-grey-400" />
        <Link
          to="/assistance"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
        >
          <FaMicrophone
            className={`text-${isListening ? "blue" : "black"}`}
            onClick={toggleListening}
          />
        </Link>
      </div>

      <EmailForm></EmailForm>
    </div>
  );
};

export default ApplyBanner;
