import React, { useState } from 'react';
import { FaEnvelope, FaFacebook, FaGoogle } from 'react-icons/fa6';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    // Form is valid, clear any previous errors
    setError('');
    // Simulate signup process (you would replace this with your actual signup logic)
    const formData = {
      fname: firstName,
      lname: lastName,
      email: email,
      phonenum: phone,
      pass: password
    }

    fetch('http://localhost:5000/api/signup', {
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
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });

    setTimeout(() => {
      setSuccessMessage('Signup successful!');
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Sign Up</h2>
        {error && <div style={styles.error}>{error}</div>}
        {successMessage && <div style={styles.success}>{successMessage}</div>}
        <form onSubmit={handleSignup}>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="fullName">
              Full Name
            </label>
            <input
              required
              style={styles.input}
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">
              Email Address<span style={{ color: 'red' }}>*</span>
            </label>
            <input
              required
              style={styles.input}
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="phone">
              Phone Number
            </label>
            <input
              required
              style={styles.input}
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="phone">
              Password
            </label>
            <input
              required
              style={styles.input}
              id="password"
              type="password"
              placeholder="Enter your password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button style={styles.button} type="submit">
            Sign Up
          </button>
          {/* Icon buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <FaGoogle style={{ fontSize: '24px', marginRight: '10px', cursor: 'pointer', color: '#DB4437' }} />
            <FaFacebook style={{ fontSize: '24px', marginRight: '10px', cursor: 'pointer', color: '#1877F2' }} />
            <FaEnvelope style={{ fontSize: '24px', cursor: 'pointer', color: '#636363' }} />
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {

    display: 'flex', flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f3f4f6',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
    color: '#4a90e2',
  },
  error: {
    color: '#ff0000',
    marginBottom: '10px',
  },
  success: {
    color: '#008000',
    marginBottom: '10px',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#333333',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #cccccc',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4a90e2',
    color: '#ffffff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default SignupPage;
