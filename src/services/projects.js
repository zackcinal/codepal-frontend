import api from "./apiConfig.js";

export const getProjects = async (userId) => {
  try {
      const response = await api.get(`/profiles/${userId}/projects`);
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const createProject = async (userId, projectData) => {
  try {
    const response = await api.post(`/profiles/${userId}/projects/`, projectData);
    return response.data;
  } catch (error) {
    throw error;
  }
};