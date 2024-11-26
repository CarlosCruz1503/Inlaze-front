import axiosInstance from './axiosInstance';


export const AddFavorite = async (payload,token) => {

    try {
        const response = await axiosInstance.post(`/movie/create/`,payload, {
            headers:{
                Authorization: `key ${token}`
            }
        });

        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Success get');
        } else {
            throw new Error('An error occurred during the request');
        }
    }
};


export const removeFavorite = async (idMovie:String,userId:String, token) => {

    try {
        const response = await axiosInstance.delete(`/movie/delete/${idMovie}/${userId}`, {
            headers:{
                Authorization: `key ${token}`
            }
        });

        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Success get');
        } else {
            throw new Error('An error occurred during the request');
        }
    }
};

export const ListFavoriteUser = async (userId:String, token) => {

    try {
        const response = await axiosInstance.get(`/movie/list/${userId}`, {
            headers:{
                Authorization: `key ${token}`
            }
        });

        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Success get');
        } else {
            throw new Error('An error occurred during the request');
        }
    }
};

export const MoviesGenre = async (params:Object, token:String) => {

    try {
        const response = await axiosInstance.get(`/imdb/genre/`, {
            params:params,
            headers:{
                Authorization: `key ${token}`
            }
        });

        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Success get');
        } else {
            throw new Error('An error occurred during the request');
        }
    }
};






