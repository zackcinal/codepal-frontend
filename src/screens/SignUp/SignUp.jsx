import "./SignUp.css";
import Navbar from "../../components/NavBar/Navbar.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/users.js";

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
    role: "FS",
    description: "", 
    location: "", 
    portfolio_link: "", 
    profile_picture: null 
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setForm({
      ...form,
      [name]: newValue,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Assuming only one file is selected
    setForm({
      ...form,
      profile_picture: file,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userData = await signUp(form);
      navigate("/signin");
    } catch (error) {
      console.error(error);
      setForm((prevForm) => ({
        ...prevForm,
        isError: true,
        errorMsg: "Invalid Credentials",
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
      return <button type="submit" className="signUpButton">Join Us</button>;
    }
  };

  return (
    <div className="signupContainer">
      <Navbar />
      <div className="signUpFormContainer">
        <h1 className="signUpHeader">Sign Up</h1>
        <form className="signupForm" onSubmit={handleSubmit}>
          <label htmlFor="first_name" className="signupInputLabel">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={form.first_name}
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
            style={{ textTransform: 'capitalize' }}
          />
          <label htmlFor="last_name" className="signupInputLabel">Last Name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={form.last_name}
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
            style={{ textTransform: 'capitalize' }}
          />
          <label htmlFor="username" className="signupInputLabel">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={form.username}
            onChange={handleChange}
            autoComplete="off"
            className="signupInput"
          />
          <label htmlFor="email" className="signupInputLabel">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />
          <label htmlFor="password" className="signupInputLabel">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />
          <label htmlFor="confirmPassword" className="signupInputLabel">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />
          <label htmlFor="profile_picture" className="signupInputLabel">Profile Picture</label>
          <input
            type="file"
            name="profile_picture"
            accept="image/jpeg,image/png,image/gif"
            onChange={handleFileChange}
            autoComplete="off"
            className="signupInput"
          />
          <label htmlFor="description" className="signupInputLabel">Description</label>
          <input
            type="text"
            name="description"
            value={form.description}

            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />
          <label htmlFor="location" className="signupInputLabel">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />
          <label htmlFor="portfolio_link" className="signupInputLabel">Portfolio Link</label>
          <input
            type="text"
            name="portfolio_link"
            value={form.portfolio_link}
          
            onChange={handleChange}
            required
            autoComplete="off"
            className="signupInput"
          />
          <label htmlFor="role" className="signupInputLabel">Select a role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="signupInput"
            placeholder="Select a role"
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
              className="signupInputBox"
            />
          </div>
          {renderError()}
        </form>
      </div>
    </div>
  );
  
  
}
export default Register;
