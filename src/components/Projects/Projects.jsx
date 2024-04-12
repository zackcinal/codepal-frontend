import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../../services/projects.js";

function Projects({ user }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projectsData = await getProjects(); 
        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div>
      <Link to='/createproject'>
        <button>Add Project</button>
      </Link>
      
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <img src={project.project_image} alt={project.title} />
            <p>{project.project_description}</p>
            <Link to={project.project_link}>View Project</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
