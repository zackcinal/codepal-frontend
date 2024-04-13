import api from "./apiConfig.js";

export const getLikes = async () => {
    try {
        const response = await api.get(`/likes/`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getLikesUnlikes = async () => {
    try {
        const response = await api.get(`/likes/`)
        return response.data
    } catch (error) {
        throw error;
    }
}