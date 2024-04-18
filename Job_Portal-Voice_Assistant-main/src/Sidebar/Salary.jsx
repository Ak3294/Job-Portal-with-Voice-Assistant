import React from "react";
import InputField from "../components/InputField";
import '../App.css'

const Salary = ({ handleChange }) => {
  const handleRadioChange = (e) => {
    handleChange(e.target.value); // Pass the selected value to the parent component
  };

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>

      {/* Salary Range Input Fields */}
      <div className="salary-options-container">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="salaryRange"
            value=""
            onChange={handleRadioChange} // Use handleRadioChange for radio input
          />
          <span className="checkmark"></span>All
        </label>

        {/* Input Fields for Salary Ranges */}
        <div className="salary-options">
          <InputField
            handleChange={handleChange}
            value={300000}
            title="< 300k"
            name="salaryRange"
          />
          <InputField
            handleChange={handleChange}
            value={500000}
            title="< 500k"
            name="salaryRange"
          />
          <InputField
            handleChange={handleChange}
            value={800000}
            title="< 800k"
            name="salaryRange"
          />
          <InputField
            handleChange={handleChange}
            value={1000000}
            title="< 1000k"
            name="salaryRange"
          />
          <InputField
            handleChange={handleChange}
            value={1300000}
            title="< 1300k"
            name="salaryRange"
          />
          <InputField
            handleChange={handleChange}
            value={1700000}
            title="< 1700k"
            name="salaryRange"
          />
        </div>
      </div>
    </div>
  );
};

export default Salary;
