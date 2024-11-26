import axiosInstance from './axiosInstance';


export const MovieForCategoryOrId = async (category:String, params:Object, token:String) => {

    try {
        const response = await axiosInstance.get(`/imdb/movies/${category}`, {
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


export const MoviesIdFilter = async (category:String, params:Object, token:String) => {

    try {
        const response = await axiosInstance.get(`/imdb/movies_filter/${category}`, {
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

export const MoviesSearch = async (params:Object, token:String) => {

    try {
        const response = await axiosInstance.get(`/imdb/movies_search/`, {
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






