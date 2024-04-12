import api from "./apiConfig.js";

export const getProjects = async (id) => {
  console.log(id)
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