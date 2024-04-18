import React, { useState } from 'react';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    education: '',
    experience: ''
  });

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
          experience: ''
        });
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        setFormData({
          name: '',
          email: '',
          phone: '',
          experience: ''
        });
      });

    // You can handle form submission here
    console.log("hello");
    // Reset form fields after submission if needed
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      education: '',
      experience: ''
    });
  };

  return (
    <div style={styles.formContainer}>
  
      <h2 style={styles.heading}>Reach to Us!</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroupHorizontal}>
          <label style={styles.labelHorizontal}>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.inputHorizontal} />
        </div>
        <div style={styles.formGroupHorizontal}>
          <label style={styles.labelHorizontal}>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.inputHorizontal} />
        </div>
        <div style={styles.formGroupHorizontal}>
          <label style={styles.labelHorizontal}>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={styles.inputHorizontal} />
        </div>
        {/* <div style={styles.formGroupHorizontal}>
          <label style={styles.labelHorizontal}>Resume:</label>
          <input type="file" name="resume" onChange={handleFileChange} style={styles.inputHorizontal} />
        </div> */}
        
        {/* <div style={styles.formGroupHorizontal}>
          <label style={styles.labelHorizontal}>Education:</label>
          <textarea name="education" value={formData.education} onChange={handleChange} style={styles.textareaHorizontal} />
      </div> */}
      
        <div style={styles.formGroupHorizontal}>
          <label style={styles.labelHorizontal}>Query:</label>
          <textarea name="experience" value={formData.experience} onChange={handleChange} style={styles.textareaHorizontal} />
        </div>

        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
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
    backgroundColor: '#4caf50',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '20px'
  },
};

export default EmailForm;
