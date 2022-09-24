import axios from "axios";

const BASE_URL = 'https://mongodb-auth-app.onrender.com/api/';

export const publicRequest = axios.create({
    baseURL: BASE_URL
})