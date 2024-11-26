import axiosInstance from './axiosInstance';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const loginApi = async (email: string, password: string) => {
    
    try {
        const response = await axiosInstance.post(`/auth/login/`, {
            email,
            password,
        });

        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Login failed');
        } else {
            throw new Error('An error occurred during the request');
        }
    }
};

export const registerApi = async (email: string, password: string) => {
    try {
        const response = await axiosInstance.post(`${API_URL}/auth/register/`, {
            email,
            password,
        });

        return response.data;
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Register failed');
        } else {

            throw new Error('An error occurred during the request');
        }
    }
};

