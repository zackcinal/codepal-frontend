import api from "./apiConfig.js";

export const getProjects = async (userId) => {
    try {
      const response = await api.get(`/profiles/${userId}/projects`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };