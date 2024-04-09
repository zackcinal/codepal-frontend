import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/users.js";

function Register({ setUser }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    is_developer: "",
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
        email: "prevForm.email",
        password: "",
        first_name:"",
        last_name:"",
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
    <div className="home-container">
      <div>
   
      </div>
      <div>
        <form className="home-form" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <input
            type='first_name'
            name='first_name'
            value={form.first_name}
            placeholder='Enter Your First Name'
            onChange={handleChange}
            required
            autoComplete="off"
          />
             <input
            type='last_name'
            name='last_name'
            value={form.last_name}
            placeholder='Enter Your Last Name'
            onChange={handleChange}
            required
            autoComplete="off"
          />
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
        
           <input
            type='password'
            name='password'
            value={form.password}
            placeholder='Confirm Password'
            onChange={handleChange}
            required
            autoComplete="off"
          />
          Are you a developer?
             <input
            type='checkbox'
            name='is_developer'
            value={form.is_developer}
            placeholder= "hello"
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