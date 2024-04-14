import api from "./apiConfig.js";

export const getReviews = async (id) => {
    try {
      const response = await api.get(`/profiles/${id}/reviews/`);
      return response.data;
    } catch (error) {
      throw error;
    }
    
  };
  
export const getReview = async (id) => {
  try {
    const response = await api.get(`/reviews/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const addReview = async (id, data) => {
  try {
    const response = await api.post(`/profiles/${id}/reviews/`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};