import { useState, useParams } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser, deleteUser, signOut } from "../../services/users.js";
import "./EditUser.css";
import Navbar from "../../components/NavBar/Navbar.jsx";

function EditUser({ user, profile, setUser, setProfile }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    user: {
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
    },
    description: profile.description,
    location: profile.location,
    portfolio_link: profile.portfolio_link,
    role: profile.role,
    is_developer: profile.is_developer,
    isError: false,
    errorMsg: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: newValue,
    }));
  };

  // const handleUserChange = (e) => {
  //   const { name, value } = e.target;

  //   setForm(prevForm => ({
  //     ...prevForm,
  //     user: {
  //       ...prevForm.user,
  //       [name]: value
  //     }
  //   }));
  // };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Assuming only one file is selected
    setForm((prevForm) => ({
      ...prevForm,
      profile_picture: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("user[first_name]", form.user.first_name);
    formData.append("user[last_name]", form.user.last_name);
    formData.append("user[username]", form.user.username);
    formData.append("user[email]", form.user.email);
    formData.append("description", form.description);
    formData.append("location", form.location);
    formData.append("portfolio_link", form.portfolio_link);
    formData.append("role", form.role);
    formData.append("is_developer", form.is_developer);

    if (form.profile_picture) {
      formData.append("profile_picture", form.profile_picture);
    }

    try {
      await updateUser(formData); // Make sure updateUser can handle FormData
      navigate(`/userprofile/${profile.id}`);
    } catch (error) {
      console.error(error);
      setForm((prevForm) => ({
        ...prevForm,
        isError: true,
        errorMsg: "Failed to update user",
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
      return (
        <button type="submit" className="editUserButton">
          Update
        </button>
      );
    }
  };

  const handleDeleteUser = async () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      try {
        await deleteUser(user.id);
        await signOut();
        // Redirect or show success message
        setUser(null);
        setProfile(null);
        navigate("/"); // Redirect to home or another appropriate page
      } catch (error) {
        console.error("Error deleting profile:", error);
        // Handle error: display an error message
      }
    }
  };

  return (
    <div className="editUserContainer">
      {/* <Navbar /> */}
      <div className="editUserFormContainer">
        <h1 className="editUserHeader">Edit User</h1>
        <img
          className="editUserImage"
          src={`http://127.0.0.1:8000${profile.profile_picture}`}
          alt="Profile Picture"
        />
        <form className="editUserForm" onSubmit={handleSubmit}>
          {/* <input
            type="text"
            name="first_name"
            value={form.user.first_name}
            placeholder="Enter Your First Name"
            onChange={handleUserChange}
            autoComplete="off"
            className="editUserInput"
          />
          <input
            type="text"
            name="last_name"
            value={form.user.last_name}
            placeholder="Enter Your Last Name"
            onChange={handleUserChange}
            autoComplete="off"
            className="editUserInput"
          />
          <input
            type="text"
            name="username"
            value={form.user.username}
            placeholder="Enter Username"
            onChange={handleUserChange}
            autoComplete="off"
            className="editUserInput"
          />
          <input
            type="email"
            name="email"
            value={form.user.email}
            placeholder="Enter Email"
            onChange={handleUserChange}
            autoComplete="off"
            className="editUserInput"
          /> */}

          <input
            id="fileInput"
            type="file"
            name="profile_picture"
            accept="image/jpeg,image/png,image/gif"
            onChange={handleFileChange}
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
        <button className="deleteButton" onClick={handleDeleteUser}>
          Delete Profile
        </button>
      </div>
    </div>
  );
}

export default EditUser;
