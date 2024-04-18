import React from "react";
import InputField from "../components/InputField";
import '../App.css'


const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div className="location-options-container">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <div className="location-options">
          <InputField handleChange={handleChange} value="Bengaluru" title="Bengaluru" name="test"/>
          <InputField handleChange={handleChange} value="noida" title="Noida" name="test"/>
          <InputField handleChange={handleChange} value="chennai" title="Chennai" name="test"/>
          <InputField handleChange={handleChange} value="hyderabad" title="Hyderabad" name="test"/>
          <InputField handleChange={handleChange} value="mumbai" title="Mumbai" name="test"/>
        </div>
      </div>
    </div>
  );
};

export default Location;
