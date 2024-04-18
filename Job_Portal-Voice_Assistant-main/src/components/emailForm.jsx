import React, { useEffect, useState } from 'react';
import LoadingBar from './LoadingBar';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobtitle: '',
    message: '',
  });

  const [dropdownOpen, setDropdownOpen] = useState(false); // Define dropdownOpen state
  const [buttonClicked, setButtonClicked] = useState(false); // State to track button click
  const [btnContent, setBtnContent] = useState('Click to submit')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    setButtonClicked(true);

    fetch('http://localhost:5000/api/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log(data); // Handle response from server
        // Optionally reset form fields after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          jobtitle: '',
          message: '',
        });
        setButtonClicked(false);
        setBtnContent('Response Submitted');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        setBtnContent('Try Again')
        setButtonClicked(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          jobtitle: '',
          message: '',
        });
      });
    setTimeout(() => {
      setBtnContent('Submit')
    }, 6000);
  };



  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdownOpen state
  };

  return (
<div>
      <button
        onClick={handleDropdownToggle}
        style={dropdownOpen ? styles.toggleButtonActive : styles.toggleButton}
      >
        {dropdownOpen ? "Hide Form" : "Show Form"}
      </button>
      {dropdownOpen && (
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Apply with Us!</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroupHorizontal}>
              <label style={styles.labelHorizontal}>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.inputHorizontal} required />
            </div>
            <div style={styles.formGroupHorizontal}>
              <label style={styles.labelHorizontal}>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.inputHorizontal} required />
            </div>
            <div style={styles.formGroupHorizontal}>
              <label style={styles.labelHorizontal}>Phone:</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={styles.inputHorizontal} required />
            </div>
            <div style={styles.formGroupHorizontal}>
              <label style={styles.labelHorizontal}>Job Title:</label>
              <input type="text" name="jobtitle" value={formData.jobtitle} onChange={handleChange} style={styles.inputHorizontal} required />
            </div>

            <div style={styles.formGroupHorizontal}>
              <label style={styles.labelHorizontal}>Message:</label>
              <textarea placeholder="Type the message you want to convey with the company. Please mention public resume link." name="message" value={formData.message} onChange={handleChange} style={styles.textareaHorizontal} required />
            </div>
            <button type="submit" style={{ backgroundColor: buttonClicked ? 'green' : 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} >{btnContent}</button>
      
          </form>      
        </div>
      )}
    </div>



  );
};

const styles = {
  formContainer: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formGroupHorizontal: {
    display: 'flex',
    marginBottom: '20px',
    width: '100%',
    alignItems: 'center'
  },
  labelHorizontal: {
    minWidth: '120px',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555'
  },
  inputHorizontal: {
    flex: '1',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  },
  textareaHorizontal: {
    flex: '1',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    minHeight: '100px'
  },
  submitButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'blue',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '20px'
  },
  toggleButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'blue',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '20px'
  },
  toggleButtonActive: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#0066b2',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '20px'
  }
};

export default EmailForm;
