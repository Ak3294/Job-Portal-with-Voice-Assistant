import React from 'react'
import InputField from '../components/InputField'

const EmploymentEnvironment = ({handleChange}) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Employment Environment</h4>
      <div className="location-options-container">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>On-Site
        </label>

        <div className="location-options">
          <InputField handleChange={handleChange} value="hybrid" title="Hybrid" name="test"/>
          <InputField handleChange={handleChange} value="remote" title="Remote" name="test"/>

        </div>
      </div>
    </div>
  )
}

export default EmploymentEnvironment