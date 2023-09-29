import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000'  // Adjust if your Flask API is running on a different port
});

export default instance;
