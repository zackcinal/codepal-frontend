import api from "./apiConfig";

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/users/register/", credentials);
    localStorage.setItem("token", resp.data.access);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/users/login/", credentials);
    localStorage.setItem("token", resp.data.access);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};


export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const resp = await api.get("/users/token/refresh/");
    localStorage.setItem("token", resp.data.access);
    return resp.data;
  }
  return false;
};

export const updateUser = async (userId, newData) => {
  try {
    const resp = await api.post(`/users/${userId}update/`, newData);
    localStorage.setItem("token", resp.data.access);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProfiles = async () => {
  try {
    const response = await api.get("/developers/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProfile = async (userId) => {
  try {
    const response = await api.get(`/profiles/${userId}/`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
