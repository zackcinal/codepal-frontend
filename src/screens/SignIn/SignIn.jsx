import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../services/users.js";
import "./SignIn.css";
import Navbar from "../../components/NavBar/Navbar.jsx";

function SignIn({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userData = await signIn(form);
      setUser(userData);

      navigate("/home");
    } catch (error) {
      console.error(error);
      setForm((prevForm) => ({
        isError: true,
        errorMsg: "Invalid Credentials",
        username: prevForm.username,
        password: "",
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
      return <button type="submit">Log In</button>;
    }
  };

  return (
    <div className="signinContainer">
      <Navbar />
      <form className="homeFormSignIn" onSubmit={handleSubmit}>
        <h1>SIGN IN</h1>
        <label>USERNAME</label>
        <input
          type="text"
          name="username"
          value={form.username}
          placeholder="Enter Username"
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <label>PASSWORD</label>
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="Enter Password"
          onChange={handleChange}
          required
          autoComplete="off"
        />

        {renderError()}

        <Link to="/signup">
          <p>No account? Sign up here!</p>
        </Link>
      </form>
    </div>
  );
}

export default SignIn;
