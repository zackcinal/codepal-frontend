import api from "./apiConfig";

export const getProfile = async (userId) => {
  try {
    const response = await api.get(`/profiles/${userId}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (userId, profileData) => {
  try {
    const response = await api.put(`/profiles/${userId}/`, profileData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProfile = async (userId, profileData) => {
  try {
    const response = await api.post(`/profiles/`, {
      ...profileData,
      user: userId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
