import React, { useState } from 'react';
import { FaEnvelope, FaFacebook, FaGoogle } from 'react-icons/fa6';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    // Basic password validation
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Form is valid, clear any previous errors
    setError('');
    // Simulate signup process (you would replace this with your actual signup logic)
    setTimeout(() => {
      setSuccessMessage('Signup successful!');
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h3 style={styles.heading}>Login</h3>
        {error && <div style={styles.error}>{error}</div>}
        {successMessage && <div style={styles.success}>{successMessage}</div>}
        <form onSubmit={handleSignup}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="email">
              Email Address
            </label>
            <input
              style={styles.input}
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <input
              style={styles.input}
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button style={styles.button} type="submit">
            Sign Up
          </button>

          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <a href="/forgot-password" style={{ textDecoration: 'underline' }}>Forgot Password?</a>
          </div>

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
    display: 'flex',
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

export default LoginPage;
