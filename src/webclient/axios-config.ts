import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

// Base URL for our API
const BASE_URL = "https://api.example.com";

// Create an axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage if available
    const token = localStorage.getItem("auth_token");

    // If token exists, add it to the request headers
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can modify response data here before returning it
    return response;
  },
  (error: AxiosError) => {
    // Handle response errors
    if (error.response) {
      // The request was made, but the server responded with an error status
      const { status } = error.response;

      if (status === 401) {
        // Unauthorized, clear token and redirect to login
        localStorage.removeItem("auth_token");
        window.location.href = "/login";
      }

      if (status === 403) {
        // Forbidden
        console.error("You do not have permission to access this resource");
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Network error, please check your connection");
    } else {
      // Something happened in setting up the request
      console.error("Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
