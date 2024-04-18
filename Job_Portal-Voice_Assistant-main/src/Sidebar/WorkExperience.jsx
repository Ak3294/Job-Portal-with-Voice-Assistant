import React from 'react'
import InputField from '../components/InputField'

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Work Experience</h4>
    <div>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handleChange}
        />
        <span className="checkmark"></span>Internship
      </label>

      <InputField handleChange={handleChange} value="intership" title="Entry level" name="test"/>
      <InputField handleChange={handleChange} value="associate" title="Associate" name="test"/>
      <InputField handleChange={handleChange} value="mid-senior level" title="Mid-Senior level" name="test"/>
      <InputField handleChange={handleChange} value="director" title="Director" name="test"/>
      <InputField handleChange={handleChange} value="executive" title="Executive" name="test"/>
    </div>
  </div>
    
  )
}

export default WorkExperience