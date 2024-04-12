import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjects } from "../../services/projects.js";
import "./Projects.css";

function Projects({ profilePage }) {
  const [projects, setProjects] = useState([]);
  let { profileId } = useParams();
  useEffect(() => {
    async function fetchProjects() {
      try {
        const projectsData = await getProjects(profileId);
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div>
      <Link to="/createproject">
        <button className="add-button">Add Project</button>
      </Link>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="image-container">
              <img src={project.project_image} alt={project.title} />
              <button className="delete-button">Delete Project</button>
            </div>
            <div>
              <h2>{project.title}</h2>
              <p>{project.project_description}</p>
              <Link to={project.project_link} target="_blank">
                <h4>View Project</h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
