import axios from "axios";

const request = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 1000,
});

request.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default request;
