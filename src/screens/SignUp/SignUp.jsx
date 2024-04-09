import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/users.js";
import './SignUp.css'

function Register({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
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
      const userData = await signUp(form);
      setUser(userData);

      navigate("/home");
    } catch (error) {
      console.error(error);
      setForm((prevForm) => ({
        isError: true,
        errorMsg: "Invalid Credentials",
        username: prevForm.username,
        email: "",
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
      return <button type="submit">Register</button>;
    }
  };

  return (
    <div className="sigupContainer">
      <div>
   
      </div>
      <div>
        <form className="homeForm" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <input
            type='email'
            name='email'
            value={form.email}
            placeholder='Enter Email'
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <input
            type='password'
            name='password'
            value={form.password}
            placeholder='Enter Password'
            onChange={handleChange}
            required
            autoComplete="off"
          />
      

          {renderError()}
        </form>
      </div>
    </div>
  )
}

export default Register