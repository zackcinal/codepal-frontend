import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../services/projects.js";
import "./CreateProject.css";

function CreateProject({ user, profile }) {
  const navigate = useNavigate();
  const [project, setProject] = useState({
    title: "",
    image: "", 
    description: "",
    link: "", 
    profile: profile,
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const projectData = {
        title: project.title,
        project_description: project.description,
        project_image: project.image,
        project_link: project.link,
        profile: profile.id,
      };
      if (!profile || !profile.id) {
        throw new Error("User ID not available");
      }
      const userId = profile.id;
      console.log(userId, projectData)
      await createProject(userId, projectData); 
      navigate(`/userprofile/${profile.id}`);
    } catch (error) {
      console.error("Error creating project:", error);
      setError("Failed to create project. Please try again.");
    }
  };

  return (
    <div className="create-project-root">
      <div className="create-project-heading">
        <h2>Add a Project</h2>
      </div>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-title"
          placeholder="Title"
          name="title"
          value={project.title}
          onChange={handleChange}
          required
          autoFocus
        />
        <input
          className="input-image"
          placeholder="Image URL"
          type="url"
          name="image"
          value={project.image}
          onChange={handleChange}
          required
        />
        <input
          className="input-description"
          placeholder="Description"
          name="description"
          value={project.description}
          onChange={handleChange}
          required
        />
        <input
          className="input-link"
          id="project-link"
          placeholder="Project Link"
          type="url"
          name="link"
          value={project.link}
          onChange={handleChange}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProject;
