import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({ handleChange }) => {
  return (
    <div>
    <h4 className="text-lg font-medium mb-2">Notice Period</h4>
    <div>
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

      <InputField handleChange={handleChange} value="london" title="Any time" name="test"/>
      <InputField handleChange={handleChange} value="brussels" title="Past month" name="test"/>
      <InputField handleChange={handleChange} value="san francisco" title="Past week" name="test"/>
      <InputField handleChange={handleChange} value="seattle" title="Past 24 hours" name="test"/>
    </div>
  </div>
  )
}

export default JobPostingData