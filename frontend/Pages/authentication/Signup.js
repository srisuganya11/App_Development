import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../Assets/CSS/Signup.css';
import bgVideo from '../../Assets/Images/bg1.mp4';

function SignUp() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const phoneNumber = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!name.current.value || !email.current.value || !password.current.value || !phoneNumber.current.value || !confirmPassword.current.value) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (password.current.value.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }

    if (password.current.value !== confirmPassword.current.value) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/api/v1/user/register', {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
        phone: phoneNumber.current.value,
      });
      setLoading(false);
      navigate('/');
    } catch (error) {
      setLoading(false);
      setErrorMessage("Failed to register. Please try again.");
    }
  };

  return (
    <div className="signup-background">
      <video autoPlay loop muted className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="signup-container">
        <h1>Create Account</h1>
        <div className="input_space">
          <input placeholder="Name" type="text" ref={name} />
        </div>
        <div className="input_space">
          <input placeholder="Email" type="email" ref={email} />
        </div>
        <div className="input_space">
          <input placeholder="Phone Number" type="tel" ref={phoneNumber} />
        </div>
        <div className="input_space">
          <input placeholder="Password" type="password" ref={password} />
        </div>
        <div className="input_space">
          <input placeholder="Confirm Password" type="password" ref={confirmPassword} />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleClick} disabled={loading}>
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <p className="form-text">
          Already have an account? <span onClick={() => navigate('/')}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
