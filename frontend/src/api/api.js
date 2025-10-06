import axios from "axios";

const endpointUrl = "http://localhost:5039/api";

// Create axios instance
const api = axios.create({
    baseURL: endpointUrl,
});

export default api;
