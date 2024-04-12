import api from "./apiConfig.js";

export const getFollowers = async (userId) => {
    try {
        const response = await api.get(`/user/${userId}/followers/`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getFollowerFollowings = async () => {
    try {
        const response = await api.get(`/follows/`)
        return response.data;
    } catch (error) {
        throw error;
    }
}