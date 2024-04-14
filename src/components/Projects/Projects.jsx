import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjects, deleteProject } from "../../services/projects.js";
import "./Projects.css";
import { getLikesUnlikes } from '../../services/likes.js'
import { verifyUser } from "../../services/users.js";


function Projects(profilePage) {
  const [projects, setProjects] = useState([]);
  // const [likes, setLikes] = useState({});
  // const [unLikes, setUnLikes] = useState({});

  const [isCurrentUser, setIsCurrentUser] = useState (false)


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

  useEffect(() => {
    async function checkIfUserIsTheSame() {
     const user = await verifyUser()
 
     if (user.profile.id == profileId) setIsCurrentUser(true)
    } 
 
    checkIfUserIsTheSame()
   }, [useParams()])

// useEffect(() => {
//   async function fetchLikes() {
//     console.log(projects)
//     const response = projects.length > 0 && await getLikesUnlikes(projects[0]?.id)
//     console.log(response)
//     setLikes(response.likes)
//     setUnLikes(response.unLikes)
//   }

// fetchLikes()

// }, [projects])


  async function handleDelete(profileId, projectId) {
    try {
      if (window.confirm("Are you sure you want to delete this item?")) {
        await deleteProject(profileId, projectId);
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  }

  return (
    <div>
      {
         isCurrentUser ? 
      <Link to="/createproject">
        <button className="add-button">Add Project</button>
      </Link>
      : null
}
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="image-container">
              <img src={project.project_image} alt={project.title} />
              <button className="delete-button" onClick={() => handleDelete(project.profile)}>Delete Project</button>
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
