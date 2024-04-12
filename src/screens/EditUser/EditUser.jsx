import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../../services/users.js";
import "./EditUser.css";
import Navbar from "../../components/NavBar/Navbar.jsx";

function EditUser() {
  const { userId } = useParams();
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserById(userId);
        setForm(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setForm({
      ...form,
      [name]: newValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateUser(userId, form);
      navigate(`/user/${userId}`);
    } catch (error) {
      console.error(error);
      setForm((prevForm) => ({
        ...prevForm,
        isError: true,
        errorMsg: "Failed to update user",
        password: "",
        confirmPassword: "",
      }));
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "editUserDanger" : "";

    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit" className="editUserButton">Update</button>;
    }
  };

  return (
    <div className="editUserContainer">
      <Navbar />
      <div className="editUserFormContainer">
        <h1 className="editUserHeader">Edit User</h1>
        <form className="editUserForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            placeholder="Enter Your First Name"
            onChange={handleChange}
            autoComplete="off"
            className="editUserInput"
          />
          <input
            type="text"
            name="last_name"
            value={form.last_name}
            placeholder="Enter Your Last Name"
            onChange={handleChange}
            autoComplete="off"
            className="editUserInput"
          />
          <input
            type="text"
            name="username"
            value={form.username}
            placeholder="Enter Username"
            onChange={handleChange}
            autoComplete="off"
            className="editUserInput"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Enter Email"
            onChange={handleChange}
            autoComplete="off"
            className="editUserInput"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="Enter Password"
            onChange={handleChange}
            autoComplete="off"
            className="editUserInput"
          />
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
            autoComplete="off"
            className="editUserInput"
          />
          <input
            type="file"
            name="profile_picture"
            value={form.profile_picture}
            placeholder="Enter Profile Picture URL"
            onChange={handleChange}
            autoComplete="off"
            className="editUserInput"
          />
          <input
            type="text"
            name="description"
            value={form.description}
            placeholder="Enter Description"
            onChange={handleChange}
            autoComplete="off"
            className="editUserInput"
            id="fileInput"
          />
          <input
            type="text"
            name="location"
            value={form.location}
            placeholder="Enter Location"
            onChange={handleChange}
            autoComplete="off"
            className="editUserInput"
          />
          <input
            type="text"
            name="portfolio_link"
            value={form.portfolio_link}
            placeholder="Enter Portfolio Link"
            onChange={handleChange}
            autoComplete="off"
            className="editUserInput"
          />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="editUserInput"
            placeholder="Select a role"
          >
            <option value="FS">Full Stack Developer</option>
            <option value="BE">Back End Developer</option>
            <option value="FE">Front End Developer</option>
            <option value="UX">User Experience Designer</option>
          </select>
          <div className="editUserCheckbox">
            <p>Are you a developer?</p>
            <input
              type="checkbox"
              name="is_developer"
              checked={form.is_developer}
              onChange={handleChange}
              className="editUserInputBox"
            />
          </div>
          {renderError()}
        </form>
      </div>
    </div>
  );
}

export default EditUser;
