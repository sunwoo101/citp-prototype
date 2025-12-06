import axios from "axios";

const endpointUrl = "https://kky4u.online/api";

// Create axios instance
const api = axios.create({
    baseURL: endpointUrl,
});

export default api;
