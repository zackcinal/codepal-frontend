import api from "./apiConfig.js";

export const getProjects = async (id) => {
  try {
      const response = await api.get(`/profiles/${id}/projects/`);
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const createProject = async (userId, projectData) => {
  try {
    const response = await api.post(`/profiles/${userId}/projects/`, projectData);
    console.log("Posted project!", projectData)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (profileId, projectId) => {
  console.log(profileId, projectId);
  try {
    const response = await api.delete(`/profiles/${profileId}/projects/delete/`);
    console.log("Deleted project", projectId);
    return response.data;
  } catch (error) {
    throw error;
  }
};
