import React, { useState } from 'react';
import logo from './images1/logo.jpg';
import backgroundImage from './images1/tgr.png';

const Register = () => {
  const [fullname, setFullname] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validateFullName(fullname) &&
      validateDOB(dob) &&
      validateUsername(username) &&
      validateEmail(email) &&
      validateMobile(mobile) &&
      validatePassword(password, confirmPassword)
    ) {
      console.log('Registration successful!');
    }
  };

  const validateFullName = (fullname) => {
    if (fullname.trim() === '') {
      alert('Please enter your full name');
      return false;
    }
    const fullnameRegex = /^[a-zA-Z]+$/;

    if (!fullnameRegex.test(fullname)) {
      alert('Please enter a valid full name');
      return false;
    }

    return true;
  };

  const validateDOB = (dob) => {
    if (dob.trim() === '') {
      alert('Please enter your date of birth');
      return false;
    }
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dobRegex.test(dob)) {
      alert('Please enter a valid date of birth in dd/mm/yyyy format');
      return false;
    }
    return true;
  };

  const validateEmail = (email) => {
    if (email.trim() === '') {
      alert('Please enter an email');
      return false;
    } else {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email');
        return false;
      }
    }
    return true;
  };

  const validateMobile = (mobile) => {
    if (mobile.trim() === '') {
      alert('Please enter a mobile number');
      return false;
    } else {
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number');
        return false;
      }
    }
    return true;
  };

  const validateUsername = (username) => {
    if (username.trim() === '') {
      alert('Please enter a username');
      return false;
    }

    const usernameRegex = /^[a-zA-Z0-9]{1,15}$/;

    if (!usernameRegex.test(username)) {
      alert('Username must contain a combination of only letters and numbers, and be less than 15 characters');
      return false;
    }

    return true;
  };

  const validatePassword = (password, confirmPassword) => {
    if (password.trim() === '') {
      alert('Please enter a password');
      return false;
    }

    if (confirmPassword.trim() === '') {
      alert('Please confirm your password');
      return false;
    }

    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{2}/;
    const lenRegex = 10;

    if (password.length < lenRegex) {
      alert(`Password must be at least ${lenRegex} characters long`);
      return false;
    }

    if (!uppercaseRegex.test(password)) {
      alert('Password must contain at least one uppercase letter');
      return false;
    }

    if (!numberRegex.test(password)) {
      alert('Password must contain at least one number');
      return false;
    }

    if (!specialCharRegex.test(password)) {
      alert('Password must contain at least TWO special characters');
      return false;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }

    return true;
  };

  return (
    <div>
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="Logo" style={{ width: '400px' }} />
        </div>
      </div>

      <div
        className="main-body"
        style={{
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f4f4f4',
          margin: '0',
          padding: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '800px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',
        }}
      >
        <div
          className="register-container"
          style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px black',
            maxWidth: '400px',
            width: '100%',
          }}
        >
          <h2>Register</h2>
          <div className="register-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullname">FullName</label>
                <input
                  type="text"
                  id="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email id</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile number</label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  id="pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmpass">Confirm Password</label>
                <input
                  type="password"
                  id="confirmpass"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="form-group">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;