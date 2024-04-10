import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/users.js";
import "./SignUp.css";

const Register = (props) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    is_developer: false,
    isError: false,
    errorMsg: "",
    role: "FS"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e.target.value)
    console.log(form.role)
    const newValue = type === "checkbox" ? checked : value;

    setForm({
      ...form,
      [name]: newValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userData = await signUp(form);
      // Assuming setUser is a function to set user data
      // setUser(userData);

      navigate("/home");
    } catch (error) {
      console.error(error);
      setForm((prevForm) => ({
        ...prevForm,
        isError: true,
        errorMsg: "Invalid Credentials",
        // Clearing password fields on error
        password: "",
        confirmPassword: "",
      }));
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";

    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Join Us</button>;
    }
  };

  return (
    <div className="signupContainer">
      <div className="signUpForm">
        <form className="homeForm" onSubmit={handleSubmit}>
          <h1 className="signUpHeader">Sign Up</h1>
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            placeholder="Enter Your First Name"
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />
          <input
            type="text"
            name="last_name"
            value={form.last_name}
            placeholder="Enter Your Last Name"
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />
          <input
            type="text"
            name="username"
            value={form.username}
            placeholder="Enter Username"
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter Email"
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="Enter Password"
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />
          <input
            type="text"
            name="profile_picture"
            value={form.profile_picture}
            placeholder="Enter Profile Picture URL"
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />

          <input
            type="text"
            name="description"
            value={form.description}
            placeholder="Enter Description"
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />

          <input
            type="text"
            name="location"
            value={form.location}
            placeholder="Enter Location"
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />

          <input
            type="text"
            name="portfolio_link"
            value={form.portfolio_link}
            placeholder="Enter Portfolio Link"
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="signupInput"
          >
            <option value="FS">Full Stack Developer</option>
            <option value="BE">Back End Developer</option>
            <option value="FE">Front End Developer</option>
            <option value="UX">User Experience Designer</option>
          </select>

          <div className="signUpCheckbox">
            <p>Are you a developer?</p>
            <input
              type="checkbox"
              name="is_developer"
              checked={form.is_developer}
              onChange={(e) => setForm({ ...form, is_developer: e.target.checked })}
              className="signupInput"
            />
          </div>
          {renderError()}
        </form>
      </div>
    </div>
  );
};

export default Register;
