import api from "./apiConfig.js";

export const getFollowers = async (userId) => {
    try {
        const response = await api.get(`/user/${userId}/followers/`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getFollowerFollowings = async (id) => {
    try {
        const response = await api.get(`/follows/${id}/`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addFollows = async (id1, id2) => {
    try {
        const response = await api.post(`/follower/${id1}/follows/${id2}/`)
        return response.data
    } catch (error) {
        throw error;
    }
}