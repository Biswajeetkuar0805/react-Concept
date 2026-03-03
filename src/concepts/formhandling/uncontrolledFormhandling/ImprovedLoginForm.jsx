import React, { useRef } from "react";
import { FaGoogle, FaFacebookF, FaUser, FaLock } from "react-icons/fa";
import "./ImprovedLoginForm.css";

const ImprovedLoginForm = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      alert("All fields are required");
      return;
    }

    console.log("Login submitted:", { username, password });
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left Section - Form */}
        <div className="login-left">
          <div className="login-content">
            <h1 className="login-title">LOGIN</h1>
            <p className="login-subtitle">How to I get started lorem ipsum dolor sit?</p>

            <form onSubmit={handleSubmit} className="login-form">
              {/* Username Input */}
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="Username"
                  ref={usernameRef}
                  className="form-input"
                />
              </div>

              {/* Password Input */}
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  className="form-input"
                />
              </div>

              <button type="submit" className="login-button">
                Login Now
              </button>
            </form>

            {/* Social Login Section */}
            <div className="social-login">
              <p className="social-title">
                <span className="social-text-bold">Login</span> with Others
              </p>

              <button type="button" className="social-button google-button">
                <FaGoogle className="social-icon" />
                Login with Google
              </button>

              <button type="button" className="social-button facebook-button">
                <FaFacebookF className="social-icon" />
                Login with Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="login-right">
          <div className="image-container">
            <div className="decorative-circle circle-top"></div>
            <div className="decorative-circle circle-bottom"></div>
            
            {/* You can replace this with actual image */}
            <div className="illustration">
              <div className="person-placeholder">
                <div className="person-head"></div>
                <div className="person-body"></div>
                <div className="tablet"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedLoginForm;